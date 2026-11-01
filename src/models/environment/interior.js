import * as THREE from 'three';

/** Mahda owns the detailed interior. Keep all objects inside this root group. */
export function createInterior() {
  const group = new THREE.Group();
  group.name = 'Interior_Blockout';
  const floorMat = new THREE.MeshStandardMaterial({ color: 0xc6b69e, roughness: 0.82 });
  const padMat = new THREE.MeshStandardMaterial({ color: 0xd6ddd7, roughness: 0.9 });
  const zoneA = new THREE.Mesh(new THREE.BoxGeometry(8.7, 0.035, 10.5), padMat);
  zoneA.position.set(-4.5, 0.12, 0);
  zoneA.name = 'CoworkingZonePlaceholder';
  const zoneB = new THREE.Mesh(new THREE.BoxGeometry(8.7, 0.035, 10.5), floorMat);
  zoneB.position.set(4.5, 0.12, 0);
  zoneB.name = 'ExhibitionZonePlaceholder';
  group.add(zoneA, zoneB);
  return { group, update() {}, interactiveTargets: [], dispose() {} };
}
