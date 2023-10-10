const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const operators = ['+', '-', '*', '/']
let patternForOperators = /[+\-*\/]/g
let patternForNumbers = /[0-9]/g
let patternForLetters = /[A-Za-z]/
let screen = document.getElementById('result')

function typing(button) {
  if (screen.value == 'Invalid Format' || screen.value == 'Infinity') {
    reset()
  }

  if (numbers.includes(button.innerText)) {
    if (valueAfterOperator() == '0') {
      backspace()
    }
    screen.value += button.innerText
  } else if (operators.includes(button.innerText)) {
    if (operators.includes(screen.value.slice(-1))) {
      backspace()
    }
    screen.value += button.innerText
  } else if (button.innerText == 'DEL') {
    backspace()
    if (screen.value.slice(-1) == '') {
      reset()
    }
  } else if (button.innerText == 'RESET') {
    reset()
  } else if (button.innerText == '.') {
    if (screen.value.slice(-1) == '.') {
      backspace()
    }
    screen.value += button.innerText
  } else if (button.innerText == '=') {
    equal()
  }
}

function equal() {
  try {
    screen.value = eval(screen.value)
  } catch (error) {
    screen.value = 'Invalid Format'
  }
}

function backspace() {
  screen.value = screen.value.slice(0, -1)
}
function reset() {
  screen.value = '0'
}

function valueAfterOperator() {
  let values = screen.value.split(patternForOperators)
  return values[values.length - 1]
}

function setTheme(themeName) {
  localStorage.setItem('theme', themeName)
  document.documentElement.className = themeName
}

function toggleTheme(input) {
  switch (input.id) {
    case 'light':
      setTheme('light')
      break
    case 'purple':
      setTheme('purple')
      break
    case 'dark':
      setTheme('dark')
    default:
      setTheme('dark')
      break
  }
}

;(function () {
  switch (localStorage.getItem('theme')) {
    case 'light':
      setTheme('light')
      document.getElementById('light').setAttribute('checked', 'checked')
      break
    case 'purple':
      setTheme('purple')
      document.getElementById('purple').setAttribute('checked', 'checked')
      break
    case 'dark':
      setTheme('dark')
      document.getElementById('dark').setAttribute('checked', 'checked')
      break
    default:
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark')
        document.getElementById('dark').setAttribute('checked', 'checked')
      } else {
        setTheme('light')
        document.getElementById('light').setAttribute('checked', 'checked')
      }
  }
})()
