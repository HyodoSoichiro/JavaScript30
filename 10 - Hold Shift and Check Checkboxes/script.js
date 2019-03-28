const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastBox;


function selectChecxbox(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(box => {
      if (box === this || box === lastBox) inBetween = !inBetween;
      if (inBetween) {
        box.checked = true;
      }
    });
  }
    //
  lastBox = this;
  // 
}

checkboxes.forEach(box => box.addEventListener('click', selectChecxbox));

// const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// let lastChecked;
// function handlecheck(e) {
//   
//   let inBetween = false;

//   if (e.shiftKey && this.checked) {
//     checkboxes.forEach((checkbox) => {
//       

//       if (checkbox === this || checkbox === lastChecked) {
//         inBetween = !inBetween;
//       }

//       if (inBetween) {
//         checkbox.checked = true;
//       }
//     });
//   }

//   lastChecked = this;
// }
// checkboxes.forEach(checkbox => checkbox.addEventListener('click', handlecheck));
