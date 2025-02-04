/*
Тут основная идея состоит в pinSpacing. При значении true, гсап создаёт пространство
в котором элемент будет двигаться, пока не дойдёт до следующего контента. А при значении
false, гсап приклеивается к верхней части экрана и обновляется вместе с прокрутом следующего
элемента
*/

ScrollTrigger.create({
  trigger: '.box',
  start: 'top 300px',
  end: '+=300',
  markers: true,
  pin: true,
  pinSpacing: true,
});
