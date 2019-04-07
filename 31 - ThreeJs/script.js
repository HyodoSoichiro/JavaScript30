let width = window.innerWidth;
let height = window.innerHeight;
let side = Math.min(width, height) / 30;
let scene;
let camera;
let renderer;
let mesh;
let controls;
function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(30, width / height, 1, 1000);
	renderer = createRenderer(width, height);
	renderer.gammaOutput = true; // !important! Making contrast normal.
	let loader = new THREE.GLTFLoader();
	    loader.load('glTF/slipper.gltf', (gltf) => {
	        scene.add(gltf.scene);
	    }, undefined, (error) => {
	        console.error(error);
    });

	let ambientLight = new THREE.AmbientLight(0xFFFFFF, 3);
	scene.add(ambientLight);

	camera.position.set(1, 20, 20);
	controls = new THREE.OrbitControls(camera);
	controls.autoRotate = true;
	controls.autoRotateSpeed = 0.6;
	update();

	window.addEventListener('resize', () => {
		let width = window.innerWidth;
		let height = window.innerHeight;
		renderer.setSize(width, height);
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
	});
}
function createRenderer(width, height) {
	let renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	document.body.appendChild(renderer.domElement);
	return renderer;
}

function update() {
	controls.update();
	requestAnimationFrame(update);
	renderer.render(scene, camera);
}
window.addEventListener('DOMContentLoaded', init);
