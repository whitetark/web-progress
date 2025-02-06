/*
В этом проекте я познакомился с методами wrap и toArray, которые позволяют оперировать
с массивами данных. В случае wrap, мы просто раскидуем цвета по индексам элементам
с одинаковым классом. toArray просто замена querySelectorAll.
Так же в этом проекте был затронут респонсив дизайн, а именно динамическое 
обновление высоты nav и на основе этого обновление ScrollTrigger. Для того, чтобы
не рендерился базовый цвет, мы испольузем immediateRender: false. А для того, чтобы 
ScrollTrigger обновлялся мы используем ивент refreshInit, который как бы разрешает
нам обновлять данные когда происходит обновление. Чем-то похоже на реакт и useEffect. 
*/

const sectionColors = ['dodgerblue', 'salmon', 'green', 'purple', 'maroon'];
const navColors = ['#00BFFF', '#FFA07A', '#90EE90', '#EE82EE', '#FF6347'];
gsap.set('.fullscreen', { backgroundColor: gsap.utils.wrap(sectionColors) });
let navHeight = document.querySelector('.nav').offsetHeight;
const sections = gsap.utils.toArray('.fullscreen');

sections.forEach(function (section, index) {
  console.log(section, navColors[index]);
  let animation = gsap.to('.nav', {
    backgroundColor: navColors[index],
    immediateRender: false,
  });

  ScrollTrigger.create({
    trigger: section,
    start: () => `top ${navHeight}px`,
    end: () => `bottom ${navHeight}px`,
    markers: true,
    animation: animation,
    toggleActions: 'restart none none reverse',
    preventOverlaps: true,
  });
});

ScrollTrigger.addEventListener('refreshInit', function () {
  navHeight = document.querySelector('.nav').offsetHeight;
});
