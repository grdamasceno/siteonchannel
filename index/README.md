# Onchannel - Site Institucional

![Onchannel Logo](images/logo.png)

Site institucional da **Onchannel**, empresa especializada em terceirização de atendimento **CallCenter e ChatCenter** voltado para conversão. Atendemos grandes players do **Food Delivery**, **Saúde** e **Varejo**.

## 🎯 Objetivo do Projeto

Criar uma presença digital moderna e profissional que:
- Apresente os serviços de CallCenter e ChatCenter da Onchannel
- Facilite o contato e a conversão de leads
- Demonstre a expertise da empresa em conversão de vendas
- Destaque o atendimento aos segmentos de Food Delivery, Saúde e Varejo
- Mostre os indicadores que apoiam a tomada de decisão

## ✨ Funcionalidades Implementadas

### ✅ Páginas e Seções
- [x] **Header fixo** com navegação responsiva
- [x] **Hero Section** com call-to-action destacado
- [x] **Seção de Serviços** com 4 ofertas principais:
  - CallCenter Terceirizado
  - ChatCenter e Conversão de Vendas (Destaque)
  - Atendimento para Grandes Players
  - Indicadores e Dashboards
- [x] **Seção de Diferenciais** com 6 pontos-chave:
  - Food Delivery
  - Inteligência Artificial
  - Hyperautomação
  - Saúde
  - Resultados Mensuráveis
  - Varejo
- [x] **Seção Sobre** com Missão, Visão e Valores
- [x] **CTA Section** para incentivar conversão
- [x] **Seção de Contato** com informações e formulário
- [x] **Footer** completo com links e informações

### ✅ Formulários de Contato
- [x] **Formulário Pop-up Modal** (acionado por múltiplos botões)
- [x] **Formulário da página de contato**
- [x] **Integração com n8n webhook** para captura de leads
- [x] **Máscara de telefone** automática
- [x] **Notificações visuais** de sucesso/erro
- [x] **Validação de campos** obrigatórios

### ✅ Recursos Interativos
- [x] **Modal pop-up automático** após 30 segundos (exibe apenas 1 vez)
- [x] **Scroll suave** entre seções
- [x] **Animações ao scroll** para cards e elementos
- [x] **Menu hambúrguer** responsivo para mobile
- [x] **Efeitos de hover** em botões e cards
- [x] **Mascote animado** com efeito flutuante

### ✅ Design e UX
- [x] **Design moderno** com gradientes vermelho e laranja (cores da marca)
- [x] **Totalmente responsivo** para todos os dispositivos
- [x] **Animações suaves** e transições fluidas
- [x] **Cards flutuantes** na hero section
- [x] **Ícones Font Awesome** em todo o site
- [x] **Fonte Google Fonts** (Inter)

## 📁 Estrutura do Projeto

```
onchannel/
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos principais
├── js/
│   └── main.js            # JavaScript e integrações
├── images/
│   ├── logo.png           # Logo da Onchannel
│   └── mascote.png        # Mascote da empresa
└── README.md              # Este arquivo
```

## 🔧 Configuração do Webhook n8n

Para conectar os formulários ao seu sistema n8n:

1. Acesse seu painel n8n
2. Crie um novo workflow com um nó **Webhook**
3. Configure o webhook para receber dados via POST
4. Copie a URL do webhook gerada
5. Edite o arquivo `js/main.js` e substitua a URL na linha 4:

```javascript
const N8N_WEBHOOK_URL = 'https://seu-n8n.app/webhook/onchannel-contato';
```

### Estrutura de Dados Enviados

Os formulários enviam os seguintes dados em formato JSON:

```json
{
  "nome": "Nome do cliente",
  "email": "email@cliente.com",
  "telefone": "(21) 98765-4321",
  "empresa": "Nome da Empresa",
  "interesse": "Central de Atendimento",
  "mensagem": "Mensagem do cliente",
  "origem": "Modal Pop-up ou Formulário de Contato",
  "data": "22/02/2026 15:30:45",
  "timestamp": "2026-02-22T18:30:45.123Z"
}
```

## 📞 Informações de Contato

- **Telefone**: (21) 4042 6944
- **E-mail**: comercial@onchannel.io
- **Empresa**: Onchannel
- **Segmentos Atendidos**: Food Delivery, Saúde e Varejo
- **Especialidade**: CallCenter e ChatCenter para Conversão

## 🎨 Paleta de Cores

As cores foram extraídas do logo da empresa:

- **Vermelho Principal**: `#E31E24`
- **Laranja Secundário**: `#F58220`
- **Gradientes**: Utilizados em botões e elementos de destaque
- **Neutros**: Cinzas e brancos para contraste e legibilidade

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e moderna
- **CSS3**: Estilização com variáveis CSS, Grid, Flexbox e animações
- **JavaScript ES6+**: Funcionalidades interativas e fetch API
- **Font Awesome 6**: Ícones profissionais
- **Google Fonts (Inter)**: Tipografia moderna
- **n8n**: Automação e captura de leads

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: até 767px
- **Mobile pequeno**: até 480px

## ⚡ Performance e Otimizações

