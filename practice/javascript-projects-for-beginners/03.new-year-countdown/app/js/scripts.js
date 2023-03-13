let yearDiv = document.getElementById('year')
let daysDiv = document.getElementById('days')
let hoursDiv = document.getElementById('hours')
let minutesDiv = document.getElementById('minutes')
let secondsDiv = document.getElementById('seconds')

let countdownDate = new Date();
countdownDate.setFullYear(countdownDate.getFullYear() + 1, 0, 1);
countdownDate.setHours(0, 0, 0, 0);

function updateCountdown(){
    const now = new Date();

    yearDiv.innerHTML = countdownDate.getFullYear();
	let timeRemaining = countdownDate - now;

	daysDiv.innerHTML = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
	hoursDiv.innerHTML = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutesDiv.innerHTML = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
	secondsDiv.innerHTML = Math.floor((timeRemaining % (1000 * 60)) / 1000);
}

setInterval(updateCountdown, 1000);