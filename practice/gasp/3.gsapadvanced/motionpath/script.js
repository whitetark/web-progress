/*
Основная задумка этого проекта это познакомиться с платным плагином MotionPath,
хз задумаю ли я его купить, но творить можно прикольные штучки.
Из прикольного, тут можно управлять анимацией по процентам, останавливать,
стартовать, плюс появились полезные методы onUpdate и onComplete, которые мне
чем-то напоминают изучение реакта. А ну и так же я чуть лучше познакомился с 
свг форматом, что вот его надо именно вставлять в код, а не через img:src
*/

let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectorAll(e);

let progressSlider = select('#progressSlider');
let time = select('#time');
let pause = select('#pause');

let school = select('#school');
let dogpark = select('#dogpark');
let candy = select('#candy');
let home = select('#home');

let animation = gsap.to('#herman', {
  duration: 6,
  ease: 'none',
  motionPath: {
    path: '#motionpath',
    align: '#herman',
  },
  onUpdate: animationUpdate,
  onComplete: () => (pause.innerHTML = 'play'),
});

progressSlider.addEventListener('input', function () {
  animation.progress(this.value).pause();
});

function animationUpdate() {
  progressSlider.value = this.progress();
  time.innerHTML = this.time().toFixed(2);
  pause.innerHTML = animation.paused() ? 'play' : 'pause';
}

pause.addEventListener('click', () => {
  animation.paused(!animation.paused());
  if (animation.progress() == 1) {
    animation.restart();
  }
});

home.addEventListener('click', function () {
  animation.pause();
  gsap.to(animation, { progress: 0 });
});
candy.addEventListener('click', function () {
  animation.pause();
  gsap.to(animation, { progress: 0.5 });
});
dogpark.addEventListener('click', () => {
  animation.pause();
  gsap.to(animation, { progress: 0.9 });
});
school.addEventListener('click', function () {
  animation.pause();
  gsap.to(animation, { progress: 1, ease: 'bounce' });
});
