import * as THREE from 'three';
import { Object3D, Vector3 } from "three";

/**
 * 经纬度转换为3D坐标
 * @param latitude 经度
 * @param longitude 纬度
 * @param radius 需要转换坐标的圆的半径
 */
export function convertTo3D(latitude, longitude, radius) {
    // 将经纬度转换为弧度
    const phi = (90 - latitude) * Math.PI / 180;
    const theta = (longitude + 180) * Math.PI / 180;
    // 计算在球体上的坐标
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    return new THREE.Vector3(x, y, z);
}

/**
 * 返回一个mesh的中心点
 * @param mesh
 */
export const getAreaCenter = (mesh:Object3D) => {
    // 创建一个Box3对象
    const boundingBox = new THREE.Box3();
    // 计算mesh的边界框
    boundingBox.setFromObject(mesh);
    // 获取边界框的中心点坐标
    const center = new THREE.Vector3();
    boundingBox.getCenter(center);
    return center.clone()
}

/**
 * 将三维坐标转换为屏幕 clientX 和 clientY
 * @param vector
 */
export const get2DToClient = (vector:Vector3) => {
    return {
        x: ((vector.x + 1) / 2) * window.innerWidth,
        y: ((1 - vector.y) / 2) * window.innerHeight
    }
}

/**
 * 将屏幕 clientX 和 clientY 转换成二维坐标
 * @param x
 * @param y
 */
export const getClientTo2D = (x:number, y:number) => {
    const pointer = new THREE.Vector2();
    // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
    pointer.x = (x / window.innerWidth) * 2 - 1;
    pointer.y = -(y / window.innerHeight) * 2 + 1;
    return pointer.clone()
}
