import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import * as THREE from 'three';
import { Object3D, Scene } from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import countryNameJson from '../countryName.json';

export default class {
    private font: null;

    private scene: Scene;

    private object3D: null | Object3D;

    private textObject3D: null | Object3D;

    constructor(scene: Scene) {
        this.init();
        this.scene = scene
        this.textObject3D = null
        this.font = null;
        this.object3D = null
    }

    init() {
        const loader = new FontLoader(undefined)
        loader.load('../src/assets/font.json',
            font => {
                this.font = font;
            },
            xhr => {
                console.log(`字体加载:${Math.round(xhr.loaded / xhr.total * 100)}%`);
            },
            err => {
                console.log(`An error happened${err}`);
            })
    }

    createTextQueue(text: string) {
        if (!this.font) {
            return;
        }
        const textGeo = new TextGeometry(text, {
            font: this.font,
            size: 3,
            height: 0.2
        });
        const material = new THREE.ShaderMaterial({
            vertexShader: `
                void main() {
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                void main() {
                  gl_FragColor = vec4(0.0,1.0,0.0,1.0);
                }
            `
        })
        this.object3D.geometry.computeBoundingBox()
        const { max, min } = this.object3D.geometry.boundingBox;
        const center = min.clone().lerp(max, 0.5);
        // 让字体显示在国家中间
        textGeo.computeBoundingBox();
        center.x = center.x - 0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x)
        center.y = center.y - 0.5 * (textGeo.boundingBox.max.y - textGeo.boundingBox.min.y)
        this.textObject3D = new THREE.Mesh(textGeo, material);
        // 重置整个场景旋转方向
        this.textObject3D.rotation.x = Math.PI / 5
        this.textObject3D.position.copy(center)
        this.scene.add(this.textObject3D)
    }

    clearTextMesh() {
        if (this.textObject3D) {
            this.scene.remove(this.textObject3D)
            this.textObject3D = null
            this.object3D = null
        }
    }

    createTextMesh(object3D: Object3D) {
        if (object3D.uuid === this.object3D?.uuid) {
            return;
        }
        this.clearTextMesh()
        if (countryNameJson[object3D.name]) {
            this.object3D = object3D;
            this.createTextQueue(countryNameJson[object3D.name])
        }
    }
}
