# Claude Code Project Instructions

## Project identity

Build **CCWS STP ITS — Interactive 3D Environment**, a browser-based 3D reconstruction of the co-working building and selected innovation exhibits shown in the team's supplied photographs.

## Locked decisions

- Three.js with `THREE.WebGLRenderer`, not Canvas 2D and not a raw-WebGL-only implementation.
- Vite + vanilla JavaScript ES modules.
- Orbit camera and first-person walkthrough camera.
- Full robot arm: base yaw, shoulder, elbow, wrist, gripper fingers, and basic object pick/release.
- Balanced scope within a three-week deadline.
- Two team members: Member A (user) and Mahda.

## Assignment risk that must not be hidden

The assignment sheet says WebGL, but does not explicitly say whether a higher-level library is allowed. Three.js uses WebGL through `WebGLRenderer`, but abstracts much of the low-level WebGL API. Do not claim that this is raw/pure WebGL. Keep this issue documented and remind the team to obtain lecturer approval. Do not silently switch libraries.

## Mandatory source-of-truth rules

1. Read `docs/PROJECT_PLAN.md`, `docs/REQUIREMENTS_TRACEABILITY.md`, `docs/SITE_EVIDENCE_AND_ASSUMPTIONS.md`, `docs/FLOOR_PLAN.md`, `docs/COORDINATE_SYSTEM.md`, `docs/SCENE_GRAPH.md`, `docs/COURSE_CONCEPT_MAPPING.md`, and `docs/INTEGRATION_CONTRACT.md` before substantial implementation.
2. Treat files in `public/assets/references/photos/` as the primary visual references supplied by the team.
3. The initial floor plan is conceptual and unverified. Never invent measured dimensions, room positions, product labels, or official exhibit identities. Mark unknowns as TODOs and place adjustable dimensions in `layoutConfig.js`.
4. The visible train photograph reads `HST JAKARTA` and appears to show an exhibition/display segment. Do not call it an official Whoosh exhibit unless the team confirms it onsite or with a reliable source.
5. Do not use AI-generated images as if they were original site photographs. The 3D geometry must be created in code. Textures may use the team's own photos or assets whose usage is permitted and recorded in `docs/ASSET_REGISTER.md`.

## Engineering rules

- Keep the code modular, readable, commented where transformations or interaction logic are non-obvious.
- Use ES modules and named exports.
- Use Three.js APIs from the installed version. Do not invent methods. Verify uncertain APIs against official docs or installed package typings/source.
- Keep all dimensions and placements adjustable through configuration objects; avoid scattering magic numbers.
- Use meters as the intended modelling unit, with all dimensions marked as estimates until measured onsite.
- Coordinate convention: X = building width, Y = up, Z = building depth. Ground plane is Y=0. Building footprint is centered at the world origin. The main/front façade is the negative-Z side unless the team updates this convention in `docs/COORDINATE_SYSTEM.md`.
- Use `THREE.Group` as the parent-child hierarchy. A child's local transform must be relative to its parent.
- Prefer reusable geometry/material helpers. Dispose of geometries, materials, and textures when modules are removed.
- Use `requestAnimationFrame` or `renderer.setAnimationLoop` consistently. Use delta time for motion so animation speed is independent of frame rate.
- Resize renderer and camera aspect ratio when the viewport changes.
- Enable depth testing through the normal Three.js renderer pipeline; use shadows selectively to protect performance.
- Keep OrbitControls and PointerLockControls in the core camera module, not inside an individual model.
- Use raycasting for object selection. Interactive meshes should carry descriptive `userData` fields.
- Build the robot arm with pivot groups at joints. Do not rotate the whole arm mesh to simulate separate joints.
- Motorcycle wheels must rotate around their local axle pivots without rotating the chassis.
- Do not use global mutable state where a module API can be used instead.
- Do not add a dependency without explaining why and updating this file and README.
- Do not commit generated build artifacts or `node_modules`.

## Integration contract

Every model module should export a factory returning this shape:

```js
{
  group: THREE.Group,
  update(deltaSeconds, state) {},
  interactiveTargets: THREE.Object3D[],
  dispose() {}
}
```

The factory should accept a configuration object. Keep this interface consistent with `docs/INTEGRATION_CONTRACT.md`.

## Collaboration boundaries

- Member A owns `src/core/`, `src/scene/layoutConfig.js`, `src/scene/SceneRegistry.js`, `src/models/environment/exterior.js`, `src/models/exhibits/robotArm.js`, `src/lighting/`, and `src/ui/bindUI.js`.
- Mahda owns `src/models/environment/interior.js`, `src/models/exhibits/train.js`, `src/models/exhibits/motorcycle.js`, and may add `src/models/furniture/` and `src/models/cafe/` modules.
- Shared files such as `src/main.js`, `src/scene/createWorld.js`, `index.html`, `package.json`, `docs/INTEGRATION_CONTRACT.md`, and global CSS must be changed only by agreement or through a coordinated integration step.
- Avoid editing the other member's owned modules. If a change is needed, describe the required interface change and ask for coordination.

## Definition of done for every change

1. App starts with `npm run dev`.
2. `npm run build` succeeds.
3. No console errors or missing asset requests.
4. The model respects the coordinate system and its parent transform.
5. The model module follows the integration contract.
6. New interactions are keyboard/mouse accessible where practical and have visible feedback.
7. Docs and task status are updated.
8. Any unverified real-site assumption is explicitly identified.

## Claude Code working style

- First inspect the existing repository; do not overwrite user assets or completed work.
- Before editing, provide a short plan and identify files to be changed.
- Implement in small coherent steps.
- Run the build after implementation and fix errors.
- Do not state that an interaction works unless it has been implemented and tested.
- If blocked by missing measurements or photos, create configurable placeholders and document exactly what the team must verify.
