import * as THREE from 'three';

/** Mahda owns the final exhibit segment. Identity/details require onsite confirmation. */
export function createTrain() {
  const group = new THREE.Group();
  group.name = 'TrainExhibit_Placeholder';
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xf0eee8, roughness: 0.55 });
  const redMat = new THREE.MeshStandardMaterial({ color: 0xb93149, roughness: 0.5 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(4.2, 1.8, 1.55), bodyMat);
  body.position.set(4.1, 1.7, 4.2);
  body.castShadow = true;
  group.add(body);
  const roof = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.45, 1.55), redMat);
  roof.position.set(4.1, 2.83, 4.2);
  group.add(roof);
  return { group, update() {}, interactiveTargets: [body], dispose() {} };
}
