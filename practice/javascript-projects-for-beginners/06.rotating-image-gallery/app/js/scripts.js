const next_button = document.getElementById('next')
const prev_button = document.getElementById('prev')
let gallery_div = document.querySelector('.gallery')

let is_run = true
let deg = 0

prev_button.addEventListener('click', function () {
  if (deg % 60 !== 0) {
    is_run = false
    deg = roundToNext60(deg)
  } else {
    deg += 60
  }
  gallery_div.style.transform = `perspective(100rem) rotateY(${deg}deg)`
})

next_button.addEventListener('click', function () {
  if (deg % 60 !== 0) {
    is_run = false
    deg = roundToPrev60(deg)
  } else {
    deg -= 60
  }
  gallery_div.style.transform = `perspective(100rem) rotateY(${deg}deg)`
})

function roundToNext60(num) {
  if (num % 60 === 0) {
    return num
  } else {
    return num + (60 - (num % 60))
  }
}

function roundToPrev60(num) {
  if (num % 60 === 0) {
    return num
  } else {
    return num - (num % 60)
  }
}

function rotateGallery() {
  if(is_run){
    if (deg == 360) {
      deg = 0
    }
    deg += 0.1
    gallery_div.style.transform = `perspective(100rem) rotateY(${deg}deg)`
    window.requestAnimationFrame(rotateGallery)
  }
}

var inactivityTime = function () {
  var time
  window.onload = resetTimer
  // DOM Events
  document.onmousemove = resetTimer
  document.onkeydown = resetTimer

  function logout() {
    is_run = true;
    rotateGallery()
    //location.href = 'logout.html'
  }

  function resetTimer() {
    clearTimeout(time)
    time = setTimeout(logout, 3000)
    // 1000 milliseconds = 1 second
  }
}

window.onload = function () {
  inactivityTime()
}