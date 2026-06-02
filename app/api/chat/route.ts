import { supabase } from "../../../lib/supabase";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

type Message = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const messagesRaw = formData.get("messages") as string;

    const messages = JSON.parse(messagesRaw) as Message[];

    let conversationId = formData.get("conversationId") as string | null;

    /*
      CRIA NOVA CONVERSA AUTOMATICAMENTE
    */
    if (!conversationId) {
      const firstMessage = messages[0]?.content || "Novo chamado";

      const { data: conversation, error } = await supabase
        .from("conversation")
        .insert({
          title: firstMessage.slice(0, 40),
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      conversationId = conversation.id;
    }

    /*
      IMAGEM
    */
    const image = formData.get("image") as File | null;

    let imagePart = null;

    if (image) {
      const bytes = await image.arrayBuffer();

      const buffer = Buffer.from(bytes);

      imagePart = {
        inlineData: {
          data: buffer.toString("base64"),
          mimeType: image.type,
        },
      };
    }

    /*
      HISTÓRICO DA CONVERSA
    */
    const conversation = messages
      .map((msg) => {
        return `${
          msg.role === "user" ? "Usuário" : "Assistente"
        }: ${msg.content}`;
      })
      .join("\n\n");

    /*
      GEMINI
    */
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",

      contents: [
        {
          role: "user",
          parts: [
            {
              text: `
Você é um analista de suporte técnico especializado em:

- Windows
- Redes
- TCP/IP
- DHCP
- DNS
- VPN
- Azure básico
- Office 365
- Impressoras

Seu objetivo é:
- diagnosticar problemas técnicos
- responder de forma profissional
- fornecer passo a passo
- sugerir testes técnicos
- explicar soluções claramente
- agir como um analista de suporte técnico real

Se houver uma imagem enviada:
- analise cuidadosamente
- identifique erros técnicos
- interprete mensagens
- utilize a imagem como contexto principal

Somente gere a descrição técnica do chamado quando o usuário confirmar claramente que o problema foi resolvido.

Histórico da conversa:
${conversation}
              `,
            },

            ...(imagePart ? [imagePart] : []),
          ],
        },
      ],
    });

    /*
      SALVA MENSAGENS
    */
    const lastMessage = messages[messages.length - 1];

    await supabase.from("messages").insert([
      {
        conversation_id: conversationId,
        role: lastMessage.role,
        content: lastMessage.content,
      },

      {
        conversation_id: conversationId,
        role: "assistant",
        content: response.text,
      },
    ]);

    /*
      RETORNO
    */
    return Response.json({
      reply: response.text,
      conversationId,
    });
  } catch (error) {
    console.error(error);

    return Response.json({
      error:
        "O servidor da IA está temporariamente sobrecarregado. Tente novamente em alguns segundos.",
    });
  }
}
