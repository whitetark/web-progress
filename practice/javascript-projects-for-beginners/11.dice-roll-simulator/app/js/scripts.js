const dice = document.getElementById('dice')
const roll = document.getElementById('roll')
const loglist = document.getElementById('loglist')
const diceArray = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']

roll.addEventListener('click', () => {
  dice.classList.add('roll-animation')
  setTimeout(() => {
    dice.classList.remove('roll-animation')
    rollDice()
  }, 1000)
})

function rollDice() {
  let result = Math.floor(Math.random() * 5)

  dice.innerText = diceArray[result]

  let div = document.createElement('div')
  let p = document.createElement('p')
  let span = document.createElement('span')

  div.classList.add('log')
  p.innerText = `Roll ${loglist.childElementCount + 1}:`
  span.innerText = diceArray[result]

  div.appendChild(p)
  div.appendChild(span)
  loglist.appendChild(div)
}
