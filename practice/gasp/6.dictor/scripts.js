gsap.registerPlugin(ScrollTrigger, Flip);

let transitioned = false;
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const chuvak = document.querySelector('.chuvak');

const transitionItem = () => {
  const state = Flip.getState(chuvak);
  transitioned ? first.prepend(chuvak) : second.prepend(chuvak);
  Flip.from(state, {
    duration: 2,
    ease: 'power1.inOut',
  });
  transitioned = !transitioned;
};

let timeline = gsap
  .timeline({
    defaults: { duration: 2 },
  })
  .to('.chuvak', {
    opacity: 1,
    ease: 'power2.out',
    '-webkit-mask-image':
      'radial-gradient(circle at top left, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%)',
    'mask-image': 'radial-gradient(circle at top left, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%)',
  })
  .to('.mask', { rotation: 30, ease: 'sine', transformOrigin: 'center', scale: 0.8 })
  .to(
    '.crown, .gold',
    {
      rotation: 30,
      ease: 'sine',
      transformOrigin: 'center',
      autoAlpha: 1,
      scale: 0.8,
    },
    '<',
  )
  .to('.main', { autoAlpha: 1, ease: 'sine' })
  .from('.title', { y: -200, ease: 'back' }, '<')
  .from('.flexbox', { y: 200, ease: 'back' }, '<')
  .to('.main', { autoAlpha: 0, delay: 4 })
  .to(
    '.mask, .crown, .gold',
    { rotation: 0, transformOrigin: 'center', scale: 1, ease: 'sine' },
    '<',
  );

ScrollTrigger.create({
  trigger: '.first',
  scrub: 1,
  pin: true,
  markers: true,
  start: 'top top',
  endTrigger: '.second',
  end: 'bottom bottom',
  toggleActions: 'restart none none none',
  animation: timeline,
  onLeave: function () {
    transitionItem();
  },
});

ScrollTrigger.create({
  trigger: '.second',
  scrub: 1,
  pin: true,
  markers: true,
  start: 'top top',
  end: 'bottom top',
  onLeaveBack: function () {
    transitionItem();
  },
});
