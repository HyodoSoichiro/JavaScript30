const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

function split(word) {
  const regex = new RegExp(/^a |^the |^an |/i);
  return word.replace(regex, '');
}

bands.sort((a, b) => (split(a) > split(b) ? 1 : -1));
console.log(bands);





// bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

// function strip(words) {
//   const regex = new RegExp(/^a |^an |^the /i);
//   return words.replace(regex, '').trim();
// }

// console.log(bands);

// function strip(bandName) {
//   return bandName.replace(/^(a |the |an )/i, '').trim();
// }
// const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

// document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
// console.log(sortedBands);
