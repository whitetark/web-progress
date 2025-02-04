gsap.registerPlugin(ScrollTrigger);

let timeline = gsap.timeline({
  defaults: { duration: 0.5, delay: 0.25 },
  scrollTrigger: {
    trigger: '.main',
    scrub: 1,
    pin: true,
    markers: true,
    toggleActions: 'restant none none none',
  },
});

timeline
  .to('.main', {
    backgroundColor: '#E2C91E',
    duration: 1,
  })
  .to(
    '.figure',
    {
      borderRadius: '100%',
      duration: 1,
    },
    0,
  )
  .to(
    '#one',
    {
      rotation: -135,
    },
    0,
  )
  .to(
    '#two',
    {
      rotation: 135,
    },
    0,
  )
  .to(
    '#three',
    {
      rotation: 45,
    },
    0,
  )
  .to(
    '.photo',
    {
      y: 50,
    },
    0,
  )
  .to(
    '.hands',
    {
      fontSize: 128,
      y: -(window.innerHeight / 2),
    },
    0,
  )
  .to(
    '.fuck',
    {
      fontSize: 96,
      y: -200,
    },
    0,
  )
  .to(
    '.text',
    {
      color: '#000000',
    },
    0,
  );
