// Inicialização do AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Animação do produto com GSAP
gsap.from(".product-image", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    rotation: 5,
    ease: "power3.out"
});

// Scroll suave para os CTAs
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector('#comprar');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Aguardando o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Inicialização do AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Aplicar efeito de pulsar a todos os botões CTA, exceto os dos planos
    document.querySelectorAll('.cta-button').forEach(button => {
        // Verificar se o botão NÃO está dentro de um card de preço
        if (!button.closest('.price-card')) {
            // Adicionar efeito de pulsar
            button.classList.add('pulse');
            
            // Adicionar evento de clique para rolar até a seção de planos
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const pricingSection = document.querySelector('#pricing');
                if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        } else {
            // Para botões dentro dos cards de preço, adicionar ação de compra

        }
    });

    // Inicialização do Swiper para o carrossel de benefícios
    const benefitsSwiper = new Swiper('.benefits-carousel', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.benefits-carousel .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.benefits-carousel .swiper-button-next',
            prevEl: '.benefits-carousel .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        watchOverflow: true,
        observer: true,
        observeParents: true
    });

    // Inicialização do carrossel de depoimentos
    const testimonialsSwiper = new Swiper('.testimonials-carousel', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.testimonials-carousel .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonials-carousel .swiper-button-next',
            prevEl: '.testimonials-carousel .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        watchOverflow: true,
        observer: true,
        observeParents: true
    });

    // Função unificada para inicializar accordions
    function initAccordion(itemSelector, questionSelector, answerSelector) {
        const items = document.querySelectorAll(itemSelector);
        
        // Inicializa todas as respostas com altura zero
        items.forEach(item => {
            const answer = item.querySelector(answerSelector);
            if (answer) {
                answer.style.maxHeight = '0px';
                answer.style.overflow = 'hidden';
            }
        });
        
        // Adiciona evento de clique a cada pergunta
        document.querySelectorAll(questionSelector).forEach(question => {
            question.addEventListener('click', function() {
                const parent = this.parentElement;
                const answer = parent.querySelector(answerSelector);
                
                // Verifica se este item já está ativo
                const isActive = parent.classList.contains('active');
                
                // Fecha todos os outros itens
                items.forEach(item => {
                    if (item !== parent && item.classList.contains('active')) {
                        item.classList.remove('active');
                        const itemAnswer = item.querySelector(answerSelector);
                        if (itemAnswer) {
                            itemAnswer.style.maxHeight = '0px';
                        }
                    }
                });
                
                // Toggle do item atual
                if (isActive) {
                    parent.classList.remove('active');
                    answer.style.maxHeight = '0px';
                } else {
                    parent.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        });
    }

    // Inicializa o accordion do FAQ original
    initAccordion('.faq-item', '.faq-question', '.faq-answer');
    
    // Inicia o sistema de popups
    initPurchasePopups();
});

// Lista de nomes para o popup de compra
const purchaseNames = [
    'Luiza Ferreira',
    'Maria Silva',
    'Ana Santos',
    'Juliana Oliveira',
    'Carolina Lima',
    'Beatriz Costa',
    'Fernanda Souza',
    'Patricia Mendes',
    'Camila Rocha',
    'Mariana Alves',
    'Amanda Rodrigues',
    'Bianca Pereira',
    'Carla Gomes',
    'Daniela Martins',
    'Eduarda Ribeiro',
    'Flávia Cardoso',
    'Gabriela Almeida',
    'Helena Barbosa',
    'Isabela Nascimento',
    'Jéssica Moreira',
    'Karina Teixeira',
    'Larissa Carvalho',
    'Mônica Vieira',
    'Natália Dias',
    'Olivia Fernandes',
    'Paula Nunes',
    'Renata Machado',
    'Sabrina Monteiro',
    'Tatiana Correia',
    'Vanessa Azevedo',
    'Aline Pinto',
    'Bruna Castro',
    'Cintia Soares',
    'Débora Campos',
    'Elisa Pires',
    'Fabiana Lopes',
    'Giovana Ramos',
    'Heloísa Freitas',
    'Ingrid Gonçalves',
    'Joana Araújo',
    'Kelly Miranda',
    'Letícia Andrade',
    'Michele Duarte',
    'Nicole Cavalcanti',
    'Priscila Barros',
    'Raquel Borges',
    'Sandra Rezende',
    'Thaís Melo',
    'Viviane Fonseca',
    'Yasmin Nogueira',
    'Zélia Marques',
    'Alice Sampaio',
    'Bárbara Vasconcelos',
    'Clara Guimarães',
    'Diana Moura',
    'Elaine Siqueira',
    'Fátima Brito',
    'Gisele Santana',
    'Hortência Medeiros',
    'Iara Cordeiro',
    'Júlia Dantas'
];

// Lista de estados para o popup de compra
const purchaseStates = [
    'SP',
    'RJ',
    'MG',
    'PR',
    'SC',
    'RS',
    'BA',
    'PE',
    'CE',
    'GO',
    'DF',
    'ES',
    'MT',
    'MS',
    'PA',
    'AM',
    'MA',
    'PB',
    'RN',
    'AL',
    'PI',
    'SE',
    'RO',
    'TO',
    'AC',
    'AP',
    'RR'
];

// Lista de tempos para o popup de compra
const purchaseTimes = [
    'há 30 segundos',
    'há 1 minuto',
    'há 5 minutos',
    'há 10 minutos',
    'há 30 minutos',
    'há 1 hora',
    'há 2 horas',
    'há 3 horas',
    'agora mesmo',
    'há instantes'
];

// Função para gerar tempo aleatório entre min e max
function randomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Função para mostrar o popup de compra
function showPurchasePopup() {
    const popup = document.querySelector('.purchase-popup');
    const avatar = popup.querySelector('.purchase-popup__avatar');
    const name = popup.querySelector('.purchase-popup__name');
    const text = popup.querySelector('.purchase-popup__text');
    
    // Usar a lista de nomes completos existente
    const randomNameIndex = Math.floor(Math.random() * purchaseNames.length);
    const randomName = purchaseNames[randomNameIndex];
    
    // Usar a lista de estados existente
    const randomStateIndex = Math.floor(Math.random() * purchaseStates.length);
    const randomState = purchaseStates[randomStateIndex];
    
    // Gerar inicial para o avatar (primeira letra do primeiro nome)
    const initial = randomName.split(' ')[0].charAt(0);
    
    // Usar a lista de tempos existente
    const randomTimeIndex = Math.floor(Math.random() * purchaseTimes.length);
    const timeText = `<i>${purchaseTimes[randomTimeIndex]}</i>`;
    
    // Configurar o popup
    avatar.textContent = initial;
    name.textContent = `${randomName} - ${randomState}`;
    text.innerHTML = `comprou <strong>#Cabelos de Diva</strong><br>${timeText}`;
    
    // Mostrar o popup
    popup.classList.add('show');
    
    // Esconder o popup após 3 segundos
    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}

// Função para iniciar o sistema de popups
function initPurchasePopups() {
    // Mostrar o primeiro popup após um pequeno delay inicial
    setTimeout(() => {
        showPurchasePopup();
        
        // Configurar um intervalo para mostrar popups periodicamente
        setInterval(() => {
            showPurchasePopup();
        }, randomTime(2000, 20000)); // Intervalo entre 2 e 12 segundos
        
    }, randomTime(2000, 5000)); // Delay inicial entre 2 e 5 segundos
} 