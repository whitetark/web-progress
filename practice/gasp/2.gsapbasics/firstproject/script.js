/*
При создании этого проекта, прежде всего я понял, что можно закидывать характеристики
просто в gsap, в каждый твин и в каждый таймлайн отдельно. Так же здесь я орудывал
таймлайном, в плане того, что я подстраивал элементы друг на друга, или друг после друга
используя "<", "-=0.2". Последнее что можно выделить, это способ как спрятать загружающиеся
картинки, а именно через функцию, "load", visibility: hidden и autoAlpha: 0. 
*/

gsap.defaults({ opacity: 0, ease: 'back' });
let timeline = gsap.timeline({ defaults: { ease: 'back', opacity: 0 }, duration: 0.5 });

const init = () => {
  timeline
    .from('#demo', { ease: 'linear', autoAlpha: 0 })
    .from('#main>h1', { x: 80, duration: 1 })
    .from('#main>h2', { x: -80, duration: 1 }, '<')
    .from('#main>p', { y: 30 }, '-=0.2')
    .from('#main>button', { y: 50 }, '-=0.4')
    .from(
      '#items>g',
      {
        scale: 0,
        stagger: {
          each: 0.1,
          from: 'random',
        },
        transformOrigin: '50% 50%',
      },
      '-=0.2',
    );
};

window.addEventListener('load', (event) => {
  init();
});
