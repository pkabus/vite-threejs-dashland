import {
    SphereGeometry, MeshPhongMaterial, Mesh
} from 'three';

const redSphereMaterial = new MeshPhongMaterial({ color: 0xffffff })
const sphereGeometry = new SphereGeometry(0.4, 30, 30)

export function createStarSomewhere() {
    const randX = Math.random() * 600 - 300;
    const randY = Math.random() * 600 - 300;
    const sphereMesh = new Mesh(sphereGeometry, redSphereMaterial)
    sphereMesh.position.set(randX, randY, -200)
    return sphereMesh;
}
