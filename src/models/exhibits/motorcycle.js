import * as THREE from 'three';

/** Mahda owns the detailed motorcycle and wheel animation. Placeholder only. */
export function createMotorcycle() {
  const group = new THREE.Group();
  group.name = 'Motorcycle_Placeholder';
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x315d68, metalness: 0.45, roughness: 0.42 });
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x202426, roughness: 0.95 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.65, 0.55), bodyMat);
  body.position.set(4.2, 1.0, -2.2);
  body.castShadow = true;
  group.add(body);
  const wheels = [];
  for (const z of [-2.85, -1.55]) {
    const wheelPivot = new THREE.Group();
    wheelPivot.position.set(4.2, 0.58, z);
    const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.43, 0.13, 10, 24), wheelMat);
    wheel.rotation.y = Math.PI / 2;
    wheel.castShadow = true;
    wheelPivot.add(wheel);
    group.add(wheelPivot);
    wheels.push(wheelPivot);
  }
  let powered = false;
  return {
    group,
    update(delta, state = {}) {
      powered = Boolean(state.motorcyclePowered ?? powered);
      if (powered) for (const wheel of wheels) wheel.rotation.x += delta * 5;
    },
    interactiveTargets: [body],
    setPowered(value) { powered = Boolean(value); },
    dispose() {},
  };
}
