/*
Прикольный проект где один элемент прыгает по нескольким дивам, ну
по крайней мере создаётся такой эффект. Эффект достигается благодаря 
нескольким дивам и использованию stagger. Благодаря чему анимации 
срабатывают одна за другой в нужной последовательности, а скраб 
делает это всё при скролле. 
*/

const colors = ['#F2309B', '#25C7D9', '#04BF8A', '#F2D338', '#F23030'];
gsap.set('.line', { background: gsap.utils.wrap(colors) });

const animation = gsap.fromTo(
  '.line',
  { y: -100 },
  { y: 200, ease: 'none', duration: 1, stagger: 0.8 },
);

ScrollTrigger.create({
  trigger: '.lineSections',
  start: 'top 300',
  end: 'bottom 300',
  markers: false,
  animation: animation,
  scrub: 1,
});
