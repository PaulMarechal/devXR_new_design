
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Définition de la scène
const scene = new THREE.Scene(); // Scène

// Définition de la taille de la scène

const size = {
  width: window.innerWidth, 
  height: window.innerHeight, 
};

// Configuration de la caméra
const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000); 
camera.position.z = 5; 

// Ajout d'une lumière ambiante
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4); 
ambientLight.intensity = 0.9;

scene.add(ambientLight); 

// Ajout d'une lumière directionnelle
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
directionalLight.position.set(1, 1, 1); 
directionalLight.intensity = 2;

scene.add(directionalLight); 

// Configuration du rendu
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('canvas.webgl'), alpha: true }); 
renderer.setSize(size.width, size.height); 


// Fonction de chargement du modèle 3D
function loadModel() {
  const loader = new GLTFLoader(); 
  loader.load('../assets/models/Guerinet.glb', (gltf) => {
    const model = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5);
    scene.add(model); 
    
    // Ajout d'une rotation au modèle
    model.rotation.y = Math.PI / 2; 
  });
}

// Appel de la fonction de chargement du modèle
loadModel();

// Boucle d'animation
function animate() {
  requestAnimationFrame(animate); 
  // Rotation du modèle
  scene.traverse((object) => {
    if (object.isMesh) {
      object.rotation.y += 0.01; 
    }
  });
  renderer.render(scene, camera); 
}

// Démarrage de la boucle d'animation
animate();
