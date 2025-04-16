document.addEventListener('DOMContentLoaded', () => {
    const showRectBtn = document.getElementById('showRectBtn');
    const rectangle = document.getElementById('rectangle');
    const closeRectBtn = document.getElementById('closeRectBtn');

    showRectBtn.addEventListener('click', () => {
        rectangle.style.display = 'block';
    });

    closeRectBtn.addEventListener('click', () => {
        rectangle.style.display = 'none';
    });
});
