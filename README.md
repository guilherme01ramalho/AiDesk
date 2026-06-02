# SupportAI

Plataforma inteligente de suporte técnico com IA multimodal desenvolvida com Next.js, TypeScript e Gemini API.

O SupportAI simula um ambiente corporativo moderno de Service Desk, utilizando arquitetura preparada para múltiplos agentes especializados coordenados por um orquestrador central.

---

## Visão Geral

O SupportAI foi criado para atuar como um analista virtual de suporte técnico capaz de:

* Diagnosticar problemas técnicos
* Interpretar prints e imagens
* Realizar troubleshooting guiado
* Manter contexto de conversa
* Gerar descrições técnicas de chamados
* Auxiliar em ambientes Windows, Redes, Azure e Microsoft 365
* Simular atendimento de Service Desk corporativo

---

## Arquitetura

### Orquestrador Principal

#### ATLAS

Responsável por:

* Gerenciamento da conversa
* Memória contextual
* Coordenação de agentes especializados
* Análise inicial dos problemas
* Interpretação multimodal
* Consolidação da resposta final

---

### Agentes Especializados (Roadmap)

#### NEXUS — Redes

Especialidades:

* TCP/IP
* DNS
* DHCP
* VPN
* Firewall
* Roteamento
* Conectividade
* Latência

#### ARES — Windows

Especialidades:

* Windows
* BSOD
* Drivers
* Serviços
* Registro do Windows
* Atualizações
* Performance
* Active Directory

#### ORION — Azure

Especialidades:

* Máquinas Virtuais
* Azure Networking
* VPN Gateway
* Azure Monitor
* Network Watcher
* Infraestrutura Cloud
* Custos

#### HELIX — Microsoft 365

Especialidades:

* Outlook
* Teams
* Exchange Online
* Licenciamento
* Autenticação
* Sincronização

#### TITAN — Impressão

Especialidades:

* Impressoras locais
* Impressoras em rede
* Drivers
* Spooler
* Compartilhamentos
* Filas de impressão

---

## Fluxo da Arquitetura

```text
Usuário
   ↓
ATLAS (Orquestrador)
   ↓
Agente Especializado
   ↓
Resposta Final
```

---

## Stack Tecnológica

### Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js API Routes
* FormData
* Upload de imagens
* Processamento multimodal

### Inteligência Artificial

* Gemini 1.5 Flash
* Memória contextual
* Prompt Engineering
* IA Multimodal

---

## Funcionalidades Implementadas

### Estrutura Base

* Next.js configurado
* TypeScript configurado
* Tailwind configurado
* Integração com Gemini API

### Chat Inteligente

* Interface estilo ChatGPT
* Histórico visual
* Respostas em tempo real
* Design responsivo

### Memória Contextual

* Histórico enviado para a IA
* Continuidade de conversa
* Contexto preservado entre mensagens

### IA Multimodal

* Upload de imagens
* Preview de anexos
* Conversão Base64
* Análise de screenshots
* Diagnóstico visual

### Suporte Técnico

O sistema auxilia em:

* Windows
* Microsoft 365
* Azure
* VPN
* DNS
* Redes
* Impressoras
* Troubleshooting geral

---

## Estrutura do Projeto

```text
suporte-ai/
│
├── src/
│   ├── app/
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
├── README.md
│
└── node_modules/
```

---

## Instalação

### Clonar o repositório

```bash
git clone https://github.com/seu-usuario/supportai.git
```

### Acessar a pasta

```bash
cd supportai
```

### Instalar dependências

```bash
npm install
```

### Instalar SDK Gemini

```bash
npm install @google/genai
```

---

## Configuração

Crie o arquivo:

```text
.env.local
```

Adicione sua chave Gemini:

```env
GEMINI_API_KEY=SUA_CHAVE_AQUI
```

---

## Executando o Projeto

Modo desenvolvimento:

```bash
npm run dev
```

Acesse:

```text
http://localhost:3000
```

---

## Tratamento de Erros

O sistema possui tratamento para:

* Falhas de conexão com a API
* Quota Exceeded
* Overload da Gemini API
* Erros de upload
* Falhas de processamento multimodal

---

## Roadmap

### Fase 5 — Persistência

* Supabase
* PostgreSQL
* Histórico persistente
* Gestão de usuários

### Fase 6 — Dashboard

* Painel de chamados
* SLA
* Métricas
* Estatísticas

### Fase 7 — Multiagentes

* Roteamento inteligente
* Especialização técnica
* Classificação automática de problemas

### Fase 8 — Autenticação

* Login
* Sessões
* Controle de acesso
* Usuários corporativos

### Fase 9 — RAG

* Base de conhecimento
* Busca vetorial
* Documentação corporativa
* Procedimentos internos

### Fase 10 — Integrações

* Microsoft Teams
* Azure
* GLPI
* Zabbix
* Grafana
* Microsoft Graph

---

## Tecnologias Futuras

* Supabase
* PostgreSQL
* LangGraph
* CrewAI
* AutoGen
* MCP
* RAG
* pgvector
* WebSockets
* Azure APIs
* Microsoft Graph

---

## Objetivo do Projeto

Construir uma plataforma moderna de suporte técnico baseada em IA multimodal, preparada para arquitetura multiagente, automação de atendimento e integração com ambientes corporativos.

---

## Autor

**Guilherme Ramalho**

Focado em:

* Service Desk
* Infraestrutura
* Cloud Computing
* Azure
* Inteligência Artificial
* Automação
* Arquiteturas Multiagente
