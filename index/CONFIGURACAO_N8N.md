# 🔗 Guia de Configuração do Webhook n8n

## 📋 Visão Geral

Este documento explica como configurar o webhook n8n para receber os dados dos formulários do site da Onchannel.

## 🚀 Passo a Passo

### 1. Criar Workflow no n8n

1. Acesse seu painel n8n: `https://seu-dominio.n8n.cloud`
2. Clique em **"New Workflow"** (Novo Fluxo)
3. Dê um nome ao workflow: `Onchannel - Captura de Leads`

### 2. Adicionar Nó Webhook

1. Clique no botão **"+"** para adicionar um novo nó
2. Busque por **"Webhook"**
3. Selecione o nó **"Webhook"**
4. Configure:
   - **HTTP Method**: `POST`
   - **Path**: `onchannel-contato` (ou outro nome de sua preferência)
   - **Response Mode**: `Last Node`
   - **Response Code**: `200`

### 3. Copiar URL do Webhook

1. Depois de configurar o webhook, clique em **"Execute Node"**
2. Copie a **Production URL** que será exibida (exemplo: `https://seu-n8n.app/webhook/onchannel-contato`)

### 4. Configurar no Site

1. Abra o arquivo `js/main.js`
2. Localize a linha 4:
```javascript
const N8N_WEBHOOK_URL = 'https://seu-n8n.app/webhook/onchannel-contato';
```
3. Substitua pela URL do seu webhook
4. Salve o arquivo

### 5. Adicionar Nós de Processamento (Opcional)

Você pode adicionar nós para:

#### A) Enviar E-mail de Notificação
1. Adicione nó **"Gmail"** ou **"Send Email"**
2. Configure:
   - **To**: `comercial@onchannel.io`
   - **Subject**: `Novo Lead - {{$json["nome"]}}`
   - **Body**: Template com os dados do formulário

#### B) Salvar em Planilha Google
1. Adicione nó **"Google Sheets"**
2. Configure:
   - **Operation**: `Append`
   - **Spreadsheet**: Selecione sua planilha
   - **Sheet**: Nome da aba
   - Mapeie os campos do formulário

#### C) Enviar para CRM
1. Adicione nó do seu CRM (Pipedrive, HubSpot, etc.)
2. Configure os campos de mapeamento

#### D) Enviar Notificação WhatsApp
1. Adicione nó **"WhatsApp Business"** ou similar
2. Configure para notificar a equipe comercial

#### E) Salvar em Banco de Dados
1. Adicione nó **"MySQL"**, **"PostgreSQL"** ou similar
2. Configure a conexão e a query de inserção

### 6. Template de E-mail Sugerido

```html
<h2>Novo Lead Recebido - Onchannel</h2>

<p><strong>Origem:</strong> {{$json["origem"]}}</p>

<h3>Dados do Contato:</h3>
<ul>
  <li><strong>Nome:</strong> {{$json["nome"]}}</li>
  <li><strong>E-mail:</strong> {{$json["email"]}}</li>
  <li><strong>Telefone:</strong> {{$json["telefone"]}}</li>
  <li><strong>Empresa:</strong> {{$json["empresa"]}}</li>
  <li><strong>Interesse:</strong> {{$json["interesse"]}}</li>
</ul>

<h3>Mensagem:</h3>
<p>{{$json["mensagem"]}}</p>

<hr>
<p><small>Data: {{$json["data"]}}</small></p>
```

## 📊 Estrutura de Dados Recebidos

O webhook receberá os seguintes campos em JSON:

```json
{
  "nome": "João Silva",
  "email": "joao@empresa.com",
  "telefone": "(21) 98765-4321",
  "empresa": "Empresa XYZ",
  "interesse": "Central de Atendimento",
  "mensagem": "Gostaria de saber mais sobre os serviços",
  "origem": "Modal Pop-up",
  "data": "22/02/2026 15:30:45",
  "timestamp": "2026-02-22T18:30:45.123Z"
}
```

### Campos:
- **nome**: Nome completo do lead (obrigatório)
- **email**: E-mail do lead (obrigatório)
- **telefone**: Telefone com máscara (XX) XXXXX-XXXX (obrigatório)
- **empresa**: Nome da empresa (opcional)
- **interesse**: Serviço de interesse (obrigatório no modal)
- **mensagem**: Mensagem adicional (opcional)
- **origem**: "Modal Pop-up" ou "Formulário de Contato"
- **data**: Data/hora formatada em pt-BR
- **timestamp**: Data/hora em ISO 8601

## 🔒 Segurança

### Recomendações:

1. **Autenticação**: Configure autenticação básica no webhook se necessário
2. **Rate Limiting**: Limite requisições para evitar spam
3. **Validação**: Valide os dados recebidos no n8n
4. **CORS**: Configure CORS se necessário

### Exemplo de Validação no n8n:

Adicione um nó **"Function"** antes de processar os dados:

```javascript
// Valida se os campos obrigatórios estão presentes
const dados = items[0].json;

if (!dados.nome || !dados.email || !dados.telefone) {
  throw new Error('Campos obrigatórios faltando');
}

// Valida formato de e-mail
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(dados.email)) {
  throw new Error('E-mail inválido');
}

return items;
```

## 🧪 Teste o Webhook

1. Ative o workflow no n8n
2. Abra o site da Onchannel
3. Clique em qualquer botão "Fale Conosco"
4. Preencha o formulário
5. Clique em "Enviar"
6. Verifique no n8n se os dados foram recebidos

## 📱 Integração com WhatsApp

Para receber notificações no WhatsApp quando um lead entrar:

1. No n8n, adicione o nó **"Twilio"** ou **"WhatsApp Business API"**
2. Configure sua conta
3. Crie uma mensagem template:

```
🔔 *Novo Lead - Onchannel*

👤 *Nome:* {{$json["nome"]}}
📧 *E-mail:* {{$json["email"]}}
📱 *Telefone:* {{$json["telefone"]}}
🏢 *Empresa:* {{$json["empresa"]}}
🎯 *Interesse:* {{$json["interesse"]}}

💬 *Mensagem:*
{{$json["mensagem"]}}

⏰ {{$json["data"]}}
```

## 🎨 Workflow Completo Sugerido

```
Webhook → Function (Validação) → Split in Batches →
  ↓
  ├─→ Send Email (Notificação)
  ├─→ Google Sheets (Registro)
  ├─→ CRM (Lead)
  ├─→ WhatsApp (Notificação Equipe)
  └─→ Response (Confirmação)
```

## 🔍 Troubleshooting

### Problema: Formulário não envia
- Verifique se a URL do webhook está correta no `main.js`
- Verifique o console do navegador (F12) para erros
- Certifique-se de que o workflow está ativo no n8n

### Problema: Dados não chegam no n8n
- Verifique se o webhook está em modo "Production"
- Verifique as configurações de CORS
- Teste a URL do webhook diretamente com Postman ou curl

### Problema: Webhook retorna erro 404
- Verifique se o path está correto
- Verifique se o workflow está ativo
- Verifique a URL completa

## 📞 Suporte

Para dúvidas sobre a configuração:
- **E-mail**: comercial@onchannel.io
- **Telefone**: (21) 4042 6944

---

**Última atualização**: 22/02/2026