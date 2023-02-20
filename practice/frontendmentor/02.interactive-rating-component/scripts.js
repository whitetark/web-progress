var form = document.getElementById('boxed')
function handleForm(event) {
  event.preventDefault()
}
form.addEventListener('submit', handleForm)

function submitScore() {
  var score = document.querySelector('input[name="rate"]:checked').value
  var first = document.getElementById('first')
  var second = document.getElementById('second')
  var yourRate = document.getElementById('yourRate')

  yourRate.innerHTML = score
  first.style.display = "none";
  second.style.display = "flex";
}
