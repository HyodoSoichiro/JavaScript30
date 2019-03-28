// // 
// const inputs = document.querySelectorAll('.controls input');

// function handleUpdate() {
//   // const Root = document.documentelement;
//   const suffix = this.dataset.sizing || '';
//   // 
//   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
// }

// inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const inputs = document.querySelectorAll('.controls input');

function changeHandler() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('mousemove', changeHandler));
inputs.forEach(input => input.addEventListener('change', changeHandler));
