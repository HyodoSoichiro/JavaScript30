const msg = new SpeechSynthesisUtterance();
const synth = window.speechSynthesis;
const listVoices = document.querySelector('#voices');
const voices = [];
const voiceText = document.querySelector('[name="text"]');
const ranges = document.querySelectorAll('[type="range"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');


function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  msg.text = voiceText.textContent;
  toggleSpeak();
}

function populateVoices() {
  voices.push(...this.getVoices());
  const listOptions = voices.filter(voice => voice.lang.includes('en'))
                      .map(voice => `
                        <option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
                      .join('');
  listVoices.innerHTML = listOptions;
}

function toggleSpeak(startOver = true) {
  synth.cancel();
  if (startOver) synth.speak(msg);
}

function rangeSet() {
  msg[this.name] = this.value;
  toggleSpeak();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
listVoices.addEventListener('change', setVoice);
ranges.forEach(range => range.addEventListener('change', rangeSet));
speakButton.addEventListener('click', toggleSpeak);
stopButton.addEventListener('click', () => toggleSpeak(false));

// voiceText.addEventListener('change', )

// const msg = new SpeechSynthesisUtterance();
// let voices = [];
// const voicesDropdown = document.querySelector('[name="voice"]');
// const options = document.querySelectorAll('[type="range"], [name="text"]');
// const speakButton = document.querySelector('#speak');
// const stopButton = document.querySelector('#stop');
// msg.text = document.querySelector('[name="text"]').value;

// function populateVoices() {
//   voices = this.getVoices();
//   voicesDropdown.innerHTML = voices
//     .filter(voice => voice.lang.includes('en'))
//     .map(voice => `<option value="${voice.name}">${voice.name}(${voice.lang})</option>`)
//     .join('');

//   // console.log(voiceOptions);
// }

// function toggle(startOver = true) {
//   speechSynthesis.cancel();
//   if (startOver) speechSynthesis.speak(msg);
// }

// function setVoice() {
//   msg.voice = voices.find(voice => voice.name === this.value);
//   toggle();
// }

// function setOption() {
//   msg[this.name] = this.value;
//   // console.log(msg);
//   toggle();
//   // speechSynthesis.speak(msg);
// }

// speechSynthesis.addEventListener('voiceschanged', populateVoices);
// voicesDropdown.addEventListener('change', setVoice);
// speakButton.addEventListener('click', toggle);
// stopButton.addEventListener('click', () => toggle(false));

// options.forEach(option => option.addEventListener('change', setOption));

// //   function populateVoices() {
// //     voices = this.getVoices();
// //     // console.log(voices);
// //     voicesDropdown.innerHTML = voices
// //                   .filter(voice => voice.lang.includes('en'))
// //                   .map(voice => `<<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
// //                   .join('');
// //   }

// //   function setVoice() {
// //     msg.voice = voices.find(voice => voice.name === this.value);
// //     toggle();
// //   }

// //   function toggle(startOver = true) {
// //     speechSynthesis.cancel();
// //     if (startOver) {
// //       speechSynthesis.speak(msg);
// //     }
// //   }

// //   function setOption() {
// //     console.log(this.name, this.value);
// //     msg[this.name] = this.value;
// //     toggle();
// //   }

// //   msg.text = document.querySelector('[name="text"]').value;
// //   speechSynthesis.addEventListener('voiceschanged', populateVoices);
// //   voicesDropdown.addEventListener('change', setVoice);
// //   options.forEach(option => option.addEventListener('change', setOption));
// //   speakButton.addEventListener('click', toggle);
// //   stopButton.addEventListener('click', () => toggle(false));
