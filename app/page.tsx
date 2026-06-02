"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type Conversation = {
  id: string;
  title: string;
};

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchConversations();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function fetchConversations() {
    const res = await fetch("/api/conversations");

    const data = await res.json();

    if (data.conversations) {
      setConversations(data.conversations);
    }
  }

  async function loadConversationMessages(id: string) {
    const res = await fetch(`/api/messages?conversationId=${id}`);

    const data = await res.json();

    if (data.messages) {
      setMessages(data.messages);
      setConversationId(id);
    }
  }

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    const formData = new FormData();

    formData.append("messages", JSON.stringify([...messages, userMessage]));

    if (conversationId) {
      formData.append("conversationId", conversationId);
    }

    if (image) {
      formData.append("image", image);
    }

    const res = await fetch("/api/chat", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.conversationId) {
      setConversationId(data.conversationId);
    }

    const assistantMessage: Message = {
      role: "assistant",
      content: data.reply,
    };

    setMessages((prev) => [...prev, assistantMessage]);

    setMessage("");
    setImage(null);
    setLoading(false);

    fetchConversations();
  }

  return (
    <main className="min-h-screen bg-[#09090B] text-white flex">
      {/* SIDEBAR */}
      <aside className="w-[300px] border-r border-zinc-800 bg-[#111113] p-6 hidden md:flex flex-col">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">SupportAI</h1>

          <p className="text-zinc-400 mt-2 text-sm">
            Plataforma inteligente de suporte técnico.
          </p>
        </div>

        {/* NOVO CHAT */}
        <div className="mt-8">
          <button
            onClick={() => {
              setMessages([]);
              setConversationId(null);
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-2xl p-3 font-semibold"
          >
            + Novo Chat
          </button>
        </div>

        {/* HISTÓRICO */}
        <div className="mt-8 flex-1 overflow-y-auto">
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
            Histórico
          </p>

          <div className="flex flex-col gap-2">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => loadConversationMessages(conversation.id)}
                className={`text-left border rounded-2xl p-3 transition ${
                  conversationId === conversation.id
                    ? "bg-blue-600/20 border-blue-500/30"
                    : "bg-zinc-900 border-zinc-800 hover:bg-zinc-800"
                }`}
              >
                <p className="text-sm line-clamp-2">{conversation.title}</p>
              </button>
            ))}
          </div>
        </div>

        {/* STATUS */}
        <div className="flex flex-col gap-4 mt-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
            <p className="text-sm text-zinc-400">Orquestrador</p>

            <h2 className="text-lg font-semibold mt-1">ATLAS</h2>

            <div className="flex items-center gap-2 mt-3">
              <div className="w-2 h-2 rounded-full bg-green-500" />

              <span className="text-sm text-green-400">Online</span>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
            <p className="text-sm text-zinc-400">IA</p>

            <h2 className="text-lg font-semibold mt-1">Gemini 2.5 Flash</h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
            <p className="text-sm text-zinc-400">Banco de Dados</p>

            <h2 className="text-lg font-semibold mt-1">Supabase</h2>
          </div>
        </div>
      </aside>

      {/* CHAT */}
      <section className="flex-1 flex flex-col">
        {/* HEADER */}
        <header className="border-b border-zinc-800 bg-[#111113]/80 backdrop-blur-xl px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Support Center</h2>

            <p className="text-sm text-zinc-400">
              Assistente corporativo inteligente
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm">
              Vision Active
            </div>

            <div className="px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm">
              Multimodal
            </div>
          </div>
        </header>

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-5">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h2 className="text-3xl font-bold">Bem-vindo ao SupportAI</h2>

              <p className="text-zinc-400 mt-3 max-w-xl">
                Envie problemas técnicos, screenshots, erros de sistema ou
                falhas de rede para análise inteligente.
              </p>
            </div>
          )}

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[75%] rounded-2xl px-5 py-4 whitespace-pre-wrap shadow-lg ${
                msg.role === "user"
                  ? "bg-blue-600 self-end"
                  : "bg-zinc-900 border border-zinc-800 self-start"
              }`}
            >
              {msg.content}
            </div>
          ))}

          {loading && (
            <div className="bg-zinc-900 border border-zinc-800 self-start px-5 py-4 rounded-2xl">
              ATLAS está analisando o problema...
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* INPUT */}
        <div className="border-t border-zinc-800 bg-[#111113] p-6">
          <div className="max-w-5xl mx-auto flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  if (file) {
                    setImage(file);
                  }
                }}
                className="text-sm text-zinc-400"
              />

              {image && (
                <div className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2 text-sm">
                  📎 {image.name}
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <textarea
                className="flex-1 bg-zinc-900 border border-zinc-700 rounded-2xl p-5 h-28 resize-none outline-none focus:border-blue-500 transition"
                placeholder="Descreva seu problema técnico..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button
                onClick={sendMessage}
                disabled={loading}
                className="w-[140px] rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
              >
                {loading ? "Analisando..." : "Enviar"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
