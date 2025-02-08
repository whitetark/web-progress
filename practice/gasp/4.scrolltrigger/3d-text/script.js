/*
Первая проба в простенькие 3д анимации
*/

gsap.set('.heading-3d', { transformPerspective: 800, rotationY: 30, rotationX: -90 });

var animation = gsap
  .timeline({})
  .to('.heading-3d', { rotationX: 0 })
  .to('.heading-3d', { rotationX: 90 });

ScrollTrigger.create({
  trigger: '.heading-3d-wrapper',
  start: 'top 75%',
  end: 'bottom 25%',
  markers: true,
  scrub: 1,
  animation: animation,
  // onEnter: () => {
  //   gsap.to('.heading-3d', { rotationX: 0 });
  // },
  // onLeave: () => {
  //   gsap.to('.heading-3d', { rotationX: 90 });
  // },
  // onEnterBack: () => {
  //   gsap.to('.heading-3d', { rotationX: 0 });
  // },
  // onLeaveBack: () => {
  //   gsap.to('.heading-3d', { rotationX: -90 });
  // },
});
