/*
Простенький проект, который показывает четыре варианта делать тогл анимации
*/

// classic toggleActions
ScrollTrigger.create({
  trigger: '.one',
  start: 'top 50%',
  end: 'bottom 50%',
  markers: true,
  animation: gsap.to('.one', { background: 'black' }),
  toggleActions: 'play reverse play reverse',
});

// onToggle with conditional animations
ScrollTrigger.create({
  trigger: '.two',
  start: 'top 50%',
  end: 'bottom 50%',
  markers: true,
  onToggle: (self) => {
    if (self.isActive) {
      gsap.to('.two', { backgroundColor: 'black' });
    } else {
      gsap.to('.two', { backgroundColor: 'white' });
    }
  },
});

// onToggle with conditional values
ScrollTrigger.create({
  trigger: '.three',
  start: 'top 50%',
  end: 'bottom 50%',
  markers: true,
  onToggle: (self) => {
    gsap.to('.three', {
      backgroundColor: self.isActive ? 'black' : 'white',
    });
  },
});

// onToggle Tween Toggle!
ScrollTrigger.create({
  trigger: '.four',
  start: 'top 50%',
  end: 'bottom 50%',
  markers: true,
  animation: gsap.to('.four', { background: 'black' }),
  onToggle: (self) => {
    self.animation.reversed(!self.isActive);
  },
});
