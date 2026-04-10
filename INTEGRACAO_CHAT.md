# 💬 Integração do Chat ao Vivo - Chatwoot

## ✅ Chat ao Vivo Implementado

Foi adicionado o widget de **chat ao vivo** usando a plataforma **Chatwoot** no site da Onchannel. O botão de chat ficará visível em todas as páginas do site.

---

## 🎯 Funcionalidades

### **O que o Chat Oferece:**

1. **Atendimento em Tempo Real**
   - Conversa instantânea com a equipe
   - Respostas rápidas aos visitantes

2. **Visível em Todo o Site**
   - Botão flutuante fixo
   - Acessível de qualquer seção

3. **Interface Amigável**
   - Design moderno e intuitivo
   - Fácil de usar

4. **Não Intrusivo**
   - Fica minimizado no canto da tela
   - Usuário abre quando quiser

---

## 📍 Localização

### **Posição do Widget:**
- **Canto inferior direito** da tela (padrão Chatwoot)
- **Fixo**: Acompanha o scroll da página
- **Z-index alto**: Sempre visível sobre outros elementos

---

## 🔧 Configuração Técnica

### **Script Adicionado:**

```html
<!-- Chatwoot Chat ao Vivo -->
<script>
  (function(d,t) {
    var BASE_URL="https://onchat.tangerinefood.com.br";
    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=BASE_URL+"/packs/js/sdk.js";
    g.async = true;
    s.parentNode.insertBefore(g,s);
    g.onload=function(){
      window.chatwootSDK.run({
        websiteToken: 'EZXrN6WXi7DQ1MhnFNWiQtZG',
        baseUrl: BASE_URL
      })
    }
  })(document,"script");
</script>
```

### **Localização no Código:**
- **Arquivo**: `index.html`
- **Posição**: Antes do fechamento `</body>`
- **Ordem**: Após o script `main.js`

---

## 🎨 Aparência do Widget

### **Estado Minimizado:**
- Botão circular no canto inferior direito
- Ícone de mensagem/chat
- Cores personalizáveis no painel Chatwoot

### **Estado Aberto:**
- Janela de chat expandida
- Área de digitação de mensagens
- Histórico de conversas
- Informações do atendente (se configurado)

---

## ⚙️ Configurações do Chatwoot

### **Dados da Integração:**

| Propriedade | Valor |
|-------------|-------|
| **Base URL** | `https://onchat.tangerinefood.com.br` |
| **Website Token** | `EZXrN6WXi7DQ1MhnFNWiQtZG` |
| **Carregamento** | Assíncrono (não bloqueia a página) |

---

## 📱 Responsividade

### **Desktop:**
- Widget no canto inferior direito
- Janela de chat com tamanho adequado
- Não interfere com o conteúdo

### **Tablet:**
- Widget adaptado para telas médias
- Posicionamento mantido

### **Mobile:**
- Widget responsivo
- Pode ocupar mais espaço da tela quando aberto
- Botão flutuante acessível

---

## 🚀 Como Funciona

### **Para o Visitante:**

1. **Acessa o site** → Widget aparece automaticamente
2. **Clica no botão de chat** → Janela se expande
3. **Digita a mensagem** → Envia para a equipe
4. **Recebe resposta** em tempo real

### **Para a Equipe Onchannel:**

