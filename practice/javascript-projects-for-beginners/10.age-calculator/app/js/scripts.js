const span = document.getElementById('age')
const form = document.getElementById('ageSubmit')

function handleForm(event) {
  event.preventDefault()
}
form.addEventListener('submit', handleForm)

function submitForm() {
  let input = document.getElementById('birthdate')
  if (input.value == '') {
    span.innerText = 'Choose Your Datebirth'
  } else {
    let date = new Date(input.value)
    let now = new Date()
    let time = new Date(now.getTime() - date.getTime())
    let years = time.getUTCFullYear() - 1970
    span.innerText = 'Your Age is ' + years
  }
}
