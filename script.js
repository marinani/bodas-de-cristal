// --- 1. EFEITO DE CRISTAIS CAINDO ---
const canvas = document.getElementById('crystal-canvas');

function createCrystal() {
    const crystal = document.createElement('div');
    crystal.classList.add('crystal');

    crystal.style.left = Math.random() * 100 + 'vw';
    const width = Math.random() * 10 + 8;
    crystal.style.width = width + 'px';
    crystal.style.height = (width * 1.5) + 'px'; 
    crystal.style.animationDuration = Math.random() * 5 + 4 + 's';
    crystal.style.opacity = Math.random() * 0.5 + 0.1;

    canvas.appendChild(crystal);

    setTimeout(() => {
        crystal.remove();
    }, 9000);
}

setInterval(createCrystal, 300);

// --- 2. LÓGICA DO CARROSSEL DE IMAGENS ---
const track = document.getElementById('carouselTrack');
const slides = Array.from(track.children);
const btnNext = document.getElementById('btnNext');
const btnPrev = document.getElementById('btnPrev');
const indicatorsContainer = document.getElementById('carouselIndicators');

let currentIndex = 0;

// Cria as bolinhas (indicadores) baseado na quantidade de fotos
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('indicator');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    indicatorsContainer.appendChild(dot);
});

const indicators = Array.from(indicatorsContainer.children);

function updateCarousel() {
    // Move as fotos
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Atualiza as bolinhas ativas
    indicators.forEach(dot => dot.classList.remove('active'));
    indicators[currentIndex].classList.add('active');
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateCarousel();
});

// --- 3. MODAL DE IMAGEM ---
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const modalClose = document.getElementById('modalClose');
const carouselImages = document.querySelectorAll('.carousel-image');

// Adiciona evento de clique em cada imagem do carrossel
carouselImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
        const captionText = img.nextElementSibling.textContent;
        modalCaption.textContent = captionText;
    });
});

// Fecha a modal ao clicar no X
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fecha a modal ao clicar fora da imagem
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Fecha a modal ao pressionar ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});
