<template/>
<script setup lang="ts">
import * as THREE from 'three';
import worldJson from './world.json';
// 相机
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 10, 1000);
camera.position.z = 400;

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

worldJson.features.forEach(country => {
    // 单轮廓国家
    if (country.geometry.type === "Polygon") {
        const positions = country.geometry.coordinates.flat();
        const shape = new THREE.Shape(positions.map(item => new THREE.Vector2(item[0], item[1])));
        const geometry = new THREE.ShapeGeometry(shape);
        const material = new THREE.MeshNormalMaterial();
        scene.add(new THREE.Mesh(geometry, material))
    } else {
        // 多个轮廓国家 中国-台湾
        const multiPositions = country.geometry.coordinates;
        for (let j = 0; j < multiPositions.length; j++) {
            const positions = multiPositions[j];
            for (let i = 0; i < positions.length; i++) {
                const shape = new THREE.Shape(positions[i].map(item => new THREE.Vector2(item[0], item[1])));
                const geometry = new THREE.ShapeGeometry(shape);
                const material = new THREE.MeshNormalMaterial();
                scene.add(new THREE.Mesh(geometry, material))
            }
        }
    }
});

</script>

<style>
* {
    margin: 0;
}
</style>
