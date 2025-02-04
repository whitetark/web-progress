/*
Создавая этот проект, я понял, что можно делать прикольные анимации наводки на элемент,
использывая gsap и функции restart() и pause() Так же немаловажный поинт, это scale 0.8 - 1, 
то есть мы заранее делаем обьект более мелкого размера и увеличиваем до 1, чтобы не было пикселей 
и качество было норм.
*/

const cta = document.querySelector('.cta');

const scaleTween = gsap.to(cta, { scale: 1, repeat: -1, yoyo: true, paused: true });

cta.addEventListener('mouseenter', () => {
  scaleTween.restart();
});

cta.addEventListener('mouseleave', () => {
  scaleTween.pause();
  gsap.to(cta, { scale: 0.8 });
});
