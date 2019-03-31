const panels = document.querySelectorAll('.panel');

function panelToggle() {
  this.classList.toggle('open');
}

function panelSubtitleToggle(e) {
  let flag = this.classList.contains('open');
  if (e.propertyName.includes('flex') && flag) this.classList.add('open-active');
  else this.classList.remove('open-active');
}

panels.forEach(panel => panel.addEventListener('mouseenter', panelToggle));
panels.forEach(panel => panel.addEventListener('mouseleave', panelToggle));
panels.forEach(panel => panel.addEventListener('transitionend', panelSubtitleToggle));
