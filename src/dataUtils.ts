import * as THREE from 'three';
import { Object3D, Vector3, Camera } from "three";
/**
 * 经纬度转换为2D坐标
 * @param latitude 经度
 * @param longitude 纬度
 */
export function convertTo2D(latitude, longitude) {
    // 经纬度转为弧度
    const phi = THREE.MathUtils.degToRad(90 - latitude);
    const theta = THREE.MathUtils.degToRad(longitude);

    // 构造二维坐标
    const x = Math.cos(phi) * Math.cos(theta);
    const y = Math.cos(phi) * Math.sin(theta);

    return new THREE.Vector3(x, y, 0);
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
    return center.clone();
}

/**
 * 将三维坐标转换为屏幕 clientX 和 clientY // 将屏幕坐标转换到DOM坐标
 * @param vector
 * @param camera
 */
export const get2DToClient = (vector:Vector3, camera:Camera) => {
    // 将中心点坐标转换到屏幕坐标
    const center = vector.clone().project(camera);
    return {
        x: ((center.x + 1) / 2) * window.innerWidth,
        y: ((1 - center.y) / 2) * window.innerHeight
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

/**
 * 计算重心
 * @param mesh
 */
export const getCenterOfMass = (mesh:Object3D) => {
    // 获取mesh的顶点数据
    const positionAttribute = mesh.geometry.attributes.position;
    const totalVertices = positionAttribute.count;
    // 计算重心点的累加坐标
    const centerOfMass = new THREE.Vector3();
    for (let i = 0; i < totalVertices; i++) {
        const vertex = new THREE.Vector3();
        vertex.fromBufferAttribute(positionAttribute, i);
        centerOfMass.add(vertex);
    }
    // 计算重心点的平均坐标
    centerOfMass.divideScalar(totalVertices);
    return centerOfMass
}
/**
 * 随机生成经纬度 from to
 */
export const getRandomPosition = (count = 10) => {
    const data = []
    for (let i = 0; i < count; i++) {
        data.push({
            from: {
                lon: (Math.random() * 360) - 180,
                lat: (Math.random() * 180) - 90
            },
            to: {
                lon: (Math.random() * 360) - 180,
                lat: (Math.random() * 180) - 90
            }
        })
    }
    return data
}
