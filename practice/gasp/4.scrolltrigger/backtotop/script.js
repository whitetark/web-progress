/*
Простенький проект, где изучаются две прикольные возможности, а именно
изменение класса на элементе с помощью toggleClass и проперти
fastScrollEnd, который позволяет обрывать анимацию при очень резком
скачке в скроллинге. Другой способ это - preventOverlaps
*/

const animation = gsap
  .timeline()
  .set('.message', { autoAlpha: 1 })
  .from('.message', { yPercent: 100, ease: 'back' })
  .from('a', { xPercent: -100, duration: 0.35 });

ScrollTrigger.create({
  trigger: 'body',
  start: '75% bottom',
  //toggleClass: 'active',
  animation: animation,
  toggleActions: 'play none none reverse',
  fastScrollEnd: true,
});
