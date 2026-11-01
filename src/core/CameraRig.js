import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

export class CameraRig {
  constructor(camera, domElement, host) {
    this.camera = camera;
    this.domElement = domElement;
    this.host = host;
    this.mode = 'orbit';
    this.keys = new Set();
    this.moveSpeed = 4.2;
    this.initialPosition = new THREE.Vector3(15, 10, 18);
    this.initialTarget = new THREE.Vector3(0, 2, 0);

    camera.position.copy(this.initialPosition);
    this.orbit = new OrbitControls(camera, domElement);
    this.orbit.target.copy(this.initialTarget);
    this.orbit.enableDamping = true;
    this.orbit.dampingFactor = 0.06;
    this.orbit.maxPolarAngle = Math.PI * 0.49;
    this.orbit.minDistance = 3;
    this.orbit.maxDistance = 70;

    this.walk = new PointerLockControls(camera, domElement);
    this.walk.pointerSpeed = 0.75;

    this.onKeyDown = (event) => {
      if (['KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(event.code)) {
        this.keys.add(event.code);
        if (this.mode === 'walk') event.preventDefault();
      }
    };
    this.onKeyUp = (event) => this.keys.delete(event.code);
    this.onCanvasClick = () => {
      if (this.mode === 'walk' && !this.walk.isLocked) this.walk.lock();
    };
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    domElement.addEventListener('click', this.onCanvasClick);
  }

  setMode(mode) {
    if (!['orbit', 'walk'].includes(mode)) return;
    this.mode = mode;
    this.keys.clear();
    if (mode === 'orbit') {
      if (this.walk.isLocked) this.walk.unlock();
      this.orbit.enabled = true;
    } else {
      this.orbit.enabled = false;
      // Start just outside the provisional front facade, facing into the scene.
      this.camera.position.set(0, 1.65, -11.5);
      this.camera.lookAt(0, 1.65, 0);
      // Walk controls lock after the user clicks the canvas.
    }
  }

  update(delta) {
    if (this.mode === 'orbit') {
      this.orbit.update();
      return;
    }
    if (!this.walk.isLocked) return;

    const distance = this.moveSpeed * delta;
    if (this.keys.has('KeyW')) this.walk.moveForward(distance);
    if (this.keys.has('KeyS')) this.walk.moveForward(-distance);
    if (this.keys.has('KeyA')) this.walk.moveRight(-distance);
    if (this.keys.has('KeyD')) this.walk.moveRight(distance);
    // Keep a stable walking eye height for this initial prototype.
    this.camera.position.y = 1.65;
  }

  reset() {
    if (this.walk.isLocked) this.walk.unlock();
    this.mode = 'orbit';
    this.keys.clear();
    this.camera.position.copy(this.initialPosition);
    this.orbit.target.copy(this.initialTarget);
    this.orbit.enabled = true;
    this.orbit.update();
  }

  dispose() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    this.domElement.removeEventListener('click', this.onCanvasClick);
    this.orbit.dispose();
    this.walk.disconnect();
  }
}
