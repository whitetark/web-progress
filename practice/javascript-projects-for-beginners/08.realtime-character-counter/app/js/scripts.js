const textarea = document.getElementById('textarea')
const total = document.getElementById('total')
const remain = document.getElementById('remain')

textarea.addEventListener('keyup', () => {
  updateCounter()
})

updateCounter()

function updateCounter() {
  let textarea_value = textarea.value.length
  total.innerText = textarea_value
  remain.innerText = textarea.getAttribute('maxlength') - textarea_value
}
