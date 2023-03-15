const bgImageEl = document.querySelector('.background-image')

window.addEventListener('scroll', () => {
  updateImage()
})

function updateImage() {
  bgImageEl.style.opacity = 1 - window.pageYOffset / 900
  bgImageEl.style.backgroundSize = 110 - window.pageYOffset / 12 + '%'
}
