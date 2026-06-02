SupportAI — Plano Oficial do Projeto

Visão Geral

O SupportAI é uma plataforma inteligente de suporte técnico com IA multimodal desenvolvida utilizando Next.js, TypeScript e Gemini API.

O projeto simula um ambiente corporativo de Service Desk moderno, com arquitetura preparada para múltiplos agentes especializados coordenados por um orquestrador principal.

O sistema é capaz de:

- responder problemas técnicos,
- analisar imagens e prints,
- realizar troubleshooting,
- manter contexto de conversa,
- gerar descrições técnicas de chamados,
- atuar como analista de suporte técnico virtual.

---

Arquitetura do Sistema

O SupportAI foi arquitetado para funcionar utilizando um modelo de múltiplos agentes especializados coordenados por um agente central.

---

Orquestrador Principal

Nome:

ATLAS

Responsabilidades:

- gerenciamento da conversa,
- memória contextual,
- coordenação de subagentes,
- análise inicial do problema,
- centralização da resposta final,
- interpretação multimodal,
- geração de fechamento técnico.

---

Subagentes Planejados

NEXUS — Agente de Redes

Especializado em:

- TCP/IP
- DNS
- DHCP
- VPN
- Firewall
- Latência
- Conectividade
- Roteamento

---

ARES — Agente Windows

Especializado em:

- Windows
- BSOD
- Drivers
- Serviços
- Registro
- Atualizações
- Performance
- Active Directory básico

---

ORION — Agente Azure

Especializado em:

- Máquinas Virtuais
- VNet
- VPN Gateway
- Azure Monitor
- Network Watcher
- Recursos Azure
- Custos
- Infraestrutura Cloud

---

HELIX — Agente Office 365

Especializado em:

- Outlook
- Teams
- Exchange
- Licenciamento
- Autenticação
- Sincronização
- Microsoft 365

---

TITAN — Agente de Impressoras

Especializado em:

- Spooler
- Drivers
- Impressão em rede
- Compartilhamento
- Filas de impressão

---

Fluxo Futuro da Arquitetura

Usuário
   ↓
ATLAS (Orquestrador Principal)
   ↓
Subagente Especializado
   ↓
Resposta Final

---

Objetivo da Arquitetura

Permitir:

- modularização,
- escalabilidade,
- especialização técnica,
- maior precisão nas respostas,
- separação de responsabilidades,
- evolução para arquitetura enterprise multi-agent.

---

Stack Tecnológica

Frontend

- Next.js 16
- React
- TypeScript
- TailwindCSS

---

Backend

- API Routes
- FormData
- Upload de imagens
- Processamento multimodal

---

Inteligência Artificial

- Gemini 1.5 Flash
- Memória contextual
- IA multimodal
- Prompt Engineering

---

Estrutura Atual do Projeto

suporte-ai/
│
├── src/
│   │
│   ├── app/
│   │   │
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   └── ...
│
├── .env.local
├── package.json
├── tsconfig.json
├── PLANO.md
│
└── node_modules/

---

Funcionalidades Implementadas

Fase 1 — Estrutura Base

✅ Next.js configurado
✅ TypeScript configurado
✅ TailwindCSS configurado
✅ Gemini API integrada
✅ API backend criada

---

Fase 2 — Interface Chat

✅ Interface estilo ChatGPT
✅ Histórico visual
✅ UX moderna
✅ Respostas em tempo real
✅ Interface responsiva

---

Fase 3 — Memória Contextual

✅ Histórico enviado para IA
✅ Conversa contínua
✅ Memória contextual
✅ Continuidade de troubleshooting

---

Fase 4 — IA Multimodal

✅ Upload de imagens
✅ Preview de imagem anexada
✅ Conversão Base64
✅ Envio multimodal para Gemini
✅ Interpretação de prints
✅ Diagnóstico visual

---

Funcionalidades Atuais do Sistema

O sistema atualmente consegue:

- diagnosticar problemas técnicos,
- interpretar prints,
- analisar erros do Windows,
- auxiliar em VPN,
- auxiliar em DNS,
- auxiliar em conectividade,
- auxiliar em Office,
- manter contexto,
- gerar descrição de fechamento de chamados,
- simular analista de suporte técnico real.

---

Arquivos Importantes

Frontend

src/app/page.tsx

Responsável por:

- interface,
- histórico visual,
- upload de imagens,
- envio de mensagens,
- experiência do usuário.

---

Backend

src/app/api/chat/route.ts

Responsável por:

- integração Gemini,
- memória contextual,
- processamento multimodal,
- prompt da IA,
- análise de imagens,
- geração de respostas.

---

Variáveis de Ambiente

.env.local

GEMINI_API_KEY=SUA_CHAVE

---

Dependências Utilizadas

Instalação

npm install
npm install @google/genai

---

Inicialização do Projeto

npm run dev

Projeto disponível em:

http://localhost:3000

---

Modelo Atual

gemini-1.5-flash

Escolhido por:

- melhor estabilidade no free tier,
- suporte multimodal,
- menor incidência de quota errors.

---

Tratamento de Erros

O sistema atualmente trata:

- indisponibilidade da API,
- quota exceeded,
- overload da Gemini API,
- erros de upload,
- falhas de processamento.

---

Roadmap Futuro

Fase 5 — Persistência

Planejado:

- Supabase
- Banco de dados
- Histórico persistente
- Chamados salvos
- Usuários

---

Fase 6 — Dashboard

Planejado:

- painel de chamados,
- SLA,
- métricas,
- estatísticas,
- monitoramento.

---

Fase 7 — Multiagentes

Planejado:

- implementação dos subagentes,
- roteamento inteligente,
- especialização técnica,
- arquitetura modular.

---

Fase 8 — Autenticação

Planejado:

- login,
- sessões,
- controle de acesso,
- usuários corporativos.

---

Tecnologias Futuras Planejadas

- Supabase
- PostgreSQL
- LangGraph
- CrewAI
- MCP
- AutoGen
- RAG
- Vector Database
- WebSockets
- Microsoft Graph
- Azure APIs

---

Possíveis Evoluções

- Exportação PDF
- Integração GLPI
- Integração Azure
- Voz em tempo real
- Atendimento em streaming
- Análise automática de logs
- OCR
- Dashboard administrativo
- Chat em tempo real

---

Recuperação do Projeto

Caso o projeto apresente problemas:

Reinstalar dependências

npm install

---

Garantir dependência Gemini

npm install @google/genai

---

Verificar .env.local

GEMINI_API_KEY=SUA_CHAVE

---

Executar projeto

npm run dev

---

Objetivo do Projeto

Criar uma plataforma moderna de suporte técnico com IA multimodal baseada em arquitetura multiagente corporativa.

---

Autor

Guilherme Ramalho

Projeto focado em:

- suporte técnico,
- cloud,
- IA aplicada,
- automação,
- infraestrutura moderna,
- arquitetura multiagente.
