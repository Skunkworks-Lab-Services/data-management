document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    const mainTopic = document.getElementById('main-topic');
    const searchBox = document.getElementById('search') as HTMLInputElement;
    const chatButton = document.querySelector('.chat-button');
    const chatPopup = document.createElement('div');

    chatPopup.classList.add('chat-popup');
    chatPopup.innerHTML = `
        <div class="chat-popup-header">Chat Support</div>
        <div class="chat-popup-body">
            <textarea placeholder="Type your message here..."></textarea>
        </div>
        <div class="chat-popup-footer">
            <button>Send</button>
        </div>
    `;
    document.body.appendChild(chatPopup);

    chatButton.addEventListener('click', () => {
        chatPopup.style.display = chatPopup.style.display === 'none' || chatPopup.style.display === '' ? 'block' : 'none';
    });

    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            mainTopic.innerHTML = `
                <h2>${circle.getAttribute('data-title')}</h2>
                <p>${circle.getAttribute('data-description')}</p>
            `;
            mainTopic.scrollIntoView({ behavior: 'smooth' });
        });

        circle.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.innerHTML = `
                <h3>${circle.getAttribute('data-title')}</h3>
                <p>${circle.getAttribute('data-description')}</p>
            `;
            circle.appendChild(tooltip);
            setTimeout(() => tooltip.classList.add('visible'), 10);
        });

        circle.addEventListener('mouseleave', () => {
            const tooltip = circle.querySelector('.tooltip');
            if (tooltip) {
                tooltip.classList.remove('visible');
                setTimeout(() => circle.removeChild(tooltip), 300);
            }
        });
    });

    searchBox.addEventListener('input', (e) => {
        const searchTerm = (e.target as HTMLInputElement).value.toLowerCase();
        circles.forEach(circle => {
            const title = circle.getAttribute('data-title').toLowerCase();
            circle.style.display = title.includes(searchTerm) ? 'flex' : 'none';
        });
    });

    window.addEventListener('scroll', () => {
        const parallax = document.querySelector('.main-circle');
        let scrollPosition = window.pageYOffset;
        parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
});
