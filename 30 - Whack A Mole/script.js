const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let playTime = 5000;
let flagPlaying = true;
let score = 0;
let lastHole;

function randamTime(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randamHole(holes) {
  const idx = Math.floor(Math.random() * moles.length);
  const hole = holes[idx];
  if (hole === lastHole) randamHole(holes);
  lastHole = hole;
  return hole;
}

function popUp() {
  const selectHole = randamHole(holes);
  const popUpTime = randamTime(2000, 20); // 20~2000ms
  selectHole.classList.add('up');

  setTimeout(() => {
    selectHole.classList.remove('up');
    if (flagPlaying) popUp();
  }, popUpTime);
}

function startGame() {
  // console.log(playTime);
  scoreBoard.textContent = 0;
  score = 0;
  flagPlaying = true;
  popUp();
  setTimeout(() => flagPlaying = false, playTime);
}

function scoreIncrement(e) {
  if (!e.isTrusted) return;
  score++;
  scoreBoard.textContent = score;
  this.parentNode.classList.remove('up');
}

moles.forEach(mole => mole.addEventListener('click', scoreIncrement));

// function randomTIme(max, min) {
//   return Math.round(Math.random() * (max - min) + min);
// }

// function randomHole(holes) {
//   const idx = Math.floor(Math.random() * holes.length);
//   const hole = holes[idx];

//   if (lastHole === hole) {
//     //
//     return randomHole(holes);
//   }

//   lastHole = hole;
//   return hole;

//   peep(hole);
// }

// function peep() {
//   const time = randomTIme(200, 1000);
//   const hole = randomHole(holes);
//   hole.classList.add('up');

//   setTimeout(() => {
//     hole.classList.remove('up');
//     if (!timeUp) peep();
//   }, time);

//
// }
