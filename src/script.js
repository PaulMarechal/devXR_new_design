import * as THREE from 'three';
import GUI from 'lil-gui';
import gsap from 'gsap';
import * as Bento from './bento.js';
import * as customCursor from './customCursor.js';

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
// const gui = new GUI()


const parameters = { 
    materialColor: '#a8a8a8',
    background_scene: 0x000000
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
const material = new THREE.MeshToonMaterial({
    color: parameters.materialColor,
    gradientMap: gradientTexture
})

// Objects
const objectsDistance = 4
const mesh1 = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.4, 16, 60),
    material
)
const mesh2 = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
    material
)
const mesh3 = new THREE.Mesh(
    new THREE.ConeGeometry(1, 2, 32),
    material
)

if( navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
){
    if(window.innerHeight > window.innerWidth){
        mesh1.position.x = 1
        mesh2.position.x = - 1.5
        mesh3.position.x = 0
    
        mesh3.position.y = - objectsDistance * 2
    } else {
        mesh1.position.x = 2
        mesh2.position.x = - 1.4
        mesh3.position.x = 0
    
        mesh3.position.y = - objectsDistance * 2
    }
} else {
    mesh1.position.x = 1.8
    mesh2.position.x = - 1.8
    mesh3.position.x = 0

    mesh3.position.y = - objectsDistance * 2.1
}

mesh1.position.y = - objectsDistance * 0
mesh2.position.y = - objectsDistance * 1

scene.add(mesh1, mesh2, mesh3)

const sectionMeshes = [ mesh1, mesh2, mesh3 ]

/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight('#ffffff', 3)
directionalLight.position.set(1, 1, 0)
scene.add(directionalLight)

/**
 * Particles
 */
// Geometry
const particlesCount = 200;
const radius = 0.006;
const particlesGeometry = new THREE.SphereGeometry(radius, 16, 16);

for (let i = 0; i < particlesCount; i++) {
    const sphere = new THREE.Mesh(particlesGeometry, new THREE.MeshBasicMaterial({ color: parameters.materialColor }));

    sphere.position.x = (Math.random() - 0.5) * 10;
    sphere.position.y = objectsDistance * 0.5 - Math.random() * objectsDistance * sectionMeshes.length;
    sphere.position.z = (Math.random() - 0.5) * 10;

    scene.add(sphere);
}


/**
 * Sizes
 */
// width: (window.innerWidth) - 26,
// height: window.innerHeight
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
// Group
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)

// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 6
cameraGroup.add(camera)

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


window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        canvas_webgl.style.height = `${window.innerHeight}px`;
        canvas_webgl.style.marginTop = '0';

        canvas_webgl.style.width = `${window.innerWidth}px`;
        canvas_webgl.style.marginLeft = '0';

        canvas_webgl.style.borderRadius = '0';
    } else {
        canvas_webgl.style.height = `${sizes.height}px`;
        canvas_webgl.style.marginTop = `${marginTop_webgl}px`;

        canvas_webgl.style.width = `${sizes.width}px`;
        canvas_webgl.style.marginLeft = `${marginLeft_webgl}px`;

        canvas_webgl.style.borderRadius = '15px';
    }

    scrollY = window.scrollY
    const newSection = Math.round(scrollY / sizes.height)

    if(newSection != currentSection)
    {
        currentSection = newSection

        gsap.to(
            sectionMeshes[currentSection].rotation,
            {
                duration: 1.5,
                ease: 'power2.inOut',
                x: '+=6',
                y: '+=3',
                z: '+=1.5', 
            }
        )
    }
})




/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
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

    const parallaxX = cursor.x * 0.5
    const parallaxY = - cursor.y * 0.5
    cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime

    // Animate meshes
    for(const mesh of sectionMeshes)
    {
        mesh.rotation.x += deltaTime * 0.1
        mesh.rotation.y += deltaTime * 0.12
    }

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()