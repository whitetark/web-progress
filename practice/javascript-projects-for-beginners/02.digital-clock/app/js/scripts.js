let hour_div = document.getElementById('hours')
let min_div = document.getElementById('minutes')
let sec_div = document.getElementById('seconds')
let ampm_div = document.getElementById('ampm')


function update_current_time(){
const current_time = new Date();

let hours = current_time.getHours();
let minutes = current_time.getMinutes();
let seconds = current_time.getSeconds();
ampm_div.innerHTML = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12;
hour_div.innerHTML = hours < 10 ? '0' + hours : hours;
min_div.innerHTML = minutes < 10 ? '0' + minutes : minutes;
sec_div.innerHTML = seconds < 10 ? '0' + seconds : seconds;
}

setInterval(update_current_time, 1000);