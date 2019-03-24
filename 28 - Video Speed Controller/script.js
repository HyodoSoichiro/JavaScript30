const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');
const indicatorHeight = speed.offsetHeight;

function playbackrateControl(e) {
  let rate = (e.pageY - this.offsetTop) / indicatorHeight;
  const min = 0.4;
  const max = 4;
  let playbackrate = (max - min) * rate + min;

  bar.textContent = `${playbackrate.toFixed(2)}x`;
  bar.style.height = `${rate * 100}%`;
  video.playbackRate = playbackrate;
}

speed.addEventListener('mousemove', playbackrateControl);





















// function handControl(e) {
//   const y = e.pageY - this.offsetTop;
//   const percent = y / this.offsetHeight;
//   const min = 0.4;
//   const max = 4;
//   const height = `${Math.round(percent * 100)}%`;
//   bar.style.height = height;
//   const display = (max - min) * percent + min;
//   bar.textContent = `${display.toFixed(1)} x`;
//   video.playbackRate = display;
// }
// speed.addEventListener('mousemove', handControl);
