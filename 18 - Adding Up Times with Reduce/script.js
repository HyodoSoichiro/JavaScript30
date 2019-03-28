const times = [...document.querySelectorAll('.videos li[data-time]'), ];

const totalSeconds = times.map(time => time.dataset.time)
                          .map((time) => {
                            const [mins, secs, ] = time.split(':').map(parseFloat);
                            return mins * 60 + secs;
                          })
                          .reduce((total, sec) => total += sec);


const hours = Math.floor(totalSeconds / 3600);
const leftSeconds = totalSeconds % 3600;
const mins = Math.floor((leftSeconds) / 60);
const secs = Math.floor((leftSeconds) % 60);



// const times = [...document.querySelectorAll('li[data-time]')];
// const allSecs = times
//   .map(time => time.dataset.time)
//   .map(time => {
//     const [min, sec] = time.split(':').map(parseFloat);
//     return min * 60 + sec;
//   })
//   .reduce((total, sec) => total + sec);

// const secondLeft = allSecs % 3600;
// const hours = Math.floor(allSecs / 3600);
// const mins = Math.floor(secondLeft / 60);
// const secs = secondLeft % 60;

// 

// // const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
// // const seconds = timeNodes.map(node => node.dataset.time)
// //                 .map((timeCode) => {
// //                   const [mins, secs,] = timeCode.split(':').map(parseFloat);
// //                   return (mins * 60) + secs;
// //                 })
// //                 .reduce((total, eachSecs) => total + eachSecs);

// // let secondsLeft = seconds;
// // const hours = Math.floor(secondsLeft / 3600);
// // secondsLeft %= 3600;
// // const mimutes = Math.floor(secondsLeft / 60);
// // const sec = secondsLeft % 60;

// // 
