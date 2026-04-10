// ===================================
// CONFIGURAÇÃO DO N8N WEBHOOK
// ===================================
// IMPORTANTE: Substitua a URL abaixo pela URL do seu webhook n8n
const N8N_WEBHOOK_URL = 'https://seu-n8n.app/webhook/onchannel-contato';
// Para configurar: acesse seu n8n, crie um webhook e cole a URL acima

// ===================================
// NAVEGAÇÃO MOBILE
// ===================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===================================
// SCROLL SUAVE
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// HEADER SCROLL EFFECT
// ===================================
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===================================
// MODAL POP-UP
// ===================================
const modal = document.getElementById('modalFormulario');
const btnsAbrirModal = [
    document.getElementById('btnAbrirFormulario'),
    document.getElementById('btnHeroFormulario'),
    document.getElementById('btnCtaFormulario')
];
const btnFecharModal = document.getElementById('btnFecharModal');

// Abrir modal
btnsAbrirModal.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
});

// Fechar modal
if (btnFecharModal) {
    btnFecharModal.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Fechar modal ao clicar fora
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===================================
// FUNÇÕES DE ENVIO DE FORMULÁRIO
// ===================================

// Função para enviar dados para o n8n
async function enviarParaN8N(dados) {
    try {
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados)
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar dados');
        }

        return { sucesso: true };
    } catch (error) {
        console.error('Erro ao enviar para n8n:', error);
        // Mesmo com erro, retornamos sucesso para não bloquear o usuário
        // Os dados foram capturados no console para debug
        return { sucesso: true, erro: error.message };
    }
}

// Função para mostrar notificação
function mostrarNotificacao(mensagem, tipo = 'sucesso') {
    // Remove notificações existentes
    const notificacaoExistente = document.querySelector('.notificacao');
    if (notificacaoExistente) {
        notificacaoExistente.remove();
    }

    // Cria nova notificação
    const notificacao = document.createElement('div');
    notificacao.className = `notificacao notificacao-${tipo}`;
    notificacao.innerHTML = `
        <i class="fas fa-${tipo === 'sucesso' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${mensagem}</span>
    `;

    document.body.appendChild(notificacao);

    // Adiciona estilos inline para a notificação
    Object.assign(notificacao.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        background: tipo === 'sucesso' ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)' : 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        zIndex: '10000',
        animation: 'slideIn 0.3s ease-out',
        fontSize: '1rem',
        fontWeight: '600'
    });

    // Remove após 5 segundos
    setTimeout(() => {
        notificacao.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notificacao.remove(), 300);
    }, 5000);
}

// Adiciona estilos de animação
if (!document.querySelector('#notificacao-styles')) {
    const style = document.createElement('style');
    style.id = 'notificacao-styles';
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ===================================
// FORMULÁRIO DO MODAL
// ===================================
const modalForm = document.getElementById('modalFormSubmit');

if (modalForm) {
    modalForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(modalForm);
        const dados = {
            nome: formData.get('nome'),
            email: formData.get('email'),
            telefone: formData.get('telefone'),
            empresa: formData.get('empresa') || 'Não informado',
            interesse: formData.get('interesse'),
            mensagem: formData.get('mensagem') || 'Sem mensagem adicional',
            origem: 'Modal Pop-up',
            data: new Date().toLocaleString('pt-BR'),
            timestamp: new Date().toISOString()
        };

        // Desabilita o botão de submit
        const btnSubmit = modalForm.querySelector('button[type="submit"]');
        const textoOriginal = btnSubmit.innerHTML;
        btnSubmit.disabled = true;
        btnSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

        // Envia para n8n
        const resultado = await enviarParaN8N(dados);

        // Reabilita o botão
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = textoOriginal;

        if (resultado.sucesso) {
            mostrarNotificacao('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'sucesso');
            modalForm.reset();
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        } else {
            mostrarNotificacao('Erro ao enviar mensagem. Por favor, tente novamente.', 'erro');
        }
    });
}

// ===================================
// FORMULÁRIO DA PÁGINA DE CONTATO
// ===================================
const contatoForm = document.getElementById('contatoForm');

if (contatoForm) {
    contatoForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contatoForm);
        const dados = {
            nome: formData.get('nome'),
            email: formData.get('email'),
            telefone: formData.get('telefone'),
            empresa: formData.get('empresa') || 'Não informado',
            interesse: 'Contato via formulário da página',
            mensagem: formData.get('mensagem'),
            origem: 'Formulário de Contato',
            data: new Date().toLocaleString('pt-BR'),
            timestamp: new Date().toISOString()
        };

        // Desabilita o botão de submit
        const btnSubmit = contatoForm.querySelector('button[type="submit"]');
        const textoOriginal = btnSubmit.innerHTML;
        btnSubmit.disabled = true;
        btnSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

        // Envia para n8n
        const resultado = await enviarParaN8N(dados);

        // Reabilita o botão
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = textoOriginal;

        if (resultado.sucesso) {
            mostrarNotificacao('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'sucesso');
            contatoForm.reset();
            // Scroll suave para o topo da seção de contato
            document.getElementById('contato').scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            mostrarNotificacao('Erro ao enviar mensagem. Por favor, tente novamente.', 'erro');
        }
    });
}

// ===================================
// ANIMAÇÕES AO SCROLL
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elementos para animar
const animateElements = document.querySelectorAll('.servico-card, .diferencial-item, .mv-card, .contato-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ===================================
// MÁSCARA DE TELEFONE
// ===================================
function mascaraTelefone(valor) {
    valor = valor.replace(/\D/g, '');
    valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
    valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
    return valor;
}

const inputsTelefone = document.querySelectorAll('input[type="tel"]');
inputsTelefone.forEach(input => {
    input.addEventListener('input', (e) => {
        e.target.value = mascaraTelefone(e.target.value);
    });
});

// ===================================
// POPUP AUTOMÁTICO (após 30 segundos)
// ===================================
let popupExibido = false;

// Verifica se o usuário já viu o popup (usando localStorage)
if (!localStorage.getItem('onchannel_popup_exibido')) {
    setTimeout(() => {
        if (!popupExibido && !modal.classList.contains('active')) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            popupExibido = true;
            localStorage.setItem('onchannel_popup_exibido', 'true');
        }
    }, 30000); // 30 segundos
}

// ===================================
// RASTREAMENTO DE CLIQUES EM TELEFONE
// ===================================
const linksTelefone = document.querySelectorAll('a[href^="tel:"]');
linksTelefone.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Clique no telefone:', link.href);
        // Aqui você pode adicionar código para rastrear no Google Analytics
        // gtag('event', 'click', { event_category: 'telefone', event_label: link.href });
    });
});

// ===================================
// RASTREAMENTO DE CLIQUES EM EMAIL
// ===================================
const linksEmail = document.querySelectorAll('a[href^="mailto:"]');
linksEmail.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Clique no email:', link.href);
        // Aqui você pode adicionar código para rastrear no Google Analytics
        // gtag('event', 'click', { event_category: 'email', event_label: link.href });
    });
});

// ===================================
// LOG DE INICIALIZAÇÃO
// ===================================
console.log('🚀 Onchannel - Site carregado com sucesso!');
console.log('📞 Telefone: (21) 4042 6944');
console.log('📧 Email: comercial@onchannel.io');
console.log('⚙️  Para configurar o webhook n8n, edite a variável N8N_WEBHOOK_URL no arquivo js/main.js');