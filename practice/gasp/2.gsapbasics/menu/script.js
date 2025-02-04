/*
Один из стартовых проектов, где я познакомился с использованием одной и той же 
анимации у нескольких элементов. Из прикольного, мне понравилось использование
transformOrigin здесь, ибо без него всё ломается.
*/

const items = document.querySelectorAll('.item');
gsap.defaults({ duration: 0.3 });

items.forEach((item, index) => {
  const tl = gsap
    .timeline({ paused: true })
    .to(item.querySelector('.text'), {
      color: 'white',
      x: 10,
      scale: 1.3,
      transformOrigin: 'left center',
    })
    .to(item.querySelector('.dot'), { backgroundColor: '#F93', scale: 1.5 }, '<');

  item.addEventListener('mouseenter', () => tl.play());
  item.addEventListener('mouseleave', () => tl.reverse());
});
