const body = document.querySelector('body')

body.addEventListener('mousemove', (event) => {
  const x = event.offsetX
  const y = event.offsetY
  const span = document.createElement('span')
  span.style.left = x + 'px'
  span.style.top = y + 'px'

  const size = 6
  span.style.width = size + 'rem'
  span.style.height = size + 'rem'
  body.appendChild(span)

  setTimeout(() => {
    span.remove()
  }, 3000)
})
