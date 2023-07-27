<template/>
<script setup lang="ts">
import * as THREE from 'three';
import worldJson from './world.json';
import { Group, Intersection } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Position } from "geojson";

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

// 法线实现hover修改区域颜色
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let hoverArea:Intersection|null = null;

// 动画
function animation() {
    // 通过摄像机和鼠标位置更新射线
    raycaster.setFromCamera(pointer, camera);
    if (hoverArea) {
        hoverArea.object.material.color.set(hoverArea.object.name === 'China' ? '#f6647c' : '#e10d04');
        hoverArea = null;
    }
    // 计算物体和射线的焦点
    const intersects = raycaster.intersectObjects(scene.children);
    for (let i = 0; i < intersects.length; i++) {
        if (intersects[i].object.isMesh) {
            hoverArea = intersects[i]
            intersects[i].object.material.color.set(0x000000);
        }
    }
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
        color: name === 'China' ? '#f6647c' : '#e10d04',
        side: THREE.DoubleSide,
        opacity: 0.8,
        transparent: true
    });
    const mesh = new THREE.Mesh(geometry, material)
    name && (mesh.name = name)
    return mesh
}

// 创建国家区域轮廓线条
function createLine(positions: Position[], countryName: string) {
    const geometry = new THREE.BufferGeometry();
    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const vertices = [];
    for (let i = 0; i < positions.length; i++) {
        const longitude = positions[i][0];
        const latitude = positions[i][1];
        vertices.push(longitude, latitude, 0.1);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const line = new THREE.Line(geometry, material);
    const countryGroup = new Group();
    if (countryName) {
        countryGroup.name = `countryGroup-${countryName}`;
    }
    countryGroup.add(line);
    return countryGroup;
}

const allArea = new Group();
const allLine: Group[] = [];
worldJson.features.forEach(country => {
    // 单轮廓国家
    if (country.geometry.type === "Polygon") {
        const positions = country.geometry.coordinates.flat();
        allArea.add(creatAreaMesh(positions, country.properties.name))
        allLine.push(createLine(positions, country.properties.name))
    } else {
        // 多个轮廓国家 中国-台湾
        const multiPositions = country.geometry.coordinates;
        for (let j = 0; j < multiPositions.length; j++) {
            const positions = multiPositions[j];
            for (let i = 0; i < positions.length; i++) {
                allArea.add(creatAreaMesh(positions[i], country.properties.name));
                allLine.push(createLine(positions[i], country.properties.name))
            }
        }
    }
});
scene.add(allArea, ...allLine)

function onPointerMove(event) {
    // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

window.addEventListener('pointermove', onPointerMove);
</script>

<style>
* {
    margin: 0;
}
</style>
