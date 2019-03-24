let list = JSON.parse(localStorage.getItem('items')) || [];
const plateLists = document.querySelector('.plates');
const inputText = document.querySelector('input[type="text"]');
// const submitText = document.querySelector('input[type="submit"]');
const Form = document.querySelector('.add-items');

function platesListUP(plates = [], targetList) {
    const listHtml = plates.map((item, i) => `<li>
                    <input type="checkbox" name="name" id="index${i}" data-id=${i} ${item.done ? 'checked' : ''}/>
                    <label for="index${i}">${item.text}</label>
                </li>`).join('');

                targetList.innerHTML = listHtml;
}


function addList(e) {
    e.preventDefault();
    const text = inputText.value;
    const item = {
        text,
        done: false,
    };

    list.push(item);
    platesListUP(list, plateLists);
    localStorage.setItem('items', JSON.stringify(list));

    this.reset();
    // console.log(list);
}

function checkItem(e) {
    if (!e.target.matches('input')) return;
    const id = e.target.dataset.id;
    list[id].done = !list[id].done;
    localStorage.setItem('items', JSON.stringify(list));
    platesListUP(list, plateLists);
}

Form.addEventListener('submit', addList);
plateLists.addEventListener('click', checkItem);

platesListUP(list, plateLists);

// const addItems = document.querySelector('.add-items');
// const itemsList = document.querySelector('.plates');
// const items = JSON.parse(localStorage.getItem('items')) || [];

// function addItem(e) {
//   e.preventDefault();
//   const text = this.querySelector('[name="item"]').value;
//   item = {
//     text,
//     done: false,
//   };
//   items.push(item);
//   this.reset();

//   populateList(items, itemsList);
//   localStorage.setItem('items', JSON.stringify(items));
//   //   console.log(items);
// }

// function populateList(plates = [], plateList) {
//   plateList.innerHTML = plates
//     .map(
//       (plate, i) => `
//     <li>
//     <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''} />
//     <label for="item${i}">${plate.text}</label>
//     </li>`
//   )
//     .join('');
// }

// function toggleDone(e) {
//   if (!e.target.matches('input')) return;
//   const index = e.target.dataset.index;
//   items[index].done = !items[index].done;
//   // console.log(items[index].done);
//   localStorage.setItem('items', JSON.stringify(items));
//   populateList(items, itemsList);
// }

// addItems.addEventListener('submit', addItem);
// populateList(items, itemsList);

// // const checkBoxes = document.querySelectorAll('[type="checkbox"]');
// itemsList.addEventListener('click', toggleDone);

// // console.log(checkBoxes);

// //   function addItem(e) {
// //     e.preventDefault();
// //     const text = (this.querySelector('[name=item]')).value;
// //     const item = {
// //       text,
// //       done: false,
// //     };

// //     items.push(item);
// //     populateList(items, itemsList);
// //     localStorage.setItem('items', JSON.stringify(items));
// //     this.reset();

// //     // console.table(items);
// //   }

// //   function populateList(plates = [], platesList) {
// //     platesList.innerHTML = plates.map((plate, i) => `
// //         <li>
// //           <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ""}/>
// //           <label for="item${i}">${plate.text}</label>
// //         </li>
// //       `).join('');
// //   }

// //   function toggleDone(e) {
// //     if (!e.target.matches('input')) return;
// //     const index = e.target.dataset.index;
// //     console.log(!items[index].done);
// //     items[index].done = !items[index].done;
// //     localStorage.setItem('items', JSON.stringify(items));
// //     populateList(items, itemsList);

// //     // console.log(e.target);
// //   }

// //   addItems.addEventListener('submit', addItem);
// //   itemsList.addEventListener('click', toggleDone);
// //   populateList(items, itemsList);
