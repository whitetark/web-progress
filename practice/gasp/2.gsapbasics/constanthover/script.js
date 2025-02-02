const cta = document.querySelector('.cta');

const scaleTween = gsap.to('.cta', { scale: 1, repeat: -1, yoyo: true, paused: true });

cta.addEventListener('mouseenter', () => {
  scaleTween.restart();
});

cta.addEventListener('mouseleave', () => {
  scaleTween.pause();
  gsap.to(cta, { scale: 0.8 });
});
