var width = window.innerWidth;
var height = window.innerHeight;
var side = Math.min(width, height) / 30;
var scene;
var camera;
var renderer;
var mesh;
var controls;
function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(30, width / height, 1, 1000);
	renderer = createRenderer(width, height);
	mesh = createMesh(side);
	camera.position.z = 5;
	scene.add(mesh);
	controls = new THREE.OrbitControls(camera);
	controls.autoRotate = true;
	update();
}
function createRenderer(width, height) {
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	document.body.appendChild(renderer.domElement);
	return renderer;
}
function createMesh(radius) {
	var geometry = new THREE.BoxGeometry(1, 1, 1);
	var material = new THREE.MeshNormalMaterial();
	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}
function update() {
	controls.update();
	requestAnimationFrame(update);
	renderer.render(scene, camera);
}
window.addEventListener('DOMContentLoaded', init);