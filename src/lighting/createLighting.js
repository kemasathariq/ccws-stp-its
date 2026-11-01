import * as THREE from 'three';

export function createLighting(scene) {
  const hemisphere = new THREE.HemisphereLight(0xe7f1ff, 0x8b8072, 1.15);
  hemisphere.name = 'AmbientSkyFill';
  scene.add(hemisphere);

  const sun = new THREE.DirectionalLight(0xfff0d6, 2.0);
  sun.name = 'ExteriorDirectionalLight';
  sun.position.set(-12, 18, -8);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = -25;
  sun.shadow.camera.right = 25;
  sun.shadow.camera.top = 25;
  sun.shadow.camera.bottom = -25;
  scene.add(sun);
  scene.add(sun.target);

  const interiorFill = new THREE.PointLight(0xffd7a1, 16, 22, 2);
  interiorFill.name = 'InteriorWarmFill';
  interiorFill.position.set(0, 4, 0);
  scene.add(interiorFill);

  return { hemisphere, sun, interiorFill };
}
