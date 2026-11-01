import * as THREE from 'three';
import { BUILDING_LAYOUT } from '../../scene/layoutConfig.js';

/** Member A owns the final exterior reconstruction. This is only a blockout. */
export function createExterior() {
  const group = new THREE.Group();
  group.name = 'Exterior_Blockout';
  const { footprintWidth: w, footprintDepth: d, wallHeight: h, wallThickness: t } = BUILDING_LAYOUT;
  const white = new THREE.MeshStandardMaterial({ color: 0xe6e5df, roughness: 0.9 });
  const concrete = new THREE.MeshStandardMaterial({ color: 0xaaa9a1, roughness: 0.95 });
  const ground = new THREE.Mesh(new THREE.BoxGeometry(w + 8, 0.2, d + 8), concrete);
  ground.position.y = -0.11;
  ground.receiveShadow = true;
  group.add(ground);

  const floor = new THREE.Mesh(new THREE.BoxGeometry(w, 0.18, d), white);
  floor.position.y = 0.02;
  floor.receiveShadow = true;
  group.add(floor);

  const rear = new THREE.Mesh(new THREE.BoxGeometry(w, h, t), white);
  rear.position.set(0, h / 2, d / 2 - t / 2);
  rear.castShadow = true;
  group.add(rear);

  const left = new THREE.Mesh(new THREE.BoxGeometry(t, h, d), white);
  left.position.set(-w / 2 + t / 2, h / 2, 0);
  group.add(left);
  const right = left.clone();
  right.position.x = w / 2 - t / 2;
  group.add(right);

  const frontLeft = new THREE.Mesh(new THREE.BoxGeometry((w - BUILDING_LAYOUT.entranceWidth) / 2, h, t), white);
  frontLeft.position.set(-(w + BUILDING_LAYOUT.entranceWidth) / 4, h / 2, -d / 2 + t / 2);
  group.add(frontLeft);
  const frontRight = frontLeft.clone();
  frontRight.position.x = (w + BUILDING_LAYOUT.entranceWidth) / 4;
  group.add(frontRight);

  const lintel = new THREE.Mesh(new THREE.BoxGeometry(BUILDING_LAYOUT.entranceWidth, h - BUILDING_LAYOUT.entranceHeight, t), white);
  lintel.position.set(0, BUILDING_LAYOUT.entranceHeight + (h - BUILDING_LAYOUT.entranceHeight) / 2, -d / 2 + t / 2);
  group.add(lintel);

  const roof = new THREE.Mesh(new THREE.BoxGeometry(w, 0.3, d), white);
  roof.position.y = h + 0.15;
  roof.castShadow = true;
  group.add(roof);

  return { group, update() {}, interactiveTargets: [], dispose() {} };
}
