gsap.registerPlugin(ScrollTrigger, Flip);

let transitioned = false;
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const chuvak = document.querySelector('#chuvak');

let timeline = gsap
  .timeline({
    defaults: { duration: 2 },
  })
  .to(chuvak, {
    opacity: 1,
    ease: 'power2.out',
    '-webkit-mask-image':
      'radial-gradient(circle at top left, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%)',
    'mask-image': 'radial-gradient(circle at top left, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%)',
  })
  .to('#mask', { rotation: 30, ease: 'sine', transformOrigin: 'center', scale: 0.8 })
  .to(
    '#crown, #gold',
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
    '#mask, #crown, #gold',
    { rotation: 0, transformOrigin: 'center', scale: 1, ease: 'sine' },
    '<',
  )
  .to('.main', { display: 'none', duration: 0.5 })
  .to('.gamemenu', { display: 'block', autoAlpha: 1 })
  .to('#pixelbw', { autoAlpha: 1, duration: 3 })
  .to('#mask, #crown, #gold', { autoAlpha: 0, display: 'none' }, '<')
  .to('body', { backgroundColor: 'white', duration: 3 })
  .to('#pixelbw, #pixelup, #pixeldown', { autoAlpha: 1, scale: 1, duration: 3 })
  .to('.grid', { autoAlpha: 1 })
  .to('#pixelbw', { autoAlpha: 0 }, '<')
  .to('#pixeldown', { y: 140, repeat: -1, yoyo: true, duration: 0.3 });

// ScrollTrigger.create({
//   trigger: '.first',
//   scrub: 1,
//   pin: true,
//   markers: true,
//   start: 'top top',
//   end: 'bottom -300%',
//   toggleActions: 'restart none none none',
//   animation: timeline,
// });
