let width = window.innerWidth;
let height = window.innerHeight;
let side = Math.min(width, height) / 30;
let scene;
let camera;
let renderer;
let mesh;
let controls;

// function init() {
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(30, width / height, 1, 1000);
renderer = createRenderer(width, height);
window.addEventListener('resize', () => {
	let width = window.innerWidth;
	let height = window.innerHeight;
	renderer.setSize(width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
});

mesh = createMesh(side);
camera.position.set(1, 20, 20);

// scene.add(mesh);
let loader = new THREE.GLTFLoader();
loader.load('glTF/slipper_test_glTF.gltf', (gltf) => {
	scene.add(gltf.scene);
}, undefined, (error) => {
	console.error(error);
});

let ambientLight = new THREE.AmbientLight(0xFFFFFF, 2.5);
scene.add(ambientLight);

controls = new THREE.OrbitControls(camera);
controls.autoRotate = true;
update();
// }

function createRenderer(width, height) {
	let renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	document.body.appendChild(renderer.domElement);
	return renderer;
}

function createMesh(radius) {
	let geometry = new THREE.IcosahedronGeometry(radius);
	let material = new THREE.MeshNormalMaterial();
	let mesh = new THREE.Mesh(geometry, material);
	return mesh;
}

function update() {
	// mesh.rotation.x += 0.01;
	// mesh.rotation.y += 0.01;
	controls.update();
	requestAnimationFrame(update);
	renderer.render(scene, camera);
}

// window.addEventListener('DOMContentLoaded', init);

