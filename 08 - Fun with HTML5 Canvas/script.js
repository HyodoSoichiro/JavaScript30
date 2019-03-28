const canvas = document.querySelector('#draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.dir(canvas);

const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
ctx.globalCompositeOperation = 'source-out';

let flgDrawing = false;
let hue = 0;
let flgWidthIncrem = true;
let [lastX, lastY, ] = [0, 0, ];

function draw(e) {
	if (!flgDrawing) return;
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	[lastX, lastY, ] = [e.offsetX, e.offsetY, ];

	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	hue++;

	if (ctx.lineWidth <= 1 || ctx.lineWidth > 200) {
		flgWidthIncrem = !flgWidthIncrem;
	}
	if (flgWidthIncrem) {
		ctx.lineWidth++;
	} else {
		ctx.lineWidth--;
	}
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
	flgDrawing = true;
	[lastX, lastY, ] = [e.offsetX, e.offsetY, ];
});
canvas.addEventListener('mouseup', () => flgDrawing = false);
canvas.addEventListener('mouseout', () => flgDrawing = false);


































// const canvas = document.getElementById('draw');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const ctx = canvas.getContext('2d');
// ctx.strokeStyle = '#bada55';
// ctx.lineJoin = 'round';
// ctx.lineCap = 'round';
// ctx.lineWidth = 100;

// let isDrawing = false;
// let incrementWidth = true;
// let lastX = 0;
// let lastY = 0;
// let hue = 0;

// function draw(e) {
// 	if (!isDrawing) return;
// 	ctx.beginPath();
// 	// start from
// 	ctx.moveTo(lastX, lastY);
// 	// go to
// 	ctx.lineTo(e.offsetX, e.offsetY);
// 	ctx.stroke();

// 	[lastX, lastY, ] = [e.offsetX, e.offsetY, ];

// 	// hue
// 	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
// 	hue++;

// 	// width
// 	if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
// 		incrementWidth = !incrementWidth;
// 	}
// 	if (incrementWidth) {
// 		ctx.lineWidth++;
// 		
// 	} else {
// 		ctx.lineWidth--;
// 		
// 	}
// }

// canvas.addEventListener('mousemove', draw);
// canvas.addEventListener('mousedown', (e) => {
// 	isDrawing = true;
// 	[lastX, lastY, ] = [e.offsetX, e.offsetY, ];
// });
// canvas.addEventListener('mouseup', () => isDrawing = false);
// canvas.addEventListener('mouseout', () => isDrawing = false);
