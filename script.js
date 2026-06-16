// ==========================================
// 1. EFECTO PARALLAX ORIGINAL
// ==========================================
const bg = document.getElementById('bgInteractive');
const orb1 = document.querySelector('.orb-1');
const orb2 = document.querySelector('.orb-2');
const orb3 = document.querySelector('.orb-3');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const percentX = (mouseX - centerX) / centerX;
    const percentY = (mouseY - centerY) / centerY;

    if (bg) bg.style.transform = `translate(${percentX * 15}px, ${percentY * 15}px)`;
    if (orb1) orb1.style.transform = `translate(${percentX * 35}px, ${percentY * 35}px)`;
    if (orb2) orb2.style.transform = `translate(${percentX * -25}px, ${percentY * -25}px)`;
    if (orb3) orb3.style.transform = `translate(${percentX * 55}px, ${percentY * 55}px)`;
});


// ==========================================
// 2. LÓGICA DEL CARRUSEL EN PANTALLA COMPLETA
// ==========================================

// URLs del carrusel configuradas a 1 minuto (60000 ms) cada una
const carouselUrls = [
    "https://avande-recepcion.vercel.app/",
    "https://resilient-bonbon-aa43dd.netlify.app/",
    "https://logistica-inversa-nexocorp.web.app/dashboard.html"
];

let carouselInterval = null;
let currentUrlIndex = 0;

const btnCarousel = document.getElementById('btnCarousel');
const carouselContainer = document.getElementById('carouselContainer');
const carouselIframe = document.getElementById('carouselIframe');
const btnExitCarousel = document.getElementById('btnExitCarousel');

// Iniciar el Carrusel y solicitar pantalla completa
btnCarousel.addEventListener('click', () => {
    // Forzar pantalla completa mediante API oficial del navegador
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
    } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullscreen) {
        docElm.webkitRequestFullscreen();
    }

    // Mostrar el contenedor del iframe e inicializar primera URL
    carouselContainer.classList.add('active');
    currentUrlIndex = 0;
    carouselIframe.src = carouselUrls[currentUrlIndex];

    // Configurar ciclo infinito para cambiar de página cada 1 minuto (60000ms)
    carouselInterval = setInterval(() => {
        currentUrlIndex = (currentUrlIndex + 1) % carouselUrls.length;
        carouselIframe.src = carouselUrls[currentUrlIndex];
    }, 60000);
});

// Detener Carrusel y salir de pantalla completa
function stopCarousel() {
    carouselContainer.classList.remove('active');
    carouselIframe.src = "";
    clearInterval(carouselInterval);

    if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => { });
    }
}

btnExitCarousel.addEventListener('click', stopCarousel);

// Si el usuario sale de pantalla completa apretando la tecla "ESC", cerramos el carrusel también
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        stopCarousel();
    }
});