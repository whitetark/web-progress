const span = document.getElementById('result')
const form = document.getElementById('form')

function handleForm(event) {
  event.preventDefault()
}
form.addEventListener('submit', handleForm)

function submitForm() {
  const bill = document.getElementById('bill').value
  const perc = document.getElementById('perc').value
  const total = bill * (1 + perc / 100)
  span.innerText = 'Your Result is ' + total.toFixed(2)
}
