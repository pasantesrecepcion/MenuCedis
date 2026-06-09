// Capturamos el elemento del fondo y los círculos decorativos
const bg = document.getElementById('bgInteractive');
const orb1 = document.querySelector('.orb-1');
const orb2 = document.querySelector('.orb-2');
const orb3 = document.querySelector('.orb-3');

// Evento que detecta el movimiento del mouse en toda la pantalla
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Centro de la pantalla
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Calcular desplazamiento relativo (-1 a 1) respecto al centro
    const percentX = (mouseX - centerX) / centerX;
    const percentY = (mouseY - centerY) / centerY;

    // Aplicar transformación de movimiento (Parallax 3D) siguiendo el cursor
    // Se usan diferentes intensidades por capa para dar sensación de profundidad física

    if (bg) {
        // Movimiento base del fondo
        bg.style.transform = `translate(${percentX * 15}px, ${percentY * 15}px)`;
    }

    if (orb1) {
        // Orbe 1 se desplaza en dirección del mouse
        orb1.style.transform = `translate(${percentX * 35}px, ${percentY * 35}px)`;
    }

    if (orb2) {
        // Orbe 2 se mueve en dirección opuesta (paralaje inverso para profundidad 3D)
        orb2.style.transform = `translate(${percentX * -25}px, ${percentY * -25}px)`;
    }

    if (orb3) {
        // Orbe 3 se desplaza con mayor velocidad
        orb3.style.transform = `translate(${percentX * 55}px, ${percentY * 55}px)`;
    }
});
