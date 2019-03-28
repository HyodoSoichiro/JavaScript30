const timerButtons = document.querySelectorAll('.timer__button');
const leftTime = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
let countDown;

function setTimer(time) {
  clearInterval(countDown);
  displayTimeLeft(time);
  displayEndTime(time);

  countDown = setInterval(() => {
    if (time <= 1) clearInterval(countDown);
    time -= 1;
    displayTimeLeft(time);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  leftTime.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function displayEndTime(sec) {
  const now = new Date();
  const hourNow = now.getHours();
  const minNow = now.getMinutes();

  const hourEndTime = hourNow + Math.floor(((sec % 60) + minNow) / 60);
  const minEndTime = ((sec % 60) + minNow) % 60;
  endTime.textContent = `${String(hourEndTime > 12 ? hourEndTime - 12 : hourEndTime).padStart(2, '0')}:${String(
    minEndTime
  ).padStart(2, '0')}`;
}

function startTimer() {
  const setTime = parseFloat(this.dataset.time);
  setTimer(setTime);
}

timerButtons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const submitMin = parseFloat(this.minutes.value);
  displayEndTime(submitMin);
  setTimer(submitMin * 60);
  this.reset();
});
