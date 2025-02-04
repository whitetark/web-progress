/*
Этот проект познакомил меня с скрабом и пином. Скраб - это такая 
штука, которая позволяет сделать анимацию по скролу, scrub: true немного
дёрганный из-за мышки, а вот scrub: 1, плавный как тачпад. Если ставить
больше, то предмет будет доезжать с задержкой. Пин держит элемент в том
же месте на странице, где он и начал, ну точнее на той же высоте.
*/

let width = window.innerWidth;
let speed = 350; //pixels per second
let endX = width - 500;

let circumference = document.querySelector('#wheel1').getBBox().width * Math.PI;
let rotation = (endX / circumference) * 360;
let duration = endX / speed;
let ease = 'none';

let tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: '.carWrapper',
      start: 'top 50%',
      end: 'bottom 50%',
      //markers: true,
      scrub: 1,
      pin: true,
      pinSpacing: false,
    },
  })
  .to('svg', { duration: duration, x: endX, ease: ease })
  .to(
    '#wheel1, #wheel2',
    { duration: duration, rotation: rotation, transformOrigin: '50% 50%', ease: ease },
    0,
  );
