const background_image = document.querySelector('.background-image')

window.addEventListener('scroll', () => {
  updateImage()
})

function updateImage() {
  background_image.style.opacity = 1 - window.pageYOffset / 900
  background_image.style.backgroundSize = 110 - window.pageYOffset / 12 + '%'
}
