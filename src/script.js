import * as THREE from 'three';
import GUI from 'lil-gui';
import gsap from 'gsap';
import * as Arguments_anim_tab from './arguments_anim_tab.js'
import * as customCursor from './customCursor.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as Animation_text from "./animation_text_gsap.js";
import * as Bento from "./bento.js"
import * as Realisations from "./realisations_anim.js";

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
// scene.background = new THREE.Color( 0x000000 ); 

/**
 * Debug
 */
const gui = new GUI()


const parameters = { 
    materialColor: '#ffeded',
    background_scene: 0x000000, 
    materialColorSmallPlanets: "#ffffff"
}

// gui
//     .addColor(parameters, 'materialColor')
//     .onChange(() => {
//         material.color.set(parameters.materialColor);
//         particlesMaterial.color.set(parameters.materialColor);
//     });

// gui
//     .addColor(parameters, 'background_scene')
//     .onChange(() => {
//         scene.background.set(parameters.background_scene);
//         scene.background.set(parameters.background_scene);
//     });

/**
 * Objects
 */
// Texture
const textureLoader = new THREE.TextureLoader()
const gradientTexture = textureLoader.load('textures/gradients/3.jpg')
gradientTexture.magFilter = THREE.NearestFilter

// Material
const material_test = new THREE.MeshStandardMaterial({
    color: 0xff0000,
})

const material = new THREE.MeshToonMaterial({
    color: parameters.materialColor,
    gradientMap: gradientTexture
})

/**
 * Import Hand
*/
// Instantiate a loader
const loader = new GLTFLoader();

loader.load(
	// resource URL
	// 'https://devxr.fr/assets/models/handPhoneGlass.glb',
    './assets/models/handPhoneGlass.glb',
	// called when the resource is loaded
	function ( handModel ) {

        // handModel.scene.rotateY(Math.PI) 
        handModel.scene.position.x = 4
        handModel.scene.position.y = -1.2
        
        handModel.scene.scale.set(3.5, 3.5, 3.5); 
		scene.add( handModel.scene );

        function scrollListener() {
            // First
            timeline.to(handModel.position, {
              x: 0, 
              y: -1.2, 
              z: 4,
              duration: 0,
            }, 0);
            
            // Second
            timeline.to(camera.position, {
                x: 0, 
                y: -1.2, 
                z: 2,
              duration: 0.1,
            }, ">");
        }
	},
	// called while loading is progressing
	function ( xhr ) {
		// console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	// called when loading has errors
	function ( error ) {
		console.log( 'An error happened' + error );
	}
);

// Objects
const objectsDistance = 4

/* test */
// const texture = textureLoader.load('https://devxr.fr/assets/images/background_glass.png', () => {
// }, undefined, (error) => {
//     console.error('Erreur de chargement de l\'image : ', error);
// });

// const material_glass = new THREE.MeshPhysicalMaterial({ 
//     map: texture, 
//     transparent: true, 
//     roughness: 0.7,   
//     transmission: 1,  
//     thickness: 1
// });

// const geometry_glass = new THREE.PlaneGeometry(7, 5);
// const background_glass = new THREE.Mesh(geometry_glass, material_glass);
// scene.add(background_glass);


// if( !navigator.userAgent.match(/iPhone/i)
// || !navigator.userAgent.match(/webOS/i)
// || !navigator.userAgent.match(/Android/i)
// || !navigator.userAgent.match(/iPad/i)
// || !navigator.userAgent.match(/iPod/i)
// || !navigator.userAgent.match(/BlackBerry/i)
// || !navigator.userAgent.match(/Windows Phone/i)
// ){
//     background_glass.position.z = -7
//     background_glass.position.x = 2
//     background_glass.rotation.z = 0.2
// } 

// const sectionMeshes = [ background_glass ]

/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight('#ffffff', 3)
directionalLight.position.set(1, 1, 0)
scene.add(directionalLight)

const light_second = new THREE.AmbientLight( 0xe2e2e2, 2.5 ); // soft white light
scene.add( light_second );

/**
 * Particles
 */
// Geometry
const particlesCount_tel = 100;
const particlesCount_scene = 200;

const radius_sphere_tel = 0.007;
const radius_sphere_scene = 0.0005;

const particles_geometry_tel = new THREE.SphereGeometry(radius_sphere_tel, 16, 16);
const particles_geometry_scene = new THREE.SphereGeometry(radius_sphere_scene, 16, 16);


// Spheres for scene 
for (let i = 0; i < particlesCount_tel; i++) {
    const sphere = new THREE.Mesh(particles_geometry_tel, new THREE.MeshBasicMaterial({ color: parameters.materialColorSmallPlanets }));
    
    sphere.position.x = (Math.random() - 0.5) * 6;
    sphere.position.y = objectsDistance - 0.5 - Math.random() * 7
    sphere.position.z = (Math.random() - 0.5) * 4;
    
    scene.add(sphere);
}

// Spheres for tel
for (let i = 0; i < particlesCount_tel; i++) {
    const sphere = new THREE.Mesh(particles_geometry_scene, new THREE.MeshBasicMaterial({ color: parameters.materialColorSmallPlanets }));

    sphere.position.x = (Math.random() + 0.7) * 1;
    sphere.position.y = objectsDistance - 3 - Math.random() * 1.7
    sphere.position.z = (Math.random() - 0.1) * 0.7;

    scene.add(sphere);
}

/**
 * Sizes
 */
const sizes = {
    width: (window.innerWidth) * 0.85,
    height: window.innerHeight * 0.95
}

const canvas_webgl = document.querySelector(".webgl")
const marginLeft_webgl = ((window.innerWidth) - ((window.innerWidth) * 0.85)) / 2
const marginTop_webgl = ((window.innerHeight) - ((window.innerHeight) * 0.95)) / 2
canvas_webgl.style.marginLeft = `${marginLeft_webgl}px`
canvas_webgl.style.marginTop = `${marginTop_webgl}px`



window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */

// Base camera

// Group
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)

// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.01, 100)
camera.position.z = 6
cameraGroup.add(camera)

const cameraFolder = gui.addFolder('Camera')
cameraFolder.add(camera.position, 'x', 0, Math.PI * 2)
cameraFolder.add(camera.position, 'y', 0, Math.PI * 2)
cameraFolder.add(camera.position, 'z', 0, Math.PI * 2)
cameraFolder.close()

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true, 
    antialias: true
})
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(sizes.width, sizes.height)
renderer.autoClear = false;
renderer.setClearColor(0x000000, 0.0);

/**
 * Scroll
 */
let scrollY = window.scrollY
let currentSection = 0
const header = document.querySelector("header")

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        canvas_webgl.style.height = `${window.innerHeight}px`;
        canvas_webgl.style.marginTop = '0';

        canvas_webgl.style.width = `${window.innerWidth}px`;
        canvas_webgl.style.marginLeft = '0';

        canvas_webgl.style.borderRadius = '0';
        header.style.marginTop = "1%"
    } else {
        canvas_webgl.style.height = `${sizes.height}px`;
        canvas_webgl.style.marginTop = `${marginTop_webgl}px`;

        canvas_webgl.style.width = `${sizes.width}px`;
        canvas_webgl.style.marginLeft = `${marginLeft_webgl}px`;

        canvas_webgl.style.borderRadius = '15px';
        header.style.marginTop = "2%"

    }
})

/**
 * Scroll event ( gsap )
*/
gsap.registerPlugin(ScrollTrigger);
const timeline = gsap.timeline({
  scrollTrigger: {
    //   markers: true,
      trigger: ".home",
      scrub: 7,
      start: "2% top",
      endTrigger: "#second_section",
      end: "top top",
    }
})

function scrollListener() {
    // First
    timeline.to(camera.position, {
      x: 0, 
      y: 0, 
      z: 6,
      duration: 0,
    }, 0);
    
    // Second
    timeline.to(camera.position, {
        x: 1.3, 
        y: 0.5, 
        z: 0.55,
      duration: 0.1,
    }, ">");
}

scrollListener();

        

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / sizes.width - 0.1
    cursor.y = event.clientY / sizes.height - 0.1
})

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

   // Animate camera
   camera.position.y = - scrollY / sizes.height * objectsDistance

   const parallaxX = cursor.x * 0.1
   const parallaxY = - cursor.y * 0.1
   cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 3 * deltaTime
   cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 2 * deltaTime

//    // Animate meshes
//    for(const mesh of sectionMeshes)
//    {
//        mesh.rotation.x += deltaTime * 0.1
//        mesh.rotation.y += deltaTime * 0.12
//    }

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
