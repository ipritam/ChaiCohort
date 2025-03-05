const handhour = document.querySelector('.hand.hour');
const handminute = document.querySelector('.hand.minute');
const handsecond = document.querySelector('.hand.second');

const digitalClock = document.querySelector('.digital-clock')
const dateSec = document.querySelector('.date')

function setClockTime() {
    const now = new Date(); 
    const hours = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    
    const hourDeg = ((hours % 12) / 12) * 360 + (minute / 60) * 30;
    const minDeg = ((minute + second / 60) / 60) * 360;
    const secDeg = (second / 60) * 360;

    // Apply rotations
    handsecond.style.transform = `rotate(${secDeg}deg)`;
    handminute.style.transform = `rotate(${minDeg}deg)`;
    handhour.style.transform = `rotate(${hourDeg}deg)`;

    const formattedsecond = second < 10 ? "0"+second : second;
    const formattedminute = minute < 10 ? "0"+minute : minute;
    const formattedhour = hours < 10 ? "0"+hours : hours;

    digitalClock.innerHTML = `${formattedhour} : ${formattedminute} : ${formattedsecond}`;


    const month = now.getMonth() + 1; 
    const date = now.getDate(); 
    const year = now.getFullYear();
    // const day = now.getDay();
    const formattedMonth = month < 10 ? "0" + month : month;
    const formattedDate = date < 10 ? "0" + date : date;

    const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const day = daysOfWeek[now.getDay()];


    dateSec.innerHTML = `${day} , ${formattedDate}.${formattedMonth}.${year}`
    // dateSec.innerHTML = `${day}`
}

// Ensure clock updates every second
setInterval(setClockTime, 1000);
setClockTime(); // Initialize on page load
