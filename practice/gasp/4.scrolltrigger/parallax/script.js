/*
Мы можем создать паралакс эффект, если будет анимировать эффект по правилу
чем дальше предмет тем медленее он. 
*/

gsap.defaults({ ease: 'none', duration: 1 });

let tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: '.demoWrapper',
      start: 'top 25%',
      end: '+=400',
      toggleActions: 'restart none none reverse',
      markers: true,
      scrub: 1,
      pin: true,
    },
  })
  .from('.background', { y: 50 })
  .from('.middleground', { y: 150 }, 0)
  .from('.foreground', { y: 250 }, 0)
  .from('.text', { y: 500 }, 0);
