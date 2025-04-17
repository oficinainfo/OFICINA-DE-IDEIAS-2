document.addEventListener('DOMContentLoaded', () => {
    const showRectBtn = document.getElementById('showRectBtn');
    const rectangle = document.getElementById('rectangle');
    const closeRectBtn = document.getElementById('closeRectBtn');
    const overlay = document.getElementById('overlay');

    showRectBtn.addEventListener('click', () => {
        overlay.style.display = 'block';
        rectangle.style.display = 'block';
        rectangle.style.opacity = '0';
        rectangle.style.animation = 'none';
        void rectangle.offsetWidth; // reinicia a animação
        rectangle.style.animation = 'fadeInUp 0.5s ease forwards';
    });

    closeRectBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        rectangle.style.display = 'none';
    });
});
