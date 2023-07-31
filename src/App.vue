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
import { get2DToClient, getClientTo2D, getCenterOfMass } from "./dataUtils";
import Fly from './core/fly';
import Country from './core/country';

const clock = new THREE.Clock();
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


// 创建国家
const country = new Country();

// 创建飞线
const fly = new Fly([
    {
        from: {
            lon: 39.9042,
            lat: 116.4074
        },
        to: {
            lon: 34.0522,
            lat: -118.2437
        }
    },
    {
        from: {
            lon: -16.711816406249937,
            lat: 12.354833984375006
        },
        to: {
            lon: 61.524010,
            lat: 105.318756
        }
    }
])

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

// 动画
function animation() {
    fly.setTime(clock.getDelta())
    controls.update();
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);
</script>

<style scoped>
.title {
    position: absolute;
    font-size: 12px;
    color: #43c1c0;
}
</style>
