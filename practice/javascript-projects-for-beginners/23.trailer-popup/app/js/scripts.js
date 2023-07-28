const show = document.getElementById('show')
const close = document.getElementById('close')
const trailer = document.querySelector('.trailer')
const overlay = document.querySelector('.overlay')

show.addEventListener('click', toggleOverlay)
close.addEventListener('click', toggleOverlay)

function toggleOverlay() {
  trailer.classList.toggle('hidden')
  overlay.classList.toggle('hidden')
}
