import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const planeGeometry = new THREE.PlaneGeometry(7, 7);
const planeMaterial = new THREE.MeshBasicMaterial({
  color: 0xcccccc
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI/2;
//scene.add(plane);

const innerRadius = 2;  
const outerRadius = 4;  
const thetaSegments = 18;  
const ringGeometry = new THREE.RingGeometry(
	innerRadius, outerRadius, thetaSegments );
  const ringMaterial = new THREE.MeshBasicMaterial({
  color: 0xF46ccc
});
const rings = new THREE.Mesh(ringGeometry, ringMaterial);
scene.add(rings);

const geometry = new THREE.BoxGeometry(1, 1, 1);

geometry.translate(0, 0, 0.5);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.position.y = 0.5;
//scene.add(cube);

const shape = new THREE.Shape();
const x = - 10.5;
const y = - 5;
shape.moveTo( x + 2.5, y + 2.5 );
shape.bezierCurveTo( x + 2.5, y + 2.5, x + 2, y, x, y );
shape.bezierCurveTo( x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5 );
shape.bezierCurveTo( x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5 );
shape.bezierCurveTo( x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5 );
shape.bezierCurveTo( x + 8, y + 3.5, x + 8, y, x + 5, y );
shape.bezierCurveTo( x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5 );
const leafGeometry = new THREE.ShapeGeometry( shape );
const leafMaterial = new THREE.MeshBasicMaterial({
  color: 0x12D8cc,
  side: THREE.DoubleSide
});
const leaf1 = new THREE.Mesh(leafGeometry, leafMaterial);
const leaf2 = new THREE.Mesh(leafGeometry, leafMaterial);
const leaf3 = new THREE.Mesh(leafGeometry, leafMaterial);
//leaf1.rotation.y = Math.PI/2;
leaf1.scale.set(0.5, 0.5, 0.5);
leaf1.rotation.z = Math.PI/3;
scene.add(leaf1);
leaf2.position.y = -4;
leaf2.position.x = 15;
leaf2.rotation.x = -Math.PI/2;
scene.add(leaf2);

leaf3.position.y = 2;
leaf3.position.x = 5;
leaf3.position.x = -2;
leaf3.scale.set(0.2, 0.2, 0.2);
leaf3.rotation.z = Math.PI/2;
scene.add(leaf3);


camera.position.z = 5;
camera.position.y = 7;
//camera.up.set(0, 0, 1);
camera.lookAt(0, 0, 0);



function animate() {
  renderer.render(scene, camera);
}
