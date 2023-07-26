<template/>
<script setup lang="ts">
import * as THREE from 'three';
import worldJson from './world.json';
// 相机
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 10, 1000);
camera.position.z = 100;

// 场景
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x030311)

// 渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
// 动画
function animation() {
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);
console.log(worldJson);

const points = []
worldJson.features[0].geometry.coordinates[0].forEach(item => {
    points.push(new THREE.Vector2(item[0], item[1]))
})
const shape = new THREE.Shape(points);
const geometry = new THREE.ShapeGeometry(shape);
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh)
</script>

<style>
*{
    margin: 0;
}
</style>
