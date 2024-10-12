import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";

let scene, camera, renderer, controls, box, gui;
let ambientLight, directionalLight, pointLight;

function init() {
  // Scene setup
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Renderer setup
  const canvas = document.querySelector("#canvas");
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;

  // Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = true; // Changed to true
  controls.minDistance = 1; // Reduced minimum distance
  controls.maxDistance = 20; // Increased maximum distance
  // Removed maxPolarAngle restriction

  // Lighting
  ambientLight = new THREE.AmbientLight(0xfaafff, 0.5);
  scene.add(ambientLight);

  directionalLight = new THREE.DirectionalLight(0xafffff, 3);
  directionalLight.position.set(2, 2, 2);
  scene.add(directionalLight);

  const directionalLightHelper = new THREE.DirectionalLightHelper(
    directionalLight,
    0.2
  );
  scene.add(directionalLightHelper);

  pointLight = new THREE.PointLight(0xffffff, 1, 10, 2);
  pointLight.position.set(0.3, -1.3, 1);
  scene.add(pointLight);

  const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2);
  scene.add(pointLightHelper);

  let loader = new THREE.TextureLoader();

  let color = loader.load("./text/color.jpg");
  let roughness = loader.load("./text/roughness.jpg");
  let normal = loader.load("./text/normal.png");
  let height = loader.load("./text/height.png");

  // Box
  const geometry = new THREE.BoxGeometry(3, 1.8, 2, 3, 3);
  const material = new THREE.MeshStandardMaterial({
    map: color,
    roughnessMap: roughness,
    normalMap: normal,
  });
  box = new THREE.Mesh(geometry, material);
  box.castShadow = true;
  box.receiveShadow = true;
  scene.add(box);

  // GUI
  gui = new GUI();

  // Material folder
  const materialFolder = gui.addFolder("Material");
  materialFolder.add(material, "wireframe");
  materialFolder.add(material, "roughness", 0, 1, 0.01);
  materialFolder.add(material, "metalness", 0, 1, 0.01);
  materialFolder.addColor(material, "color");

  // Mesh folder
  const meshFolder = gui.addFolder("Mesh");
  meshFolder.add(box.position, "x", -5, 5).name("Position X");
  meshFolder.add(box.position, "y", -5, 5).name("Position Y");
  meshFolder.add(box.position, "z", -5, 5).name("Position Z");
  meshFolder.add(box.scale, "x", 0.1, 2).name("Scale X");
  meshFolder.add(box.scale, "y", 0.1, 2).name("Scale Y");
  meshFolder.add(box.scale, "z", 0.1, 2).name("Scale Z");
  meshFolder.add(box.rotation, "x", 0, Math.PI * 2).name("Rotation X");
  meshFolder.add(box.rotation, "y", 0, Math.PI * 2).name("Rotation Y");
  meshFolder.add(box.rotation, "z", 0, Math.PI * 2).name("Rotation Z");

  // Animation folder
  const animationFolder = gui.addFolder("Animation");
  const animationSettings = {
    rotationSpeed: 0.001,
  };
  animationFolder.add(animationSettings, "rotationSpeed", -0.01, 0.01);

  // Lighting folder
  const lightingFolder = gui.addFolder("Lighting");

  // Ambient Light controls
  const ambientLightFolder = lightingFolder.addFolder("Ambient Light");
  ambientLightFolder.add(ambientLight, "intensity", 0, 1, 0.01);
  ambientLightFolder.addColor(ambientLight, "color");

  // Directional Light controls
  const directionalLightFolder = lightingFolder.addFolder("Directional Light");
  directionalLightFolder.add(directionalLight, "intensity", 0, 5, 0.01);
  directionalLightFolder.addColor(directionalLight, "color");
  directionalLightFolder.add(directionalLight.position, "x", -5, 5, 0.1);
  directionalLightFolder.add(directionalLight.position, "y", -5, 5, 0.1);
  directionalLightFolder.add(directionalLight.position, "z", -5, 5, 0.1);
  directionalLightFolder.add(directionalLight, "distance", 0, 20, 0.1);
  directionalLightFolder.add(directionalLight, "decay", 0, 5, 0.1);

  // Point Light controls
  const pointLightFolder = lightingFolder.addFolder("Point Light");
  pointLightFolder.add(pointLight, "intensity", 0, 2, 0.01);
  pointLightFolder.addColor(pointLight, "color");
  pointLightFolder.add(pointLight.position, "x", -5, 5, 0.1);
  pointLightFolder.add(pointLight.position, "y", -5, 5, 0.1);
  pointLightFolder.add(pointLight.position, "z", -5, 5, 0.1);
  pointLightFolder.add(pointLight, "distance", 0, 20, 0.1);
  pointLightFolder.add(pointLight, "decay", 0, 5, 0.1);

  window.addEventListener("resize", onWindowResize);

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    box.rotation.y += animationSettings.rotationSpeed;
    directionalLightHelper.update(); // Update directional light helper
    pointLightHelper.update(); // Update point light helper
    renderer.render(scene, camera);
  }

  animate();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

init();
