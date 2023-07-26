<template/>
<script setup lang="ts">
import * as THREE from 'three';
import worldJson from './world.json';
import { Group } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// 相机
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 10, 1000);
camera.position.z = 400;

// 场景
const scene = new THREE.Scene();
scene.background = new THREE.Color('#f2f2f2')

// 渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// 添加相机控件
const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);

// 动画
function animation() {
    controls.update();
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

// 创建国家区域面
const creatAreaMesh = (positions, name) => {
    const shape = new THREE.Shape(positions.map(item => new THREE.Vector2(item[0], item[1])));
    const geometry = new THREE.ShapeGeometry(shape);
    const material = new THREE.MeshBasicMaterial({
        color: '#d13a34',
        side: THREE.DoubleSide
    });
    const mesh = new THREE.Mesh(geometry, material)
    name && (mesh.name = name)
    return mesh
}
const allArea = new Group();
worldJson.features.forEach(country => {
    // 单轮廓国家
    if (country.geometry.type === "Polygon") {
        const positions = country.geometry.coordinates.flat();
        allArea.add(creatAreaMesh(positions, country.properties.name))
    } else {
        // 多个轮廓国家 中国-台湾
        const multiPositions = country.geometry.coordinates;
        for (let j = 0; j < multiPositions.length; j++) {
            const positions = multiPositions[j];
            for (let i = 0; i < positions.length; i++) {
                allArea.add(creatAreaMesh(positions[i], country.properties.name))
            }
        }
    }
});
scene.add(allArea)
</script>

<style>
* {
    margin: 0;
}
</style>
