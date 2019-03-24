window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const regognition = new SpeechRecognition();
regognition.interimResults = true;

const words = document.querySelector('.words');
let p = document.createElement('p');
words.appendChild(p);

function transcriptSync(e) {
    const transcript = [...e.results, ]
                        .map(res => res[0])
                        .map(res => res.transcript)
                        .join('');

    p.textContent = transcript;

    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
}


regognition.addEventListener('result', transcriptSync);
regognition.addEventListener('end', regognition.start);
regognition.start();

// console.log(regognition);

// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const regognition = new SpeechRecognition();
// regognition.interimResults = true;

// let p = document.createElement('p');
// const words = document.querySelector('.words');
// words.appendChild(p);

// regognition.addEventListener('result', (e) => {
//     // console.log(e.results);
//     const transcript = Array.from(e.results)
//     .map(result => result[0])
//     .map(result => result.transcript)
//     .join('');
//     p.textContent = transcript;

//     if (e.results[0].isFinal) {
//         p = document.createElement('p');
//         words.appendChild(p);
//     }

//     if (transcript.includes('うさぎ')) {
//         console.log('🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰🐰');
//     }
//     if (transcript.includes('キリン')) {
//         console.log('🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒');
//     }
// });

// regognition.addEventListener('end', regognition.start);
// regognition.start();

