const dmDisplayTimeLeft = document.querySelector('.display__time-left');
const dmDisplayEnd = document.querySelector('.display__end-time');
const btns = document.querySelectorAll('.timer__button');
let countdown;

function displayTimeLeft(sec) {
  const minutes = Math.floor(sec / 60);
  const remainSec = sec % 60;
  const display = `${minutes}:${remainSec < 10 ? '0' : ''}${remainSec}`;
  dmDisplayTimeLeft.textContent = display;
  document.title = display;
}

function displayEndTime(timestamp) {
  // 
  const end = new Date(timestamp);
  const hour = end.getHours() > 12 ? end.getHours() - 12 : end.getHours();
  const minutes = end.getMinutes();
  // const secs = end.getSeconds();
  dmDisplayEnd.textContent = `Be back at ${hour}:${
    minutes < 10 ? '0' : ''
  }${minutes}`;
}

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  // 

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function startTimer() {
  const timerAmnt = parseInt(this.dataset.time);
  timer(timerAmnt);
}

btns.forEach(btn => btn.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  this.reset();
  timer(mins * 60);
  
});
