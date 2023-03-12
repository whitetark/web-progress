let hour_div = document.getElementById('hour')
let min_div = document.getElementById('minute')
let sec_div = document.getElementById('second')

function updateTime(){
    const current_time = new Date();

    let hours = current_time.getHours()
    hours = hours % 12
    hours = hours ? hours : 12
    let minutes = current_time.getMinutes()
    let seconds = current_time.getSeconds()

    hour_div.style.transform = `rotate(${hours * 30 + 'deg'})`
    min_div.style.transform = `rotate(${minutes * 6 + 'deg'})`
    sec_div.style.transform = `rotate(${seconds * 6 + 'deg'})`

}

setInterval(updateTime, 1000);