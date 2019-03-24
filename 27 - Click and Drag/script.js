const items = document.querySelector('.items');
let dragflag = false;
let startX;
let startScrollX;
const bias = 4;

function findStart(e) {
  dragflag = true;
  startX = e.pageX;
  startScrollX = this.scrollLeft;
  items.classList.add('active');
}

function dragItems(e) {
  if (!dragflag) return;
  this.scrollLeft = startScrollX + (startX - e.pageX) * bias;
  // items.scrollLeft = `${distance}px`; ← JSではpxで値を与える必要はない！！styleに与えるときのみ！
}
items.addEventListener('mousemove', dragItems);
items.addEventListener('mousedown', findStart);
items.addEventListener('mouseup', () => {
  dragflag = false;
  items.classList.remove('active');
});
items.addEventListener('mouseleave', () => {
  dragflag = false;
  items.classList.remove('active');
});

// const slider = document.querySelector('.items');
// let isDown = false;
// let startX;
// let scrollLft;

// slider.addEventListener('mousedown', (e) => {
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.pageX - slider.offsetLeft;
//     scrollLft = slider.scrollLeft;
//     console.log(scrollLft);
// });

// slider.addEventListener('mouseleave', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// slider.addEventListener('mouseup', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// slider.addEventListener('mousemove', (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     let x = e.pageX - slider.offsetLeft;
//     const walk = (x - startX) * 3.5;
//     slider.scrollLeft = scrollLft - walk;
//     // scrollLeft = e.pageX - startX;
//     // console.log();
// });

// /*
// items上でmousemoveのとき、mousedownされているかフラッグを使って検知
// items上でmousedownしたときに、itemsにクラスactiveを追加、その他のときは外す
// items上でmousedownしたときの位置を取得
// items上でmousedownしたときのscrollLeftを取得
// items上でmousemoveしているときのマウスのｘ位置を取得
// items上でmousemoveしているときのitemsにスクロール量を設定
// */
