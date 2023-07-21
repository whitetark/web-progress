const perc = document.getElementById('perc')
const progress = document.getElementById('progress')
const progressbar = document.getElementById('progress-bar')
let number = (progress.offsetWidth / progressbar.offsetWidth) * 100

updateProgressbar()

function updateProgressbar() {
  progress.style.width = `${number}%`
  perc.innerText = number
  number++
  if (number < 101) {
    setTimeout(updateProgressbar, 100)
  }
}
