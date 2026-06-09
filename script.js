// Capturamos el elemento del fondo
const bg = document.getElementById('bgInteractive');

// Evento que detecta el movimiento del mouse en toda la pantalla
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calcula la distancia desde el centro de la pantalla
    // Dividido entre 40 para que sea un efecto Antigravity ultra suave y profesional
    const moveX = (window.innerWidth / 2 - mouseX) / 40;
    const moveY = (window.innerHeight / 2 - mouseY) / 40;

    // Aplica la transformación de movimiento al fondo
    bg.style.transform = `translate(${moveX}px, ${moveY}px)`;
});