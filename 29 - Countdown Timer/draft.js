timer__button;
const submitter = input[name = 'minutes'];
const leftTime = display__time - left;
const endTime = display__end - time;

const now = new Date.getTime();
const hourNow = new Date.getHours();
const minNow = new Date.getMinutes();
const secNow = new Date.getSeconds();

function setTimer(minutes) {
    let setTime;

    if (minutes) { setTime = minutes * 60; } else { setTime = this.dataset.time; }
    // let totalSecondsEndTime = now + setTime;
    setInterval(() => {
        let minLeftTime = Math.floor(setTime / 60);
        let secLeftTime = setTime % 60;
        leftTime.textContent = `${minLeftTime}:${secLeftTime}`;

        let hourEndTime = Math.floor((minLeftTime + minNow) / 60);
        let minEndTime = (minLeftTime + minNow) % 60;
        let secEndTime = (secLeftTime + secNow) % 60;
        endTime.textContent = `${hourEndTime}:${minEndTime}:${secEndTime}`;
    }, 1000);
}

function submitMins() {
    e.preventDefault();
    setTimer(this.value);
}

addEventListener('click', setTimer);
addEventListener('submit', submitMins);
