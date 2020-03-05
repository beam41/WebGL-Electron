const THREE = require("three");
const glcanvas = document.getElementById("glcanvas");

let camera, scene, renderer;
let geometry, material, mesh;

init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.z = 1;

  scene = new THREE.Scene();

  geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  material = new THREE.MeshNormalMaterial();

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(800, 600);
  glcanvas.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

function setRotationX(x) {
  mesh.rotation.x = x;
}

function setRotationY(y) {
  mesh.rotation.y = y;
}

let xSlider = document.getElementById("xSlider");
let ySlider = document.getElementById("ySlider");

xSlider.oninput = function() {
  setRotationX(this.value);
};

ySlider.oninput = function() {
  setRotationY(this.value);
};
