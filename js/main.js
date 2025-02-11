// Высота шапки = высоте окна браузера
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    header.style.height = window.innerHeight + 'px';
});

// Обработчик для изменения высоты шапки при изменении размера окна
window.addEventListener('resize', function() {
    const header = document.querySelector('.header');
    header.style.height = window.innerHeight + 'px';
});