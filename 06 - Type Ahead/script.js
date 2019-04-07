const holder = [];
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const searchForm = document.querySelector('.search-form');
const suggestions = document.querySelector('.suggestions');

fetch(endpoint)
  .then(data => data.json())
  .then(data => holder.push(...data));

function displayHandler() {
  const selectList = searchHandler(this.value);
  const listDoms = selectList.map(blob => `
                    <li>${blob.city}／${blob.state} <small>${blob.population}</small></li>`)
                    .join('');
  suggestions.innerHTML = listDoms;
}

function searchHandler(wordMatch) {
  return holder.filter((place) => {
    const regex = new RegExp(wordMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

searchForm.querySelector('.search').addEventListener('input', displayHandler);

// // [match] // //
// let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// let regexp = new RegExp('[A-E]', 'gi');
// let matches_array = str.match(regexp);

// console.log(matches_array);

