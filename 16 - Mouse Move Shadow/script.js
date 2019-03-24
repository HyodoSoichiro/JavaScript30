const hero = document.querySelector('.hero');
const h1 = hero.querySelector('h1');
const walk = 50;
// console.log(w, h);

function funkyShadow(e) {
  const { offsetWidth: w, offsetHeight: h, } = hero;
  let { offsetX: x, offsetY: y, } = e;
  if (e.target !== this) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const walkX = Math.round((x / w) * walk - walk / 2);
  const walkY = Math.round((y / w) * walk - walk / 2);
  const blurWalk = walkX > walkY ? Math.abs(walkX) : Math.abs(walkY);

  h1.style.textShadow = `
        ${walkX}px ${walkY * -1}px ${blurWalk}px rgb(255, 255, 0),
        ${walkX * -1}px ${walkY}px ${blurWalk}px rgb(255, 0, 255)`;

  console.log(blurWalk);
}

hero.addEventListener('mousemove', funkyShadow);

// const hero = document.querySelector('.hero');
// const text = hero.querySelector('h1');
// const walk = 250;

// function shadowEffect(e) {
//     const { offsetWidth: w, offsetHeight: h, } = hero;
//     let { offsetX: x, offsetY: y, } = e;

//     if (this !== e.target) {
//         x += e.target.offsetLeft;
//         y += e.target.offsetTop;
//     }

//     const difX = Math.round(x / w * walk - walk / 2);
//     const difY = Math.round(y / h * walk - walk / 2);
//     // const difY =
//     text.style.textShadow = `
//         ${difX}px ${difY}px rgb(255, 0, 0),
//         ${difX * -1}px ${difY}px rgb(0, 255, 0)
//     `;
// }

// hero.addEventListener('mousemove', shadowEffect);

// // console.dir(hero);

// //   const hero = document.querySelector('.hero');
// //   const text = document.querySelector('h1');
// //   const walk = 300;

// //   function shadow(e) {
// //     const { width = hero.offsetWidth, height = hero.offsetHeight, } = hero;
// //     let { offsetX: x, offsetY: y, } = e;

// //     if (this !== e.target) {
// //       x += e.target.offsetLeft;
// //       y += e.target.offsetTop;
// //     }

// //     const xWalk = Math.round((x / width * walk) - (walk / 2));
// //     const yWalk = Math.round((y / height * walk) - (walk / 2));

// //     const a = Math.abs(xWalk);
// //     const b = Math.abs(yWalk);
// //     const blurWalk = (a > b ? a : b) / 2;

// text.style.textShadow = `${xWalk}px ${yWalk}px ${blurWalk}px rgba(255,0,255,0.7),
//                               ${xWalk * -1}px ${yWalk}px ${blurWalk}px rgba(0,255,255,0.7),
//                               ${yWalk}px ${xWalk * -1}px ${blurWalk}px rgba(0,255,0,0.7),
//                               ${yWalk * -1}px ${xWalk}px ${blurWalk}px rgba(0,0,255,0.7)`;

// //     console.dir(blurWalk);
// //     // console.log(xWalk, yWalk);
// //   }

// //   hero.addEventListener('mousemove', shadow);
