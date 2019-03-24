const nav = document.querySelector('nav#main');
const siteWrap = document.querySelector('.site-wrap');
const navY = nav.offsetTop;

console.dir(navY);

function fixNav() {
  if (window.scrollY > navY) {
    document.body.classList.add('fix-nav');
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
  } else {
    document.body.classList.remove('fix-nav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);


// const nav = document.querySelector('nav');
// const navOfTop = nav.offsetTop;

// function fixNav() {
//   if (window.scrollY >= navOfTop) {
//     document.body.classList.add('fix-nav');
//     document.body.style.paddingTop = `${nav.offsetHeight}px`;
//   } else {
//     document.body.classList.remove('fix-nav');
//     document.body.style.paddingTop = 0;
//   }
// }

// window.addEventListener('scroll', fixNav);
