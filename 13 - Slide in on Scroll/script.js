const sliders = document.querySelectorAll('.slide-in');

function activeSlide() {
  sliders.forEach((slide) => {
    let cascadeOverHalf = slide.offsetTop + slide.height / 2 < window.scrollY + window.innerHeight;
    let cascadeBeforeBottom = window.scrollY < slide.offsetTop + slide.height;
    if (cascadeOverHalf && cascadeBeforeBottom) slide.classList.add('active');
    else slide.classList.remove('active');
  });
}

window.addEventListener('scroll', activeSlide);


// function debounce(func, wait = 20, immediate = true) {
//   let timeout;
//   return function () {
//     const context = this;
//     const args = arguments;
//     const later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     const callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }
