// src/main.ts

document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    const parallax = document.querySelector('.main-circle') as HTMLElement;

    circles.forEach(circle => {
        circle.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.innerHTML = `
                <h3>${circle.getAttribute('data-title')}</h3>
                <p>${circle.getAttribute('data-description')}</p>
                <p>${circle.getAttribute('data-details')}</p>
            `;
            circle.appendChild(tooltip);
        });

        circle.addEventListener('mouseleave', () => {
            const tooltip = circle.querySelector('.tooltip');
            if (tooltip) {
                circle.removeChild(tooltip);
            }
        });
    });

    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
});
