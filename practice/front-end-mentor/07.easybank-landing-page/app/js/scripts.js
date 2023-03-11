let overlay = document.querySelector('.overlay');
let menu = document.querySelector('.header-links');
let button = document.querySelector('.header-menu');
function toggleMenu(){
    overlay.classList.toggle('active')
    menu.classList.toggle('active')
    button.classList.toggle('active')
}