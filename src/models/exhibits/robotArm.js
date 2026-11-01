import * as THREE from 'three';

/**
 * Member A owns this model. The current group is intentionally a placeholder.
 * Final hierarchy must use separate pivot groups for base yaw, shoulder, elbow,
 * wrist, and gripper fingers. See docs/SCENE_GRAPH.md.
 */
export function createRobotArm() {
  const group = new THREE.Group();
  group.name = 'RobotArm_Placeholder';
  const material = new THREE.MeshStandardMaterial({ color: 0x2d6670, metalness: 0.65, roughness: 0.34 });
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.8, 0.35, 20), material);
  base.position.set(4.5, 0.42, 1.0);
  base.castShadow = true;
  group.add(base);
  const marker = new THREE.Mesh(new THREE.BoxGeometry(0.55, 2.0, 0.55), material);
  marker.position.set(4.5, 1.55, 1.0);
  marker.castShadow = true;
  group.add(marker);
  return { group, update() {}, interactiveTargets: [base, marker], dispose() {} };
}
