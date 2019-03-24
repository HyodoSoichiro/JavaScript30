const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp;

function randomTIme(max, min) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  if (lastHole === hole) {
    // console.log('Ahhhh!');
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;

  peep(hole);
}

function peep() {
  const time = randomTIme(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');

  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);

  console.log(time, hole);
}
