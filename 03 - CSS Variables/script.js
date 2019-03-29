const root = document.documentElement;
const controls = document.querySelectorAll('.controls input');

function adjustCss() {
  let suffix = this.dataset.sizing ? this.dataset.sizing : '';
  root.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

controls.forEach(range => range.addEventListener('change', adjustCss));

