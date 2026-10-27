// Seleccionamos elementos
const toggleBtn = document.querySelector('.video-toggle-btn');
const textBox = document.querySelector('.text-box');
const videoWrapper = document.querySelector('.video-wrapper');

toggleBtn.addEventListener('click', () => {
    // Alternamos clases
    textBox.classList.toggle('panel-visible');
    textBox.classList.toggle('panel-hidden');
    videoWrapper.classList.toggle('video-moved');
});
