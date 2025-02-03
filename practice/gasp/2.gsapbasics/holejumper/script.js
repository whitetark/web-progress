const hole = document.querySelector('.hole');
const herman = document.querySelector('.herman');
const shadow = document.querySelector('.shadow');

const tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 0.5 });

const init = () => {
  tl.from('.demo', { ease: 'linear', autoAlpha: 0 })
    .from(hole, { scale: 0, yoyo: true, repeat: 1 })
    .fromTo(herman, { y: 160, scaleY: 2 }, { y: -175, scaleY: 1 }, '<0.2')
    .to(
      herman,
      {
        y: -4,
        ease: 'sine.in',
      },
      '>',
    )
    .to(herman, {
      scaleY: 0.5,
      scaleX: 1.3,
      transformOrigin: 'bottom center',
      duration: 0.2,
      ease: 'sine.inOut',
      repeat: 1,
      yoyo: true,
    })
    .from(shadow, { opacity: 0, duration: 0.2 }, 0.7)
    .to(shadow, { scaleX: 0.7, ease: 'power1.in' }, '>');
};

window.addEventListener('load', (event) => {
  init();
});
