<template/>
<script setup lang="ts">
import * as THREE from 'three';
import { Intersection } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { getClientTo2D } from "./dataUtils";
import Fly from './core/fly';
import Country from './core/country';
import HoverFont from './core/hoverFont';

const clock = new THREE.Clock();
// 相机
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 10, 1000);
camera.position.z = 250;

// 场景
const scene = new THREE.Scene();
scene.background = new THREE.Color('#f2f2f2')

// 渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// 添加相机控件
const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);
controls.enableRotate = false;

// 创建国家
const country = new Country();

// 创建飞线
const fly = new Fly([
    {
        from: {
            lon: 30.5728,
            lat: 104.0668
        },
        to: {
            lon: 44.9635,
            lat: -103.4823
        }
    },
    {
        from: {
            lon: -25.1721,
            lat: 29.8739
        },
        to: {
            lon: 61.524010,
            lat: 105.318756
        }
    }
])

// 鼠标移入字体
const hoverFont = new HoverFont(scene)

scene.add(...country.getCountry(), ...fly.getLine(), ...fly.getPlayPoints())

// 整个场景旋转 倾斜效果
scene.rotation.x = -Math.PI / 5
// 法线实现hover修改区域颜色
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let hoverArea: Intersection | null = null;

function onPointerMove(event: MouseEvent) {
    // 将鼠标位置归一化为设备坐标x 和 y 方向的取值范围是 (-1 to +1)\
    pointer.copy(getClientTo2D(event.clientX, event.clientY))
    // 通过摄像机和鼠标位置更新射线
    raycaster.setFromCamera(pointer, camera);
    if (hoverArea) {
        hoverFont.clearTextMesh()
        hoverArea.object.material.color.set(hoverArea.object.name === 'China' ? '#f6647c' : '#e10d04');
        hoverArea = null;
    }
    // 计算物体和射线的焦点
    const intersects = raycaster.intersectObjects(country.getCountryArea().children);
    for (let i = 0; i < intersects.length; i++) {
        hoverArea = intersects[i];
        hoverFont.createTextMesh(hoverArea.object)
        intersects[i].object.material.color.set(0x000000);
    }
}

window.addEventListener('pointermove', onPointerMove);

// 动画
function animation() {
    fly.setTime(clock.getDelta())
    controls.update();
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);
</script>
