var time = document.querySelector('#time')
var date = document.querySelector('#date')
var day = document.querySelector('#day')
var icon = document.querySelector('#icon')

let dateObj = new Date();
date.textContent = dateObj.toLocaleDateString()

let dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
day.textContent = dayArray[dateObj.getDay()]

function getTime() {
    const dateObj = new Date()

    let hour = dateObj.getHours()
    let mins = dateObj.getMinutes()
    let second = dateObj.getSeconds()
    let ampm = hour >= 12 ? "PM" : "AM"

    
    if (hour >= 6 && hour <= 11) {
        icon.setAttribute('class', "sun-foggy-fill")
    } else if (hour >= 12 && hour <= 17) {
        icon.setAttribute('class', '"ri-sun-fill"')
    } else if (hour > 17 && hour <= 20) {
        icon.setAttribute('class', "ri-moon-foggy-line")
    } else if(hour>=21) {
        icon.setAttribute('class', "ri-moon-clear-line")
    }

    hour = hour < 10 ? `0${hour}` : hour
    mins = mins < 10 ? `0${mins}` : mins
    second = second < 10 ? `0${second}` : second

    
    let clockTime = `${hour} : ${mins} : ${second} ${ampm}`
    time.textContent = clockTime
}

getTime()
setInterval(()=>
{
getTime()}, 1000)
