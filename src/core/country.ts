import * as THREE from "three";
import { Position } from "geojson";
import { Group } from "three";
import worldJson from "../world.json";

export default class {

    public allLine: Group[];

    public allArea: Group;

    constructor() {
        this.allArea = new Group();
        this.allLine = [];
        this.init()
    }

    init() {
        worldJson.features.forEach(country => {
            // 单轮廓国家
            if (country.geometry.type === "Polygon") {
                const positions = country.geometry.coordinates.flat();
                this.allArea.add(this.creatAreaMesh(positions, country.properties.name))
                this.allLine.push(this.createLine(positions, country.properties.name))
            } else {
                // 多个轮廓国家 中国-台湾
                const multiPositions = country.geometry.coordinates;
                for (let j = 0; j < multiPositions.length; j++) {
                    const positions = multiPositions[j];
                    for (let i = 0; i < positions.length; i++) {
                        this.allArea.add(this.creatAreaMesh(positions[i], country.properties.name));
                        this.allLine.push(this.createLine(positions[i], country.properties.name))
                    }
                }
            }
        });
    }

    // 创建国家区域面
    creatAreaMesh (positions, name) {
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
    createLine(positions: Position[], countryName: string) {
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

    getCountry() {
        return [this.allArea, ...this.allLine]
    }

    getCountryArea() {
        return this.allArea
    }
}
