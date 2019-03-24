const places = [];
const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

fetch(endpoint)
  .then(data => data.json())
  .then(data => places.push(...data));

function searchFunc(data, places) {
  //   console.log(data);
  return places.filter(blod => {
    const regex = new RegExp(data, 'gi');
    return blod.city.match(regex) || blod.state.match(regex);
  });
}

function addListHandler() {
  const cities = searchFunc(this.value, places);
  const html = cities.map(blod => `<li>${blod.city} ${blod.state} ${blod.population}</li>`).join('');
  suggestions.innerHTML = html;
}

search.addEventListener('change', addListHandler);
search.addEventListener('keyup', addListHandler);

// const places = [];
// fetch(endpoint)
//     .then(place => place.json())
//     .then(data => places.push(...data));

// function getCityAndState(wordToMatch, places) {
//     return places.filter((place) => {
//         const regex = new RegExp(wordToMatch, 'gi');
//         return place.city.match(regex) || place.state.match(regex);
//     });
// }

// function displayFunc() {
//     const serchRest = getCityAndState(this.value, places);
//     const html = serchRest.map(place => `
//             <li>
//                 <span class='name'>${place.city}, ${place.state}</span>
//                 <span>${place.population}</span>
//             </li>`).join('');
//     suggestions.innerHTML = html;
// }

// search.addEventListener('change', displayFunc);
// search.addEventListener('keyup', displayFunc);

// const cities = [];

// fetch(endpoint)
//   .then(blob => blob.json())
//   .then(data => cities.push(...data));

// function findMatches(wordToMatch, cities) {
//   return cities.filter((place) => {
//     // to figure out if the city or state matches what was searched.
//     const regex = new RegExp(wordToMatch, 'gi');
//     return place.city.match(regex) || place.state.match(regex);
//   });
// }

// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }

// function displayMatches() {
//   const matchArray = findMatches(this.value, cities);
//   const html = matchArray.map((place) => {
//     const regex = new RegExp(this.value, 'gi');
//     const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
//     const stateName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
//     return `
//       <li>
//         <span class="name">${cityName}, ${stateName}</span>
//         <span class="population">${numberWithCommas(place.population)}</span>
//       </li>
//     `;
//   }).join('');

//   suggestions.innerHTML = html;
// }

// const searchInput = document.querySelector('.search');
// const suggestions = document.querySelector('.suggestions');

// searchInput.addEventListener('change', displayMatches);
// searchInput.addEventListener('keyup', displayMatches);
