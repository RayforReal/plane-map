import { Line, Vector3, Points } from "three";
import * as THREE from "three";

export default class {
    public line: Line[];

    public playPoints: Points[];

    public time: { value: number };

    constructor(position) {
        this.line = []
        this.playPoints = []
        this.time = { value: 0 }
        position.forEach(item => {
            this.creatFly(item);
        })
    }

    creatFly(position) {
        // 起始点
        const soure = new THREE.Vector3(
            position.from.lat,
            position.from.lon,
            0
        )
        // 终止点
        const target = new THREE.Vector3(
            position.to.lat,
            position.to.lon,
            0
        )
        // 获取中心点
        const center = soure.clone().lerp(target, 0.5)
        center.z = 100
        // 起点到终点的距离
        const length = Math.round(soure.distanceTo(target));
        // 添加贝塞尔曲线运动
        const curve = new THREE.QuadraticBezierCurve3(
            soure,
            center,
            target
        );
        const points = curve.getPoints(length * 2);
        // 粒子运动
        this.playPoint(points, length * 2)
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({ color: 0x888888 });
        this.line.push(new THREE.Line(geometry, material));
    }

    playPoint(points:Vector3[], length:number) {
        const positions = []
        const aPositions = []
        points.forEach((item, index) => {
            positions.push(item.x, item.y, item.z)
            aPositions.push(index)
        })
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
        geometry.setAttribute('a_position', new THREE.Float32BufferAttribute(aPositions, 1))
        const material = new THREE.ShaderMaterial({
            uniforms: {
                u_range: { value: 100 },
                u_size: { value: 20 },
                u_color: { value: new THREE.Color('#00bbff') },
                u_total: { value: length },
                u_time: this.time
            },
            vertexShader: `
        attribute float a_position;
        
        uniform float u_time;
        uniform float u_size;
        uniform float u_range;
        uniform float u_total;
      
        varying float v_opacity;
        
        void main() {
           float size = u_size;
           float total_number = u_total * mod(u_time, 1.0);
           
           if (total_number > a_position && total_number < a_position + u_range) {
           
             // 拖尾效果
             float index = (a_position + u_range - total_number) / u_range;
             size *= index;
             
             
             v_opacity = 1.0;
           } else {
             v_opacity = 0.0;
           }
           
           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
           gl_PointSize = size / 10.0;
        }
      `,
            fragmentShader: `
        uniform vec3 u_color;
        varying float v_opacity;
        
        void main() {
          gl_FragColor = vec4(u_color, v_opacity);
        }
      `
        });
        this.playPoints.push(new THREE.Points(geometry, material))
    }

    getLine() {
        return this.line;
    }

    getPlayPoints() {
        return this.playPoints;
    }

    setTime(time) {
        this.time.value += time
    }
}
