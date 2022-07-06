import {scene, camera, renderer } from './setup'
import { createStarSomewhere } from './star';


function addObject() {
    const mesh = createStarSomewhere();
    scene.add(mesh)
}


addObject()
addObject()
addObject()
addObject()
addObject()
addObject()
addObject()
addObject()


// animate
let frame = 0
function animate() {
    requestAnimationFrame(animate);

    scene.traverse(function (obj) {

        if (obj.type === 'Mesh') {
            obj.translateZ(0.1);
        }

    });

    renderer.render(scene, camera)
    frame += 0.01
}

animate()


function updateScene() {
    const rand = Math.random() * 2000;
    setTimeout(function () {
        // adda a new object to the scene
        addObject();
        updateScene();
    }, rand);

}

updateScene()

const container = document.getElementById("container");
container.appendChild(renderer.domElement);