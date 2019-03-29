const keys = document.querySelectorAll('.key');

function playSound(e) {
    document.querySelector(`div[data-key="${e.keyCode}"]`).classList.add('playing');
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

document.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));



// // const a = document.querySelector('audio[data-key="a"]');
// //
// // a.play();
// function soundPlay() {
//     this.classList.add('playing');
//     const sound = this.dataset.key;
//     const soundAudio = document.querySelector(`audio[data-key="${sound}"]`);
//     soundAudio.currentTime = 0;
//     soundAudio.play();
// }

// function keySoundPlay(e) {
//     const soundAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const btnKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//     if (!soundAudio) return;
//     btnKey.classList.add('playing');
//     soundAudio.currentTime = 0;
//     soundAudio.play();
// }

// function removeClass(e) {
//     if (e.propertyName !== 'transform') return;
//     this.classList.remove('playing');
// }
// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('click', soundPlay));
// keys.forEach(key => key.addEventListener('transitionend', removeClass));
// window.addEventListener('keydown', keySoundPlay);
// // window.document.onkeydown = function (e) {
// //     const key = e.which;
// //     keySoundPlay(key);
// // };

