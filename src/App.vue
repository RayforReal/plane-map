<template>
    <div
        ref="titleRef"
        class="title"
        v-show="titleState.country"
        :style="{'top':titleState.top,'left':titleState.left}">
        {{ titleState.country }}
    </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import * as THREE from 'three';
import countryNameJson from './countryName.json';
import { Intersection } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { get2DToClient, getClientTo2D, getCenterOfMass, getRandomPosition } from "./dataUtils";
import Fly from './core/fly';
import Country from './core/country';

const titleRef = ref()
const titleState = reactive({
    country: '',
    top: '0px',
    left: '0px'
})
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
// 动画
function animation() {
    controls.update();
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

// 创建国家
const country = new Country();

// 创建飞线
const positionList = getRandomPosition(1);
const fly = new Fly(positionList)

scene.add(...country.getCountry(), fly.getLine())

// 法线实现hover修改区域颜色
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let hoverArea: Intersection | null = null;

function onPointerMove(event:MouseEvent) {
    // 将鼠标位置归一化为设备坐标x 和 y 方向的取值范围是 (-1 to +1)\
    pointer.copy(getClientTo2D(event.clientX, event.clientY))
    if (hoverArea) {
        const { x, y } = get2DToClient(getCenterOfMass(hoverArea.object), camera)
        const country = countryNameJson[hoverArea.object.name]
        Object.assign(titleState, {
            left: `${x - (country.length || 1 - 1) * 12 / 2}px`,
            top: `${y - 8}px`,
            country
        })
    } else {
        Object.assign(titleState, {
            top: '',
            left: '',
            country: ''
        })
    }
    // 通过摄像机和鼠标位置更新射线
    raycaster.setFromCamera(pointer, camera);
    if (hoverArea) {
        hoverArea.object.material.color.set(hoverArea.object.name === 'China' ? '#f6647c' : '#e10d04');
        hoverArea = null;
    }
    // 计算物体和射线的焦点
    const intersects = raycaster.intersectObjects(country.getCountryArea().children);
    for (let i = 0; i < intersects.length; i++) {
        hoverArea = intersects[i];
        intersects[i].object.material.color.set(0x000000);
    }
}

window.addEventListener('pointermove', onPointerMove);
</script>

<style scoped>
.title {
    position: absolute;
    font-size: 12px;
    color: #43c1c0 ;
}
</style>
