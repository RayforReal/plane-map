<script setup lang="ts">
import * as THREE from 'three';

// 相机
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
camera.position.z = 1;

// 场景
const scene = new THREE.Scene();

// 渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
// 动画
function animation() {
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
</script>

<style>
*{
    margin: 0;
}
</style>
