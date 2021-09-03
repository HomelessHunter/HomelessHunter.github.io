document.addEventListener('DOMContentLoaded', () => {
    const goPage = document.querySelector('.go-page');
    const goButton = document.getElementById('go');
    const gallery = document.querySelector('.gallery');

    goPage.style.animationPlayState = 'paused';
    gallery.style.animationPlayState = 'paused';

    goButton.onclick = () => {
        goPage.style.animationPlayState = 'running';
        gallery.style.animationPlayState = 'running';
        gallery.style.display = 'flex';
    };
});
