function darkMode() {
  if (document.documentElement.style.getPropertyValue('--theme') == 'dark-theme') {
    document.documentElement.style.setProperty('--toggle', 'hsl(233, 19%, 91%)')
    document.documentElement.style.setProperty('--bg', 'hsl(0, 0%, 100%)')
    document.documentElement.style.setProperty('--top-bg-pattern', 'hsl(225, 100%, 98%)')
    document.documentElement.style.setProperty('--card-bg', 'hsl(227, 47%, 96%)')
    document.documentElement.style.setProperty('--text-light', 'hsl(228, 12%, 44%)')
    document.documentElement.style.setProperty('--text-dark', 'hsl(230, 17%, 14%)')
    document.documentElement.style.setProperty('--theme', 'light-theme')
    document.getElementById('btn').innerHTML = 'Off'
  } else {
    document.documentElement.style.setProperty('--toggle', 'hsl(229, 25%, 14%)')
    document.documentElement.style.setProperty('--bg', 'hsl(230, 17%, 14%)')
    document.documentElement.style.setProperty('--top-bg-pattern', 'hsl(232, 19%, 15%)')
    document.documentElement.style.setProperty('--card-bg', 'hsl(228, 28%, 20%)')
    document.documentElement.style.setProperty('--text-light', 'hsl(228, 34%, 66%)')
    document.documentElement.style.setProperty('--text-dark', 'hsl(0, 0%, 100%)')
    document.documentElement.style.setProperty('--theme', 'dark-theme')
    document.getElementById('btn').innerHTML = 'On'
  }
}
