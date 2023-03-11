const slider = document.querySelector('.slider');

slider.addEventListener('mouseenter', () => {
  slider.querySelector('.slide-track').style.animationPlayState = 'paused';
});

slider.addEventListener('mouseleave', () => {
  slider.querySelector('.slide-track').style.animationPlayState = 'running';
});
