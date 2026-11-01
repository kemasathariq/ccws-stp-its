import * as THREE from 'three';

/**
 * Shared raycasting helper. Interactive meshes should define userData.interaction.
 * This is a small starter utility; connect it to the UI after model modules expose
 * their interactiveTargets arrays.
 */
export class InteractionManager {
  constructor(camera, domElement) {
    this.camera = camera;
    this.domElement = domElement;
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.targets = [];
    this.onPointerDown = this.onPointerDown.bind(this);
    domElement.addEventListener('pointerdown', this.onPointerDown);
  }

  setTargets(targets) {
    this.targets = targets.filter(Boolean);
  }

  onPointerDown(event) {
    if (!this.targets.length) return;
    const rect = this.domElement.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects(this.targets, true);
    const hit = hits.find((item) => item.object.userData.interaction);
    if (hit) {
      this.domElement.dispatchEvent(new CustomEvent('ccws:object-selected', {
        detail: { object: hit.object, interaction: hit.object.userData.interaction },
      }));
    }
  }

  dispose() {
    this.domElement.removeEventListener('pointerdown', this.onPointerDown);
  }
}
