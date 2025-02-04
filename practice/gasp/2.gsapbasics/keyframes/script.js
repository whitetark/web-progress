/*
Тут я познакомился с кейфреймами, а именно с комплексной анимацией одиночного
элемента. Самое сложное наверное это подобрать нужные тайминги и ease, который
может быть как и на всём кейфрейме, так и у каждой мини-анимации отдельно. 
*/

const tl = gsap.timeline();

const init = () => {
  gsap.set('.demo', { autoAlpha: 1 });
  // tl.to('.slime', {
  //   keyframes: {
  //     '0%': { x: -100 },
  //     '25%': { y: 0 },
  //     '50%': { y: -100, ease: 'sine' },
  //     '75%': { y: 0, ease: 'sine.in' },
  //     '100%': { x: 400, ease: 'none' },
  //   },
  //   duration: 3,
  // });

  // tl.to('.slime', {
  //   keyframes: {
  //     '0%': { x: '50%' },
  //     '25%': { scale: 0.5 },
  //     '40%': { rotation: 0 },
  //     '50%': { scale: 2 },
  //     '60%': { rotation: 360 },
  //     '75%': { scale: 1, rotation: 360 },
  //     eachDuration: 0.1,
  //   },
  //   duration: 1.5,
  // });

  tl.to('.slime', {
    keyframes: {
      '10%': { scale: 0.7 },
      '33%': { x: 300, ease: 'sine' },
      '55%': { scale: 2, ease: 'sine.in' },
      '75%': { x: 20, ease: 'sine.inOut' },
      '83%': { scale: 1, ease: 'sine.inOut' },
      '100%': { x: 400, scale: 0.7 },
    },
    duration: 3,
    ease: 'sine',
  });
};

play.addEventListener('click', () => tl.restart());
window.addEventListener('load', (event) => {
  init();
});
