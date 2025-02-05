/*
Если анимировать триггер-элемент и поставить его выше чем его стартовая позиция, то
анимация будет срабатывать раньше чем она должна, по-этому надо с умом подходить с 
выбором тригера, в случае этого примера триггер - это баннер, а анимируем мы хедер
*/

let banners = document.querySelectorAll('.banner');

banners.forEach((element) => {
  let background = element.querySelector('.background');

  let headings = element.querySelectorAll('h1, h2');
  let tl = gsap
    .timeline()
    .from(headings, { y: -100, stagger: 0.1, duration: 1 })
    .from(background, { backgroundPosition: '60% 0%', filter: 'brightness(0.1)' }, 0);
  ScrollTrigger.create({
    trigger: element,
    start: 'top 100%',
    toggleActions: 'play none none reverse',
    animation: tl,
  });
});
