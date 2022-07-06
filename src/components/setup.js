import {
    WebGLRenderer, DirectionalLight, Scene,
    PerspectiveCamera
} from 'three';


// set up scene, camera, light and renderer
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

// setup renderer
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);


// rerender when window size changes
window.addEventListener('resize', (event) => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.position.x = 0;
    camera.position.y = 0;
    camera.updateProjectionMatrix();
})

// front light
const light = new DirectionalLight(0xffffff, 100000)
light.position.set(0, 0, 10)
scene.add(light)




export { scene, camera, renderer, light };