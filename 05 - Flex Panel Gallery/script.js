// const panels = document.querySelectorAll('.panel');

// function opneHandler() {
//     let [ firstStat, secondStat, ] = ['open', 'open-active', ];
//     // let stateflag = this.classList.contains('open');
//     // if (stateflag) [ firstStat, secondStat, ] = [ 'open-active', 'open', ];

//     this.classList.toggle(firstStat);
//     setTimeout(() => {
//         this.classList.toggle(secondStat);
//     }, 700);
// }
// panels.forEach(panel => panel.addEventListener('click', opneHandler));

const panels = document.querySelectorAll('.panel');

function toggleOpen() {
        this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('mouseenter', toggleOpen));
panels.forEach(panel => panel.addEventListener('mouseleave', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

