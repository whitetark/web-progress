let timeline = gsap.timeline();

timeline
  .to('.main', {
    backgroundColor: '#E2C91E',
    duration: 2,
    delay: 0.5,
  })
  .to(
    '.figure',
    {
      borderRadius: '100%',
      duration: 2,
      delay: 0.5,
    },
    0,
  )
  .to(
    '#one',
    {
      rotation: -135,
      duration: 1,
      delay: 0.5,
    },
    0,
  )
  .to(
    '#two',
    {
      rotation: 135,
      duration: 1,
      delay: 0.5,
    },
    0,
  )
  .to(
    '#three',
    {
      rotation: 45,
      duration: 1,
      delay: 0.5,
    },
    0,
  )
  .to(
    '.photo',
    {
      y: 50,
      duration: 1,
      delay: 0.5,
    },
    0,
  )
  .to(
    '.hands',
    {
      fontSize: 128,
      y: -(window.innerHeight / 2),
      duration: 1,
      delay: 0.5,
    },
    0,
  )
  .to(
    '.fuck',
    {
      fontSize: 96,
      y: -200,
      duration: 1,
      delay: 0.5,
    },
    0,
  )
  .to(
    '.text',
    {
      color: '#000000',
      duration: 1,
      delay: 0.5,
    },
    0,
  );
