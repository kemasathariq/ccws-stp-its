import * as THREE from 'three';
import { SceneRegistry } from './SceneRegistry.js';
import { createLighting } from '../lighting/createLighting.js';
import { createExterior } from '../models/environment/exterior.js';
import { createInterior } from '../models/environment/interior.js';
import { createRobotArm } from '../models/exhibits/robotArm.js';
import { createMotorcycle } from '../models/exhibits/motorcycle.js';
import { createTrain } from '../models/exhibits/train.js';

export function createWorld() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xcbd8d7);
  scene.fog = new THREE.Fog(0xcbd8d7, 38, 95);

  const world = new THREE.Group();
  world.name = 'CCWS_STP_World';
  scene.add(world);
  createLighting(scene);

  const registry = new SceneRegistry(world);
  registry.register(createExterior(), 'Exterior');
  registry.register(createInterior(), 'Interior');
  registry.register(createRobotArm(), 'RobotArm');
  registry.register(createMotorcycle(), 'Motorcycle');
  registry.register(createTrain(), 'TrainExhibit');

  return {
    scene,
    world,
    updateModules: (delta, state) => registry.update(delta, state),
    disposeModules: () => registry.dispose(),
  };
}
