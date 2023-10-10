function setTheme(themeName) {
  localStorage.setItem('theme', themeName)
  document.documentElement.className = themeName
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light')
    document.getElementById('btn').innerHTML = 'Off'
  } else {
    setTheme('theme-dark')
    document.getElementById('btn').innerHTML = 'On'
  }
}

;(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark')
    document.getElementById('btn').innerHTML = 'On'
  } else {
    setTheme('theme-light')
    document.getElementById('btn').innerHTML = 'Off'
  }
})()
