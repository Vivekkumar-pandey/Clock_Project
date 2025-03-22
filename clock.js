const clock = document.querySelector('.clock');
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

// angle calculation

    const secondsDegree = (seconds / 60) * 360;
    const minutesDegree = ((minutes + seconds / 60) / 60) * 360;
    const hoursDegree = ((hours + minutes / 60) / 12) * 360;

//rotation

    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}
//initial update and set interval
  updateClock();
  setInterval(updateClock, 1000);

//create number
    for (let i=1;i<=12;i++) {
        const number = document.createElement('div');
        number.className = 'number';
        number.style.setProperty('--rotation', `${i * 30}deg`);
        number.innerHTML = `<span>${i}</span>`;
        clock.appendChild(number);
    }



