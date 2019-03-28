const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const second = now.getSeconds();

    const hourDeg = (hour / 12) * 360;
    const minDeg = (min / 60) * 360;
    const secondDeg = ((second + 60) / 60) * 360;
    // 

    hourHand.style.setProperty('transform', `rotate(${hourDeg + 90}deg)`);
    minHand.style.setProperty('transform', `rotate(${minDeg + 90}deg)`);
    secondHand.style.setProperty('transform', `rotate(${secondDeg + 90}deg)`);
}

setInterval(() => setDate(), 1000);
setDate();

// const secondHand = document.querySelector('.second-hand');
// const minsHand = document.querySelector('.min-hand');
// const hourHand = document.querySelector('.hour-hand');

// function setDate() {
//   const now = new Date();

//   const seconds = now.getSeconds();
//   const secondsDegrees = (seconds / 60) * 360 + 90;
//   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

//   const mins = now.getMinutes();
//   const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
//   minsHand.style.transform = `rotate(${minsDegrees}deg)`;

//   const hour = now.getHours();
//   const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
//   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
// }

// setInterval(setDate, 1000);

// setDate();
