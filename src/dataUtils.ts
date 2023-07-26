import * as THREE from 'three';
import { Vector3 } from "three";

function convertCoordinatesToXY(latitude, longitude) {
    const mapWidth = 500; // 地图宽度
    const mapHeight = 300; // 地图高度

    const maxLatitude = 90; // 最大纬度
    const minLatitude = -90; // 最小纬度
    const maxLongitude = 180; // 最大经度
    const minLongitude = -180; // 最小经度

    const x = (longitude - minLongitude) / (maxLongitude - minLongitude) * mapWidth;
    const y = mapHeight - (latitude - minLatitude) / (maxLatitude - minLatitude) * mapHeight;

    return [x, y];
}

// 测试例子
const latitude = 40; // 纬度
const longitude = 100; // 经度

const coordinates = convertCoordinatesToXY(latitude, longitude);
console.log(coordinates);
