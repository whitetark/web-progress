const form = document.getElementById('boxed')
function handleForm(event) {
  event.preventDefault()
}
form.addEventListener('submit', handleForm)

function submitScore() {
  let score = document.querySelector('input[name="rate"]:checked').value
  let first = document.getElementById('first')
  let second = document.getElementById('second')
  let yourRate = document.getElementById('yourRate')

  yourRate.innerHTML = score
  first.style.display = "none";
  second.style.display = "flex";
}
