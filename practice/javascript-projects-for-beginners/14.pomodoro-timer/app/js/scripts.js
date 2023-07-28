const time = document.getElementById('time');
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')

let interval
let timeLeft = 1200;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60)
  let seconds = timeLeft % 60
  let current = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

  time.innerHTML = current
}

function startTimer() {
  toggleButtons()
  interval = setInterval(() => {
    timeLeft--
    updateTimer()
    if (timeLeft === 0) {
      clearInterval(interval)
      alert("Time's up!")
      timeLeft = 1200
      updateTimer()
    }
  }, 1000)
}
function stopTimer() {
    toggleButtons()
  clearInterval(interval)
}
function resetTimer() {
  clearInterval(interval)
  timeLeft = 1200
  updateTimer()
}

function toggleButtons(){
    stop.classList.toggle('active')
    start.classList.toggle('active')
}

start.addEventListener('click', startTimer)
stop.addEventListener('click', stopTimer)
reset.addEventListener('click', resetTimer)