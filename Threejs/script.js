// Create a new Three.js scene
let scene = new THREE.Scene();

// Set up the camera
let camera = new THREE.PerspectiveCamera(
  75, // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping plane
  100 // Far clipping plane
);

camera.position.z = 5; // Move camera back to see the cube

// Create a cube geometry
let box = new THREE.BoxGeometry(1, 1, 1);

// Create a material for the cube
let material = new THREE.MeshBasicMaterial({ color: 0xff00ff });

// Create a mesh by combining the geometry and material
let mesh = new THREE.Mesh(box, material);

// Add the mesh to the scene
scene.add(mesh);

// Get the canvas element from the HTML
const canvas = document.querySelector("#draw");

// Create a WebGL renderer and set its size
const renderer = new THREE.WebGLRenderer({ canvas,antialias:true   });
renderer.setSize(window.innerWidth, window.innerHeight);

// Render the scene
renderer.render(scene, camera);


mesh.position.z = 2;

let clock = new THREE.Clock();

// Animation function
function animate() {
  // Request the next animation frame
  window.requestAnimationFrame(animate);

  // Render the scene
  renderer.render(scene, camera);

  // Rotate the cube on the x-axis
  mesh.rotation.y = clock.getElapsedTime();
}

// Start the animation loop
animate();
