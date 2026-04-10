# 🎯 Guia Rápido - Como Usar o Site

## 📱 Funcionalidades do Site

### 1. Formulários de Contato

O site possui **2 tipos de formulários**:

#### 🔴 Modal Pop-up (Prioridade Alta)
- **Onde aparece**: 
  - Clicando nos botões "Fale Conosco"
  - Clicando no botão "Solicitar Proposta" no topo
  - Automaticamente após 30 segundos (apenas na primeira visita)
  
- **Campos**:
  - Nome (obrigatório)
  - E-mail (obrigatório)
  - Telefone (obrigatório, com máscara automática)
  - Empresa (opcional)
  - Interesse (dropdown, obrigatório)
  - Mensagem (opcional)

#### 🟢 Formulário da Página
- **Onde está**: Seção "Contato" no final da página
- **Campos**:
  - Nome (obrigatório)
  - E-mail (obrigatório)
  - Telefone (obrigatório, com máscara automática)
  - Empresa (opcional)
  - Mensagem (obrigatório)

### 2. Navegação

- **Menu Superior**: Clique nos links para navegar suavemente entre seções
- **Mobile**: Use o menu hambúrguer (☰) para acessar a navegação
- **Scroll Suave**: Todos os links internos têm rolagem suave

### 3. Botões de Contato Direto

- **Telefone**: Clique em "(21) 4042 6944" para ligar diretamente
- **E-mail**: Clique em "comercial@onchannel.io" para abrir seu cliente de e-mail

## ⚙️ Configuração Necessária

### ⚠️ IMPORTANTE: Configure o Webhook n8n

Para que os formulários funcionem corretamente, você precisa configurar o webhook n8n:

1. **Abra o arquivo**: `js/main.js`
2. **Localize a linha 4**:
```javascript
const N8N_WEBHOOK_URL = 'https://seu-n8n.app/webhook/onchannel-contato';
```
3. **Substitua** pela URL do seu webhook n8n
4. **Salve** o arquivo

📖 **Guia completo**: Consulte o arquivo `CONFIGURACAO_N8N.md` para instruções detalhadas

## 🎨 Personalização

### Alterar Cores

As cores da marca estão definidas no arquivo `css/style.css` nas variáveis CSS:

```css
:root {
    --primary-color: #E31E24;      /* Vermelho principal */
    --secondary-color: #F58220;     /* Laranja secundário */
    /* ... outras cores ... */
}
```

### Alterar Textos

Todos os textos estão no arquivo `index.html`. Principais seções:

- **Hero Section**: Linha 48-90
- **Serviços**: Linha 92-180
- **Diferenciais**: Linha 182-250
- **Missão e Visão**: Linha 252-320
- **Contato**: Linha 360-420

### Alterar Imagens

As imagens estão na pasta `images/`:
- `logo.png` - Logo da Onchannel
- `mascote.png` - Mascote da empresa

Para substituir, basta colocar novos arquivos com os mesmos nomes.

## 📊 Rastreamento

O site já está preparado para rastreamento de eventos:

### Eventos Rastreados (Console):
- Cliques em telefone
- Cliques em e-mail
- Envio de formulários
- Origem dos contatos (modal ou página)

### Adicionar Google Analytics

Para adicionar o Google Analytics, insira o código no arquivo `index.html` antes do `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 Publicação

### Como Publicar o Site:

1. **Vá para a aba "Publish"** (Publicar)
2. **Clique no botão de publicação**
3. **Aguarde o processo** (leva alguns segundos)
4. **Copie a URL gerada**
5. **Compartilhe!** 🎉

### Após Publicar:

- ✅ O site estará acessível publicamente
- ✅ Você receberá uma URL tipo: `https://seu-site.exemplo.com`
- ✅ Configure o webhook n8n para começar a receber leads

## 📱 Teste em Dispositivos

O site é totalmente responsivo. Teste em:

- **Desktop**: Navegador normal
- **Tablet**: Redimensione a janela ou use DevTools (F12)
- **Mobile**: Use o modo responsivo do navegador ou acesse pelo celular

## 🔍 Verificar se Está Tudo Funcionando

### Checklist:

- [ ] O site carrega normalmente
- [ ] As imagens aparecem (logo e mascote)
- [ ] O menu mobile funciona (clique no ☰)
- [ ] Os botões abrem o modal pop-up
- [ ] O formulário da página está visível
- [ ] Os links de telefone e e-mail funcionam
- [ ] A rolagem suave funciona entre seções
- [ ] O pop-up automático aparece após 30 segundos

### Console do Navegador:

Abra o console (F12) e verifique se aparecem as mensagens:

```
🚀 Onchannel - Site carregado com sucesso!
📞 Telefone: (21) 4042 6944
📧 Email: comercial@onchannel.io
⚙️  Para configurar o webhook n8n...
```

## 🆘 Problemas Comuns

### O pop-up não abre
- **Solução**: Verifique se o JavaScript está carregando (veja o console)
- Limpe o cache do navegador (Ctrl + Shift + R)

### As imagens não aparecem
- **Solução**: Verifique se os arquivos estão na pasta `images/`
- Verifique os nomes dos arquivos (case-sensitive)

### O formulário não envia
- **Solução**: Configure o webhook n8n primeiro
- Verifique a URL no arquivo `js/main.js`
- Veja o console para erros (F12)

### O menu mobile não funciona
- **Solução**: Limpe o cache e recarregue a página
- Verifique se o JavaScript está carregando

## 📞 Contatos Importantes

### Onchannel:
- **Telefone**: (21) 4042 6944
- **E-mail**: comercial@onchannel.io

### Informações do Site:
- **Empresa**: Onchannel - Grupo RD2S
- **Segmento**: Food Service, Franquias e Varejo
- **Serviços**: Central de Atendimento, Conversão de Vendas, Aplicações e Dashboards

## 📚 Documentação Completa

Para mais detalhes, consulte os arquivos:

- **README.md** - Documentação completa do projeto
- **CONFIGURACAO_N8N.md** - Guia de configuração do webhook
- **css/style.css** - Estilos e personalização
- **js/main.js** - Funcionalidades e integrações

---

**Pronto para Começar! 🚀**

Qualquer dúvida, entre em contato!