# 🔍 Checklist de Otimização SEO e Marketing

## ✅ Já Implementado

### HTML e Estrutura
- [x] Meta charset UTF-8
- [x] Meta viewport para responsividade
- [x] Meta description otimizada
- [x] Title tag com palavras-chave
- [x] Estrutura semântica HTML5 (header, nav, section, footer)
- [x] Hierarquia correta de headings (H1, H2, H3)

### Performance
- [x] CSS externo minificado
- [x] JavaScript externo
- [x] Lazy loading de animações
- [x] Transições CSS otimizadas

### UX e Conversão
- [x] Design responsivo
- [x] Formulários funcionais
- [x] CTAs estratégicos
- [x] Pop-up inteligente
- [x] Links de contato direto

## 🚀 Próximas Otimizações Recomendadas

### 1. Meta Tags Adicionais

Adicione no `<head>` do `index.html`:

```html
<!-- SEO Avançado -->
<meta name="keywords" content="central de atendimento, food service, conversão de vendas, hyperautomação, franquias, varejo, dashboards inteligentes">
<meta name="author" content="Onchannel - Grupo RD2S">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://seu-dominio.com/">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://seu-dominio.com/">
<meta property="og:title" content="Onchannel | Central de Atendimento e Soluções para Food e Varejo">
<meta property="og:description" content="Transformamos Leads em Resultados. Central de Atendimento Terceirizado, Conversão de Vendas e Hyperautomação para Food, Franquias e Varejo.">
<meta property="og:image" content="https://seu-dominio.com/images/logo.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://seu-dominio.com/">
<meta property="twitter:title" content="Onchannel | Central de Atendimento e Soluções para Food e Varejo">
<meta property="twitter:description" content="Transformamos Leads em Resultados. Central de Atendimento Terceirizado, Conversão de Vendas e Hyperautomação.">
<meta property="twitter:image" content="https://seu-dominio.com/images/logo.png">

<!-- Favicon -->
<link rel="icon" type="image/png" href="images/logo.png">
<link rel="apple-touch-icon" href="images/logo.png">
```

### 2. Schema Markup (JSON-LD)

Adicione antes do `</body>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Onchannel",
  "alternateName": "Onchannel - Grupo RD2S",
  "url": "https://seu-dominio.com",
  "logo": "https://seu-dominio.com/images/logo.png",
  "description": "Central de Atendimento Terceirizado, Conversão de Vendas e Hyperautomação para Food, Franquias e Varejo",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-21-4042-6944",
    "contactType": "sales",
    "email": "comercial@onchannel.io",
    "areaServed": "BR",
    "availableLanguage": ["Portuguese"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/onchannel",
    "https://www.instagram.com/onchannel",
    "https://www.facebook.com/onchannel"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BR"
  }
}
</script>
```

### 3. Google Analytics

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

### 4. Google Tag Manager

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->

<!-- Google Tag Manager (noscript) - logo após <body> -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

### 5. Facebook Pixel

```html
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
/></noscript>
```

### 6. Criar arquivo robots.txt

Crie um arquivo `robots.txt` na raiz:

```
User-agent: *
Allow: /

Sitemap: https://seu-dominio.com/sitemap.xml
```

### 7. Criar arquivo sitemap.xml

Crie um arquivo `sitemap.xml` na raiz:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://seu-dominio.com/</loc>
    <lastmod>2026-02-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://seu-dominio.com/#servicos</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seu-dominio.com/#sobre</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seu-dominio.com/#contato</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

## 🎯 Palavras-Chave Recomendadas

### Principais:
- Central de atendimento terceirizado
- Conversão de vendas
- Hyperautomação
- Food service
- Central de atendimento food
- Dashboard inteligente

### Secundárias:
- Atendimento para restaurantes
- Central de vendas para franquias
- Automação para varejo
- Call center especializado em food
- Indicadores de vendas
- ROI em atendimento

### Long-tail:
- Como aumentar vendas em restaurantes
- Melhor central de atendimento para delivery
- Dashboard de vendas para franquias
- Automação de atendimento para food service