- [x] Imagens otimizadas
- [x] CSS minificado e organizado
- [x] JavaScript modular e eficiente
- [x] Lazy loading de animações
- [x] Transições suaves com CSS
- [x] localStorage para controle de pop-up

## 🎯 Conversão e Marketing

### Estratégias Implementadas

1. **Múltiplos CTAs**: Botões estratégicos em várias seções
2. **Pop-up inteligente**: Exibido após 30s (apenas 1 vez por usuário)
3. **Formulários simplificados**: Campos essenciais para reduzir fricção
4. **Social proof**: Estatísticas e diferenciais destacados
5. **Design persuasivo**: Cores, tipografia e espaçamento otimizados
6. **Mobile-first**: Experiência otimizada para dispositivos móveis

## 📊 Próximos Passos Recomendados

### Funcionalidades Futuras
- [ ] Integração com Google Analytics / Google Tag Manager
- [ ] Chat online (WhatsApp Business ou Drift)
- [ ] Seção de cases de sucesso / depoimentos
- [ ] Blog ou área de notícias
- [ ] Página de serviços individual para cada solução
- [ ] Calculadora de ROI interativa
- [ ] Vídeos institucionais
- [ ] Área de perguntas frequentes (FAQ)
- [ ] Sistema de agendamento de reuniões (Calendly)

### Melhorias de SEO
- [ ] Otimização de meta tags
- [ ] Schema markup (JSON-LD)
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Otimização de imagens (WebP)
- [ ] Open Graph tags para redes sociais

### Melhorias de Performance
- [ ] Implementar CDN para assets
- [ ] Minificação de CSS e JS
- [ ] Compressão Gzip/Brotli
- [ ] Cache de recursos estáticos
- [ ] Lazy loading de imagens

## 🔒 Segurança

- Validação de formulários no frontend
- Sanitização de dados antes do envio
- HTTPS recomendado para produção
- Proteção contra spam (considerar reCAPTCHA)

## 📝 Missão e Visão

### Missão
Transformar cada interação em oportunidade de negócio, fornecendo soluções de atendimento CallCenter e ChatCenter que impulsionam o crescimento de nossos clientes, através de inovação, excelência operacional e compromisso com resultados mensuráveis.

### Visão
Ser referência nacional em soluções integradas de CallCenter e ChatCenter para conversão, atendendo os mercados de Food Delivery, Saúde e Varejo, reconhecida pela capacidade de gerar resultados consistentes e pela excelência em atendimento e tecnologia.

### Valores
- Excelência em Atendimento
- Inovação Constante
- Transparência e Ética
- Foco em Resultados
- Compromisso com o Cliente

## 📋 Arquivos de Documentação

O projeto inclui documentação completa para facilitar o uso:

- **📖 README.md** (este arquivo) - Documentação completa do projeto
- **🎯 RESUMO_EXECUTIVO.md** - Visão geral executiva do projeto
- **📝 GUIA_RAPIDO.md** - Instruções rápidas de uso
- **🔧 CONFIGURACAO_N8N.md** - Guia detalhado para configurar webhook n8n
- **🔍 SEO_CHECKLIST.md** - Checklist de otimizações SEO e marketing

## ⚠️ AÇÃO NECESSÁRIA: Configure o Webhook n8n

Para que os formulários funcionem corretamente:

1. Abra o arquivo `js/main.js`
2. Localize a linha 4: `const N8N_WEBHOOK_URL = 'https://seu-n8n.app/webhook/onchannel-contato';`
3. Substitua pela URL do seu webhook n8n
4. Consulte o arquivo `CONFIGURACAO_N8N.md` para instruções detalhadas

## 📄 Licença

© 2026 Onchannel - Grupo RD2S. Todos os direitos reservados.

---

## 🚀 Como Publicar

Para publicar o site e torná-lo acessível online:

1. Acesse a aba **Publish** (Publicar) nesta plataforma
2. Clique no botão de publicação
3. Aguarde o processo de deploy (alguns segundos)
4. Receba a URL do site publicado
5. **IMPORTANTE**: Configure o webhook n8n com a URL publicada
6. Teste todos os formulários
7. Compartilhe com seus clientes!

---

## ✅ Status do Projeto

**🎉 PROJETO CONCLUÍDO E PRONTO PARA PUBLICAÇÃO! 🎉**

**Funcionalidades implementadas:**
- ✅ Site institucional completo e responsivo
- ✅ Sistema de captura de leads com 2 formulários
- ✅ Integração com n8n (requer configuração)
- ✅ Design moderno com cores da marca
- ✅ Seções: Hero, Serviços, Diferenciais, Sobre, Contato
- ✅ Modal pop-up inteligente
- ✅ Missão, Visão e Valores
- ✅ Menu responsivo mobile
- ✅ Animações e efeitos visuais
- ✅ Documentação completa

**Próximos passos recomendados:**
1. Publicar o site na aba "Publish"
2. Configurar webhook n8n
3. Testar formulários
4. Adicionar Google Analytics (ver SEO_CHECKLIST.md)
5. Criar perfis em redes sociais
6. Configurar Google Meu Negócio

---

**Desenvolvido com ❤️ para a Onchannel - CallCenter e ChatCenter especializado em conversão**

**Data de conclusão**: 22 de Fevereiro de 2026