const dot = document.querySelector('.cursor-dot');
const circle = document.querySelector('.cursor-circle');

let mouseX = 0;
let mouseY = 0;
let dotX = 0;
let dotY = 0;
let circleX = 0;
let circleY = 0;

const dotSpeed = 0.2;
const circleSpeed = 0.1;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

export function animate() {
    // Точка
    dotX += (mouseX - dotX) * dotSpeed;
    dotY += (mouseY - dotY) * dotSpeed;

    // Круг
    circleX += (mouseX - circleX) * circleSpeed;
    circleY += (mouseY - circleY) * circleSpeed;

    dot.style.left = `${dotX}px`;
    dot.style.top = `${dotY}px`;

    circle.style.left = `${circleX}px`;
    circle.style.top = `${circleY}px`;

    requestAnimationFrame(animate);
}