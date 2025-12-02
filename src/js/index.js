import mobileNav from './modules/mobile-nav.js';
mobileNav();

import { animate } from './modules/cursor-follower.js';
animate();

// import isAvifWebp from 'avif-webp-checker';
// isAvifWebp({ mode: 'webp' });

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeader = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY <= 0) {
            header.classList.remove('hidden');
            header.classList.remove('scroll-up');
        }
        else if (currentScrollY > lastScrollY) {
            header.classList.remove('scroll-up');
            header.classList.add('hidden');
        }
        else if (currentScrollY < lastScrollY) {
            header.classList.remove('hidden');
            header.classList.add('scroll-up');
        }

        lastScrollY = currentScrollY;
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });

    // Инициализация при загрузке (на случай, если страница загружена не с верха)
    updateHeader();
});

// Подстановка актуального года в футере
const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();