import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Water } from 'three/addons/objects/Water.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

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
const planeMaterial = new THREE.MeshPhongMaterial({
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
  const ringMaterial = new THREE.MeshPhongMaterial({
  color: 0xF46ccc,
  side: THREE.DoubleSide
  
});
const rings = new THREE.Mesh(ringGeometry, ringMaterial);
//rings.rotation.x = THREE.MathUtils.degToRad(45);
scene.add(rings);

const geometry = new THREE.BoxGeometry(1, 1, 1);

geometry.translate(0, 0, 0.5);
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.position.y = 0.5;
//scene.add(cube);

const shape = new THREE.Shape();
const x = - 10.5;
const y = - 5;
//shape.moveTo( x + 2.5, y + 2.5 );
shape.bezierCurveTo( x + 2.5, y + 2.5, x + 2, y, x, y );
shape.bezierCurveTo( x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5 );
shape.bezierCurveTo( x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5 );
shape.bezierCurveTo( x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5 );
shape.bezierCurveTo( x + 8, y + 3.5, x + 8, y, x + 5, y );
shape.bezierCurveTo( x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5 );
const leafGeometry = new THREE.ShapeGeometry( shape );
const leafMaterial = new THREE.MeshPhongMaterial({
  color: 0x12D8cc,
  side: THREE.DoubleSide
});




const leaf1 = new THREE.Mesh(leafGeometry, leafMaterial);
const leaf2 = new THREE.Mesh(leafGeometry, leafMaterial);
const leaf3 = new THREE.Mesh(leafGeometry, leafMaterial);
const leaf4 = new THREE.Mesh(leafGeometry, leafMaterial);


leaf1.scale.set(0.1, 0.1, 0.1);
leaf1.rotation.x = -Math.PI/2;
leaf1.position.y = 0;
leaf1.position.x = -2;
leaf1.position.z = 2;
scene.add(leaf1);

leaf2.scale.set(0.1, 0.1, 0.1);
leaf2.position.y = 0;
leaf2.position.x = 4;
leaf2.position.z = 2;
leaf2.rotation.x = -Math.PI/2;
scene.add(leaf2);

leaf3.position.y = -3;
leaf3.position.x = 0.8;
leaf3.position.z = 2;
leaf3.scale.set(0.1, 0.1, 0.1);
leaf3.rotation.x = -Math.PI/2;
scene.add(leaf3);

leaf4.position.y = 3;
leaf4.position.x = 0.8;
leaf4.position.z = 2;
leaf4.scale.set(0.1, 0.1, 0.1);
leaf4.rotation.x = -Math.PI/2;
scene.add(leaf4);


const points = [];
for ( let i = 0; i < 10; ++ i ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 3 + 3, ( i - 5 ) * .8 ) );
}

const rockGeometry = new THREE.LatheGeometry( points );
const rockMaterial = new THREE.MeshPhongMaterial({
  color: 0x553c2c,
  side: THREE.DoubleSide
});
const rock1 = new THREE.Mesh(rockGeometry, rockMaterial);
const rock2 = new THREE.Mesh(rockGeometry, rockMaterial);
const rock3 = new THREE.Mesh(rockGeometry, rockMaterial);
const rock4 = new THREE.Mesh(rockGeometry, rockMaterial);

rock1.position.y = 0;
rock1.position.x = -3;
rock1.position.z = 1;

rock1.rotation.x = Math.PI/2;
rock1.scale.set(0.1, 0.1, 0.1);
scene.add(rock1);

rock2.position.y = 0;
rock2.position.x = 3;
rock2.position.z = 1;
rock2.rotation.x = Math.PI/2;
rock2.scale.set(0.1, 0.1, 0.1);
scene.add(rock2);


rock3.position.y = -3;
rock3.position.x = 0;
rock3.position.z = 1;
rock3.rotation.x = Math.PI/2;
rock3.scale.set(0.1, 0.1, 0.1);
scene.add(rock3);

rock4.position.y = 3;
rock4.position.x = 0;
rock4.position.z = 1;
rock4.rotation.x = Math.PI/2;
rock4.scale.set(0.1, 0.1, 0.1);
scene.add(rock4);


class CustomSinCurve extends THREE.Curve {

	constructor( scale ) {
		super();
		this.scale = scale;
	}
	getPoint( t ) {
		const tx = t * 3 - 1.5;
		const ty = Math.sin(  Math.PI * t );
		const tz = 1;
		return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );
	}
}

const path = new CustomSinCurve( 2 );
const tubularSegments =  18;  
const radius =  0.4;  
const radialSegments = 11;  
const closed = false;  
const vineGeometry = new THREE.TubeGeometry(
	path, tubularSegments, radius, radialSegments, closed );
const vineMaterial = new THREE.MeshPhongMaterial({
  color:0x5d782e,
  side: THREE.DoubleSide
});

const vine1 = new THREE.Mesh(vineGeometry, vineMaterial);
vine1.rotation.x = Math.PI/2;
vine1.rotation.z = Math.PI/4;
vine1.rotation.y = Math.PI/6;
vine1.position.x = 0;
vine1.position.z = 2;
vine1.position.y = 0;
scene.add(vine1);