1. **Acessa o painel Chatwoot** (https://onchat.tangerinefood.com.br)
2. **Recebe notificações** de novas conversas
3. **Responde em tempo real**
4. **Gerencia conversas** de forma organizada

---

## ✨ Benefícios da Integração

### 1. **Atendimento Instantâneo**
- Visitantes não precisam preencher formulário
- Resposta imediata para dúvidas rápidas

### 2. **Aumento de Conversão**
- Remove barreiras de contato
- Facilita a comunicação

### 3. **Disponibilidade 24/7**
- Chat sempre visível
- Pode integrar com chatbot (se configurado)

### 4. **Múltiplos Canais**
- Unifica atendimento
- Histórico de conversas

### 5. **Profissionalismo**
- Interface moderna
- Experiência de usuário superior

---

## 🔒 Segurança e Privacidade

- ✅ Conexão segura (HTTPS)
- ✅ Token único para o site
- ✅ Dados protegidos no servidor Chatwoot
- ✅ Configurável pelo painel administrativo

---

## 📊 Recursos Adicionais no Painel Chatwoot

### **O que pode ser configurado:**

1. **Personalização Visual**
   - Cores do widget
   - Mensagem de boas-vindas
   - Avatar da empresa

2. **Horário de Atendimento**
   - Mensagens automáticas fora do horário
   - Status online/offline

3. **Equipe**
   - Múltiplos atendentes
   - Distribuição de conversas
   - Permissões

4. **Automação**
   - Respostas automáticas
   - Chatbots
   - Gatilhos

5. **Relatórios**
   - Número de conversas
   - Tempo de resposta
   - Satisfação do cliente

---

## 🎯 Integração com Outros Sistemas

O Chatwoot pode ser integrado com:

- 📧 **E-mail** - Respostas por email
- 📱 **WhatsApp** - Unificar atendimento
- 💬 **Telegram** - Múltiplos canais
- 🔔 **Slack** - Notificações para equipe
- 📊 **CRM** - Integração com sistemas de vendas

---

## ✅ Checklist de Implementação

- [x] Script adicionado ao `index.html`
- [x] Carregamento assíncrono configurado
- [x] Token de autenticação correto
- [x] Base URL configurada
- [x] Widget visível em todas as páginas
- [x] Não interfere com outros elementos
- [x] Responsivo em todos os dispositivos

---

## 🧪 Como Testar

### **No Site:**
1. Acesse qualquer página do site
2. Procure o botão de chat no canto inferior direito
3. Clique no botão
4. Digite uma mensagem de teste
5. Verifique se a mensagem foi enviada

### **No Painel Administrativo:**
1. Acesse: https://onchat.tangerinefood.com.br
2. Faça login com credenciais de admin
3. Verifique se as conversas estão chegando
4. Teste responder pelo painel

---

## 📞 Complementa os Outros Canais

O chat ao vivo agora complementa os outros canais de contato:

| Canal | Tipo | Uso |
|-------|------|-----|
| **Chat ao Vivo** | Instantâneo | Dúvidas rápidas |
| **Formulário Modal** | Assíncrono | Solicitações detalhadas |
| **Telefone** | Direto | Conversas complexas |
| **E-mail** | Formal | Propostas e documentos |

---

## 🎨 Personalização Futura

### **Sugestões de Configuração no Painel:**

1. **Mensagem de Boas-vindas:**
   ```
   Olá! 👋 Bem-vindo à Onchannel!
   Como podemos ajudar você hoje?
   ```

2. **Cores:**
   - Primária: #E31E24 (vermelho da marca)
   - Secundária: #F58220 (laranja da marca)

3. **Avatar:**
   - Usar o mascote da Onchannel
   - Foto da equipe

4. **Horário de Atendimento:**
   - Segunda a Sexta: 9h às 18h
   - Mensagem fora do horário customizada

---

## 📝 Notas Importantes

- ⚠️ **Conexão com Internet**: Widget requer conexão ativa
- ⚠️ **Servidor Chatwoot**: Deve estar online e funcionando
- ⚠️ **Token**: Não compartilhar publicamente (já está no código do site)
- ✅ **Performance**: Carregamento assíncrono não afeta velocidade do site

---

## ✅ Status

**🎉 CHAT AO VIVO INTEGRADO COM SUCESSO!**

O widget de chat agora está ativo e visível em todas as páginas do site, pronto para atender os visitantes em tempo real.

---

**Data de Implementação**: 22 de Fevereiro de 2026

**Plataforma**: Chatwoot

**URL do Painel**: https://onchat.tangerinefood.com.br

**Arquivo Modificado**: `index.html`

**Localização**: Antes do `</body>`