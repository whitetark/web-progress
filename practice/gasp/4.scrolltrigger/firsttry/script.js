/*
Первый раз пробую скроллтригер, оч понравились маркеры, это удобно,
в целом выглядит всё не очень сложно, но посмотрим<div className=""></div>
Из такого что запомнить, ну разве что возможности для тогглЭкшн, хотя
мне кажется, что если часто использовать это всё равно приучится
*/

gsap.registerPlugin(ScrollTrigger);
gsap.from('.herman', {
  duration: 3,
  x: '-50vw',
  rotation: -360,
  ease: 'linear',
  scrollTrigger: {
    trigger: '.herman',
    //markers: true,
    start: 'top 75%',
    end: 'bottom 25%',
    // onEnter onLeave onEnterBack onLeaveBack
    toggleActions: 'restart pause reverse reset',
    //play, pause, resume, reset, restart, complete, reverse, none
  },
});
