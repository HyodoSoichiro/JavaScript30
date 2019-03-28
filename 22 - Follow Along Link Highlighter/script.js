const triggers = document.querySelectorAll('a');
const highlighter = document.createElement('span');
highlighter.classList.add('highlight');
document.body.appendChild(highlighter);

function highlight() {
  const linkCord = this.getBoundingClientRect();
  const cord = {
    w: linkCord.width,
    h: linkCord.height,
    x: linkCord.left + window.scrollX,
    y: linkCord.top + window.scrollY,
  };

  highlighter.style.width = `${cord.w}px`;
  highlighter.style.height = `${cord.h}px`;
  highlighter.style.transform = `translate(${cord.x}px, ${cord.y}px)`;
}

triggers.forEach(trig => trig.addEventListener('mouseenter', highlight));

// const triggers = document.querySelectorAll('a');
// const highlight = document.createElement('span');
// highlight.classList.add('highlight');
// document.body.append(highlight);

// function transHighlight() {
//   const linkCords = this.getBoundingClientRect();
//   const cords = {
//     x: linkCords.left + window.scrollX,
//     y: linkCords.top + window.scrollY,
//     width: linkCords.width,
//     height: linkCords.height,
//   };

//   highlight.style.width = `${cords.width}px`;
//   highlight.style.height = `${cords.height}px`;
//   highlight.style.transform = `translate(${cords.x}px, ${cords.y}px)`;

//   //   
//   //   
// }

// triggers.forEach(trig => trig.addEventListener('mouseenter', transHighlight));

// // // 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
// // const triggers = document.querySelectorAll('a');
// // const highlight = document.createElement('spna');
// // highlight.classList.add('highlight');
// // document.body.append(highlight);

// // function highlightLink() {
// //   const linkCords = this.getBoundingClientRect();
// // 
// // const coords = {
// //   width: linkCords.width,
// //   height: linkCords.height,
// //   top: linkCords.top + window.scrollY,
// //   left: linkCords.left + window.scrollX
// // };
// //   // const wScrollY = window.scrollY;
// //   highlight.style.width = `${coords.width}px`;
// //   highlight.style.height = `${coords.height}px`;
// //   highlight.style.transform = `translate( ${coords.left}px , ${coords.top}px)`;
// // }

// // triggers.forEach( a => a.addEventListener('mouseenter', highlightLink));
