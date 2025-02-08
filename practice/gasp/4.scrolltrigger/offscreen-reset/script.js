/*
Проект в котором мы просто можем использовать несколько скролл-тригеров
для лучшего юзер-экспириенса. В первом скролл-триггере мы делаем анимацию появления
А второй нужен, чтобы анимация сбросилась когда этого не видит пользователь. 
*/

gsap.set('.quote', { opacity: 0, scale: 0.5 });

ScrollTrigger.create({
  trigger: ' .quoteWrapper',
  start: 'bottom 95%',
  onEnter: () => gsap.to('quote', { opacity: 1, scale: 1 }),
});
ScrollTrigger.create({
  trigger: '.quoteWrapper',
  start: 'top 100%',
  onLeaveBack: () => {
    gsap.set('.quote', { opacity: 0, scale: 0.5 });
  },
});