## 📊 Google Search Console

Após publicar o site:

1. Acesse [Google Search Console](https://search.google.com/search-console)
2. Adicione a propriedade (URL do site)
3. Verifique a propriedade
4. Envie o sitemap.xml
5. Solicite indexação da página principal

## 🔗 Link Building

### Estratégias:
1. **Google Meu Negócio**: Crie/otimize perfil
2. **Diretórios**: Cadastre em diretórios de empresas
3. **Parcerias**: Troque links com parceiros
4. **Redes Sociais**: Compartilhe o link do site
5. **Blog**: Crie conteúdo e linkbuilding interno

## 📱 Google Meu Negócio

Configure sua conta com:
- Nome: Onchannel
- Categoria: Central de Atendimento / Serviços de TI
- Endereço (se houver escritório físico)
- Telefone: (21) 4042 6944
- Website: URL do site
- Horário de funcionamento
- Fotos: Logo e mascote
- Descrição otimizada com palavras-chave

## 🎨 Redes Sociais

### Perfis Recomendados:
- [ ] LinkedIn (empresa)
- [ ] Instagram
- [ ] Facebook
- [ ] YouTube (para vídeos institucionais)

### Bio Sugerida:
```
🎯 Transformamos Leads em Resultados
📞 Central de Atendimento para Food Service
💰 Conversão de Vendas + Hyperautomação
📊 Dashboards Inteligentes
🏢 Grupo RD2S
```

## 📧 Email Marketing

### Integração com:
- Mailchimp
- RD Station
- ActiveCampaign
- SendGrid

### Fluxo Sugerido:
1. Captura de lead (formulário)
2. Email de boas-vindas
3. Envio de material rico (e-book, case)
4. Nutrição (série de emails)
5. Oferta/proposta comercial

## 🔔 WhatsApp Business

### Configure:
- Número: (21) 4042 6944
- Mensagem automática
- Catálogo de serviços
- Status atualizados
- Link para o site

### Adicione Widget no Site:

```html
<!-- WhatsApp Widget -->
<a href="https://wa.me/5521404269444" 
   class="whatsapp-float" 
   target="_blank"
   style="position:fixed;bottom:20px;right:20px;background:#25D366;color:#fff;
          border-radius:50px;text-align:center;font-size:30px;box-shadow:2px 2px 3px #999;
          z-index:9999;width:60px;height:60px;display:flex;align-items:center;
          justify-content:center;">
  <i class="fab fa-whatsapp"></i>
</a>
```

## 📈 Métricas para Acompanhar

### KPIs Importantes:
- Visitantes únicos
- Taxa de conversão (formulários)
- Origem do tráfego
- Páginas mais visitadas
- Tempo médio no site
- Taxa de rejeição
- Dispositivos mais usados
- Cliques em telefone/email

### Metas Sugeridas:
- Conversão de 3-5% dos visitantes
- Tempo médio no site: 2+ minutos
- Taxa de rejeição: < 60%

## 🎁 Conteúdo para Blog (Futuro)

### Temas Sugeridos:
1. "Como aumentar as vendas do seu restaurante com uma central de atendimento"
2. "5 indicadores essenciais para food service"
3. "Hyperautomação: O futuro das franquias"
4. "Dashboard inteligente: Como tomar decisões baseadas em dados"
5. "Cases de sucesso: Restaurantes que triplicaram vendas"

## ✅ Checklist Final

Antes de publicar:
- [ ] Todas as URLs do n8n configuradas
- [ ] Meta tags instaladas
- [ ] Google Analytics configurado
- [ ] Google Tag Manager configurado
- [ ] Schema markup adicionado
- [ ] Sitemap.xml criado
- [ ] Robots.txt criado
- [ ] Favicon configurado
- [ ] Teste em todos os dispositivos
- [ ] Teste de velocidade (PageSpeed Insights)
- [ ] Links de telefone/email funcionando
- [ ] Formulários testados e funcionais

---

**Última atualização**: 22/02/2026