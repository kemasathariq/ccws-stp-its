# Integration Contract

This contract allows Member A and Mahda to develop models in parallel without editing the same files.

## Model factory interface

Every independently owned model exports a named factory and returns:

```js
{
  group: THREE.Group,
  update(deltaSeconds, state) {},
  interactiveTargets: THREE.Object3D[],
  dispose() {}
}
```

A model may expose extra methods, such as `setPowered(boolean)` or `setJointAngle(name, radians)`, but must retain the common interface above.

## Factory signature

```js
export function createExampleModel(config = {}) {
  const group = new THREE.Group();
  const interactiveTargets = [];

  function update(deltaSeconds, state = {}) {
    // Update animation using deltaSeconds. Do not assume a fixed FPS.
  }

  function dispose() {
    // Dispose geometries/materials/textures created exclusively by this model.
  }

  return { group, update, interactiveTargets, dispose };
}
```

## Rules

1. The caller adds `module.group` to the world/scene registry. Model factories should not directly mutate the global scene.
2. All child components must be parented below the model's root group.
3. Model root should be at a documented local origin. The integrator controls world placement through the root group.
4. Do not create a new renderer or camera inside a model module.
5. Do not create a private animation loop. Use the provided `update(deltaSeconds, state)` method.
6. Interactive meshes should include descriptive `userData`, for example:

```js
mesh.userData.interaction = {
  id: 'robot-arm-gripper',
  title: 'Robot arm gripper',
  description: 'Opens and closes to hold a small object.',
  action: 'select-robot-arm'
};
```

7. Interactive targets should be returned in `interactiveTargets`.
8. Do not import UI components into model code. UI calls model methods through a controller/interface.
9. Use shared materials only if ownership/lifecycle is clear. Avoid disposing a material still used by another model.
10. Update this contract only after both members agree.

## Ownership boundaries

| File/folder | Owner |
|---|---|
| `src/core/**` | Member A |
| `src/scene/layoutConfig.js` | Member A |
| `src/scene/SceneRegistry.js` | Member A |
| `src/scene/createWorld.js` | Shared; integration owner Member A |
| `src/models/environment/exterior.js` | Member A |
| `src/models/exhibits/robotArm.js` | Member A |
| `src/models/environment/interior.js` | Mahda |
| `src/models/exhibits/train.js` | Mahda |
| `src/models/exhibits/motorcycle.js` | Mahda |
| `src/models/furniture/**` | Mahda |
| `src/models/cafe/**` | Mahda |
| `src/lighting/**` | Member A, input from Mahda |
| `src/ui/**` | Member A; Mahda provides interaction requirements |
| `index.html`, `src/main.js`, `package.json`, `docs/INTEGRATION_CONTRACT.md` | Shared; coordinate before edits |
