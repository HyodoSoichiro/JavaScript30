
const nav = document.querySelector('.top');
const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const arrow = document.querySelector('.arrow');
// 

function insertBack() {
  background.classList.add('open');

  
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
  const dropDown = this.querySelector('.dropdown');
  const dropDownCord = dropDown.getBoundingClientRect();

  const cords = {
    x: dropDownCord.left - nav.offsetLeft,
    y: dropDownCord.top - nav.offsetTop,
    w: dropDownCord.width,
    h: dropDownCord.height,
  };

  background.style.width = `${cords.w}px`;
  background.style.height = `${cords.h}px`;
  background.style.transform = `translate(${cords.x}px, ${cords.y}px)`;
}

function removeClass() {
  background.classList.remove('open');
  this.classList.remove('trigger-enter', 'trigger-enter-active');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', insertBack));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', removeClass));

// const triggers = document.querySelectorAll('.cool > li');
// const background = document.querySelector('.dropdownBackground');
// const nav = document.querySelector('.top');

// function handleEnter() {
//     this.classList.add('trigger-enter');
//     setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'),
//     150);
//     background.classList.add('open');
//     const dropDown = this.querySelector('.dropdown');
//     const dropDownCords = dropDown.getBoundingClientRect();
//     const navCords = nav.getBoundingClientRect();
//   const cords = {
//       width: dropDownCords.width,
//     height: dropDownCords.height,
//     top: dropDownCords.top - navCords.top,
//     left: dropDownCords.left - navCords.left,
// };
//   background.style.setProperty('width', `${cords.width}px`);
//   background.style.setProperty('height', `${cords.height}px`);
//   background.style.setProperty('transform', `translate(${cords.left}px, ${cords.top}px)`);

//   
// }

// function handleLeave() {
//     this.classList.remove('trigger-enter', 'trigger-enter-active');
//     this.classList.remove('trigger-enter', 'trigger-enter-active');
//     background.classList.remove('open');
//     //   
// }

// triggers.forEach(trig => trig.addEventListener('mouseenter', handleEnter));
// triggers.forEach(trig => trig.addEventListener('mouseleave', handleLeave));

// // 
