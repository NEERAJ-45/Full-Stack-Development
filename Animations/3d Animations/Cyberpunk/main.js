import "./style.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { ColorCorrectionShader } from 'three/examples/jsm/shaders/ColorCorrectionShader.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import gsap from 'gsap';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  40,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 4;

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#canvas"),
  antialias: true,
  alpha: true,
});

// Enable tone mapping and correct color space
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
renderer.outputEncoding = THREE.sRGBEncoding;

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

// Add PMREMGenerator
const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

// Set up post-processing
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

// Add Bloom effect with subtle settings
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.3,    // Reduced intensity
  0.2,    // Reduced radius
  0.6     // Increased threshold - only brightest parts will glow
);
composer.addPass(bloomPass);

// Add RGB Shift effect after bloom
const rgbShiftPass = new ShaderPass(RGBShiftShader);
rgbShiftPass.uniforms["amount"].value = 0.0035;
composer.addPass(rgbShiftPass);

// Add Color Correction last
const colorCorrectionPass = new ShaderPass(ColorCorrectionShader);
colorCorrectionPass.uniforms['powRGB'].value = new THREE.Vector3(1.1, 1.1, 1.1);
colorCorrectionPass.uniforms['mulRGB'].value = new THREE.Vector3(1.2, 1.2, 1.2);
composer.addPass(colorCorrectionPass);

// Load HDRI environment map
const rgbeLoader = new RGBELoader();
rgbeLoader.load(
  "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/pond_bridge_night_1k.hdr",
  function (texture) {
    console.log("HDRI loaded successfully");
    texture.mapping = THREE.EquirectangularReflectionMapping;
    const envMap = pmremGenerator.fromEquirectangular(texture).texture;

    scene.environment = envMap;
    console.log("Environment map applied");

    texture.dispose();
    pmremGenerator.dispose();
  },
  function (progress) {
    if (progress.lengthComputable) {
      const percentComplete = (progress.loaded / progress.total) * 100;
      console.log("HDRI loading progress:", percentComplete + "%");
    }
  },
  function (error) {
    console.error("Error loading HDRI:", error);
  }
);

// Create GLTF Loader
const loader = new GLTFLoader();

// Declare model variable in wider scope
let modelInstance;

// Load your GLTF model
loader.load(
  "./DamagedHelmet.gltf",
  function (gltf) {
    console.log("Model loaded successfully");
    modelInstance = gltf.scene;
    
    // Modify materials for edge glow
    modelInstance.traverse((child) => {
      if (child.isMesh && child.material) {
        // Keep original color
        const originalColor = child.material.color.clone();
        
        // Adjust material properties for edge glow
        child.material.emissive = originalColor.clone();
        child.material.emissiveIntensity = 0.2;  // Reduced intensity
        child.material.roughness = 0.7;          // Increased roughness
        child.material.metalness = 1.0;          // Full metalness
        child.material.envMapIntensity = 1.5;    // Enhanced environment map reflection
      }
    });

    scene.add(modelInstance);

    // Center the model
    const box = new THREE.Box3().setFromObject(modelInstance);
    const center = box.getCenter(new THREE.Vector3());
    modelInstance.position.x = -center.x;
    modelInstance.position.y = -center.y;
    modelInstance.position.z = -center.z;

   
  },
  function (progress) {
    console.log(
      "Loading model...",
      (progress.loaded / progress.total) * 100 + "%"
    );
  },
  function (error) {
    console.error("Error loading model:", error);
  }
);

// Update the mousemove event listener to use GSAP
window.addEventListener("mousemove", (e) => {
  if (modelInstance) {
    const rotationX = (e.clientX / window.innerWidth - 0.5) * (Math.PI * 0.15 );
    const rotationY = (e.clientY / window.innerHeight - 0.5) * (Math.PI * 0.15  );
    
    // Use GSAP to smoothly animate the rotation
    gsap.to(modelInstance.rotation, {
      x: rotationY,
      y: rotationX,
      duration: 1,
      ease: "power2.out"
    });
  }
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  composer.render();
}
animate();