const vine2 = new THREE.Mesh(vineGeometry, vineMaterial);
vine2.rotation.x = Math.PI/2;
vine2.rotation.z = -Math.PI/4;
vine2.rotation.y = Math.PI/6;
vine2.position.x = -2;
vine2.position.z = 2;
vine2.position.y = 4;
scene.add(vine2);

const vine3 = new THREE.Mesh(vineGeometry, vineMaterial);
vine3.rotation.x = Math.PI/2;
vine3.rotation.z = Math.PI/4;
vine3.rotation.y = Math.PI/6;
vine3.position.x = -1.5;
vine3.position.z = 2;
vine3.position.y = 1;
scene.add(vine3);

const radiusW = 7;  
const segments = 24;  
const waterGeometry = new THREE.CircleGeometry( radiusW, segments );

// Create realistic water material with shader
const waterMaterial = new THREE.ShaderMaterial({
  uniforms: {
    time: { value: 0 },
    color1: { value: new THREE.Color(0x1e6b7e) },  // Deep blue
    color2: { value: new THREE.Color(0x4db8d6) },  // Light blue
  },
  vertexShader: `
    uniform float time;
    varying float wave;
    
    void main() {
      vec3 pos = position;
      
      // Create wave effect using multiple sine waves
      float wave1 = sin(pos.x * 2.0 + time) * 0.15;
      float wave2 = sin(pos.y * 1.5 - time * 0.7) * 0.12;
      float wave3 = sin((pos.x + pos.y) * 1.0 + time * 0.5) * 0.1;
      
      pos.z += wave1 + wave2 + wave3;
      wave = wave1 + wave2 + wave3;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 color1;
    uniform vec3 color2;
    varying float wave;
    
    void main() {
      // Create color variation based on waves
      float intensity = (wave + 0.4) * 0.8;
      vec3 color = mix(color1, color2, intensity);
      
      // Add shimmer effect
      float shimmer = 0.5 + 0.5 * sin(wave * 10.0);
      color += shimmer * 0.1;
      
      // Add transparency for water effect
      float alpha = 0.85;
      
      gl_FragColor = vec4(color, alpha);
    }
  `,
  side: THREE.DoubleSide,
  wireframe: false
});

const waterPond = new THREE.Mesh(waterGeometry, waterMaterial);
waterPond.scale.set(0.30, 0.30, 0.30);
scene.add(waterPond);

const pointLight = new THREE.PointLight( 0x34fE7, 80, 60 );
pointLight.position.set( 6, 6, 6 );
scene.add( pointLight );

const sphereSize = 0.5;
//const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize ); 
//scene.add( pointLightHelper );

const loader = new GLTFLoader(); 
loader.load( './assets/mushrooms.glb', function ( gltf ) 
{ 
  gltf.scene.rotation.x = Math.PI / 3;  // Rotate around X-axis
  gltf.scene.rotation.y = Math.PI / 4;  // Rotate around Y-axis
  gltf.scene.rotation.z = Math.PI / 8;             // Rotate around Z-axis
  gltf.scene.position.x = 5; 
  scene.add( gltf.scene ); 
}, 
undefined, function ( error ) 
{ console.error( error ); } );

loader.load( './assets/mushrooms.glb', function ( gltf ) 
{ 
  gltf.scene.rotation.x = Math.PI / 3;  // Rotate around X-axis
  gltf.scene.rotation.y = Math.PI / 3;  // Rotate around Y-axis
  gltf.scene.rotation.z = Math.PI / 8;             // Rotate around Z-axis
  gltf.scene.position.x =-1; 
  gltf.scene.position.y = 3; 

  scene.add( gltf.scene ); 
}, 
undefined, function ( error ) 
{ console.error( error ); } );


// ANYTHING ELSE SHOULD BE ADDED BEFORE THE CAMERa
camera.position.z = 5;
camera.position.y = 7;
camera.up.set(0, 0, 1);
camera.lookAt(0, 0, 0);


const controls = new OrbitControls(camera, renderer.domElement);
let time = 0;

function animate() { 
  controls.update();
  time += 0.04; 
  leaf1.position.z = 2* Math.sin(time);
  leaf2.position.z = 2* Math.sin(time);
  leaf3.position.z = Math.sin(time);
  leaf4.position.z = Math.sin(time);

  //Growing vines maybe?
  vine1.scale.set( Math.abs(Math.sin(time/5)),  Math.abs(Math.sin(time/4)),  Math.abs(Math.sin(time/4)));
  vine2.scale.set(Math.abs(Math.sin(time/4)),  Math.abs(Math.sin(time/5)),  Math.abs(Math.sin(time/4)));
  vine3.scale.set(Math.abs(Math.sin(time/3)),  Math.abs(Math.sin(time/3)),  Math.abs(Math.sin(time/5)));

  pointLight.position.set(Math.sin(2*time), Math.sin(time/3), Math.sin(2*time));
  
  // Update water shader time
  waterMaterial.uniforms.time.value = time;
  
  renderer.render(scene, camera);
}
