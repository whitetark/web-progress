/*
Этот проект показал два новых проперти, а именно endTrigger и once.
endTrigger по идее понятно, мы можем использовать какой-то отдельный элемент
как конец анимации. trigger тут выступает больше как startTrigger.
once не откатывает анимацию назад, то есть она может двигаться только вперёд, иначе
она стоит в состоянии стопа. 
Так же в этом проекте был воссоздан мануальный скраб используя селф.референс
*/

const progressHolder = document.querySelector('.progressHolder');
const progressBar = document.querySelector('.progressBar');

let tween = gsap.to(progressBar, { scale: 1, ease: 'none', paused: true });

ScrollTrigger.create({
  trigger: 'body',
  markers: true,
  //animation: gsap.to(progressBar, { scale: 1, ease: 'none' }),
  start: 'top top',
  //scrub: true,
  endTrigger: 'main',
  end: 'bottom bottom',
  once: true,
  onLeave: () => {
    progressHolder.classList.remove('fixed');
  },
  onUpdate: (self) => {
    if (self.progress > tween.progress()) {
      tween.progress(self.progress);
    }
  },
});
