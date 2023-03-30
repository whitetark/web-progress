const images = document.querySelectorAll('.gallery__panel')

function removeActiveClasses() {
  images.forEach((image) => {
    image.classList.remove('active')
  })
}

images.forEach((image) => {
  image.addEventListener('click', () => {
    removeActiveClasses()
    image.classList.add('active')
  })
})
