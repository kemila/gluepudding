/*
 * @Description: 
 * @Author: zhengqi
 * @Date: 2022-01-27 16:10:21
 * @LastEditTime: 2022-01-28 10:02:05
 */

import * as THREE from 'three';

let camera: THREE.PerspectiveCamera | THREE.Camera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;

let mesh: THREE.Object3D<THREE.Event> | THREE.InstancedMesh<THREE.IcosahedronGeometry, THREE.MeshPhongMaterial>;
const amount = parseInt( window.location.search.substr( 1 ) ) || 10;
const count = Math.pow( amount, 3 );

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2( 1, 1 );

const color = new THREE.Color();

init();
animate();

function init() {

  camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 100 );
  camera.position.set( amount, amount, amount );
  camera.lookAt( 0, 0, 0 );

  scene = new THREE.Scene();

  const light1 = new THREE.HemisphereLight( 0xffffff, 0x000088 );
  light1.position.set( - 1, 1.5, 1 );
  scene.add( light1 );

  const light2 = new THREE.HemisphereLight( 0xffffff, 0x880000, 0.5 );
  light2.position.set( - 1, - 1.5, - 1 );
  scene.add( light2 );

  const geometry = new THREE.IcosahedronGeometry( 0.5, 3 );
  const material = new THREE.MeshPhongMaterial();

  mesh = new THREE.InstancedMesh( geometry, material, count );

  let i = 0;
  const offset = ( amount - 1 ) / 2;

  const matrix = new THREE.Matrix4();

  for ( let x = 0; x < amount; x ++ ) {

    for ( let y = 0; y < amount; y ++ ) {

      for ( let z = 0; z < amount; z ++ ) {

        matrix.setPosition( offset - x, offset - y, offset - z );

        (mesh as any).setMatrixAt( i, matrix );
        (mesh as any).setColorAt( i, color );

        i ++;

      }

    }

  }

  scene.add( mesh );


  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  window.addEventListener( 'resize', onWindowResize );
  document.addEventListener( 'mousemove', onMouseMove );

}

function onWindowResize() {

  (camera as any).aspect = window.innerWidth / window.innerHeight;
  (camera as any).updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}

function onMouseMove( event: { preventDefault: () => void; clientX: number; clientY: number; } ) {

  event.preventDefault();

  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

function animate() {

  requestAnimationFrame( animate );

  render();

}

function render() {

  raycaster.setFromCamera( mouse, camera );

  const intersection = raycaster.intersectObject( mesh );

  if ( intersection.length > 0 ) {

    const instanceId = intersection[ 0 ].instanceId;

    (mesh as any).setColorAt( instanceId, color.setHex( Math.random() * 0xffffff ) );
    (mesh as any).instanceColor.needsUpdate = true;

  }

  renderer.render( scene, camera );

}
