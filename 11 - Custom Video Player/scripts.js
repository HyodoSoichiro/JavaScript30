const video = document.querySelector('.player__video');
const toggleBtn = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const progressFill = document.querySelector('.progress__filled');
const skipButtons = document.querySelectorAll('.player__button');
const sliders = document.querySelectorAll('.player__slider');
let flagPrgBar = false;


function progressHandler() {
	let percentage = this.currentTime / this.duration * 100;
	progressFill.style.flexBasis = `${percentage}%`;
}

function changeProgressBar(e) {
	let progressChange = e.offsetX / progress.offsetWidth;
	progressFill.style.flexBasis = `${progressChange * 100}%`;
	video.currentTime = video.duration * progressChange;
}

function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}

function toggleIcon() {
	const icon = video.paused ? '►' : '❙❙';
	toggleBtn.textContent = icon;
}


function skip() {
	let skipAmount;
	skipAmount = this.dataset.skip;
	video.currentTime += parseFloat(skipAmount);
}

function scrubRange() {
	video[this.name] = this.value;
}

function scrubProgress(e) {
	if (flagPrgBar) changeProgressBar(e);
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', toggleIcon);
video.addEventListener('pause', toggleIcon);
video.addEventListener('timeupdate', progressHandler);
toggleBtn.addEventListener('click', togglePlay);
sliders.forEach(slide => slide.addEventListener('mousemove', scrubRange));
sliders.forEach(slide => slide.addEventListener('change', scrubRange));

progress.addEventListener('click', changeProgressBar);
progress.addEventListener('mousedown', () => flagPrgBar = true);
progress.addEventListener('mouseup', () => flagPrgBar = false);
progress.addEventListener('mousemove', scrubProgress);


