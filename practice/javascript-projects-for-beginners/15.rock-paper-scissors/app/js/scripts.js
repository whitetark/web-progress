const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

const player = document.getElementById('you')
const computer = document.getElementById('computer')
const logger = document.getElementById('logger')

let playerScore = 0
let computerScore = 0

function gameStart(item) {
  let moves = ['👊', '🖐', '✌']
  let computerChoice = moves[Math.floor(Math.random() * moves.length)]
  let playerChoice = item.innerText
  let result

  if (computerChoice === playerChoice) {
    result = 0
  } else if (
    (computerChoice === '👊' && playerChoice === '🖐') ||
    (computerChoice === '🖐' && playerChoice === '✌') ||
    (computerChoice === '✌' && playerChoice === '👊')
  ) {
    playerScore++
    result = 1
  } else {
    computerScore++
    result = -1
  }

  roundResult(result, playerChoice, computerChoice)
}

function roundResult(result, playerChoice, computerChoice) {
  player.innerText = playerScore
  computer.innerText = computerScore

  let item = document.createElement('div')
  item.className = 'logger-item'

  let you = document.createElement('div')
  you.className = 'logger-item-you'
  you.innerText = playerChoice

  let info = document.createElement('div')
  info.className = 'logger-item-info'

  let yourResult = document.createElement('div')
  let computerResult = document.createElement('div')
  yourResult.className = 'logger-item-winner-one'
  computerResult.className = 'logger-item-winner-two'
  if (result === -1) {
    yourResult.innerText = '😢'
    computerResult.innerText = '🏆'
    info.innerText = 'You lost :( ' + computerChoice + ' beats ' + playerChoice
  } else if (result === 1) {
    yourResult.innerText = '🏆'
    computerResult.innerText = '😢'
    info.innerText = 'You won ! ' + playerChoice + ' beats ' + computerChoice
  } else {
    yourResult.innerText = '🤝'
    computerResult.innerText = '🤝'
    info.innerText = "It's a Tie!"
  }

  let computerdiv = document.createElement('computer')
  computerdiv.className = 'logger-item-computer'
  computerdiv.innerText = computerChoice

  item.appendChild(you)
  item.appendChild(yourResult)
  item.appendChild(info)
  item.appendChild(computerResult)
  item.appendChild(computerdiv)

  logger.appendChild(item)
}
