let nav = document.getElementById('nav-menu')

let menuBtn = document.getElementById('checkbtn')
menuBtn.onclick = function () {
  nav.classList.toggle('active')
}

let closeMenu = document.getElementById('closeMenu')
closeMenu.onclick = function () {
  nav.classList.toggle('active')
}

function dropdownActive(button) {
  button.nextSibling.nextSibling.classList.toggle('dr-active')
}
