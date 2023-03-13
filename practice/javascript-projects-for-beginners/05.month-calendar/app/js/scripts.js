const month_div = document.getElementById('month')
const date_div = document.getElementById('date')
let grid = document.querySelector('.calendar__content')

const current_date = new Date()
const month_index = current_date.getMonth()
const year = current_date.getFullYear()
const last_day = new Date(year, month_index + 1, 0).getDate()
const month_starts_at = new Date(year, month_index, 1).getDay()

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

month_div.innerHTML = months[month_index]
date_div.innerHTML = current_date.toDateString()

for (let i = month_starts_at; i > 1; i--) {
  let div = document.createElement('div')
  div.className = 'calendar__item'
  grid.appendChild(div)
}

for(let i = 1; i <= last_day; i++){
    let div = document.createElement('div')
    let span = document.createElement('span')
    div.className = 'calendar__item'
    span.innerText = i;
    div.appendChild(span);
    if (i === current_date.getDate()) {
      div.setAttribute('id', 'active')
    }
    grid.appendChild(div)
}
