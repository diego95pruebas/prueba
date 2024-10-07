
// Initialization of the 3D scene for the plant effects using Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, 200);
document.getElementById('plant3d-container').appendChild(renderer.domElement);

const plantGeometry = new THREE.BoxGeometry();
const plantMaterial = new THREE.MeshBasicMaterial({ color: 0x007f7f });
const plantMesh = new THREE.Mesh(plantGeometry, plantMaterial);

scene.add(plantMesh);
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    plantMesh.rotation.x += 0.01;
    plantMesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
