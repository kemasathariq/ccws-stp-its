# Claude Code Prompt 01 — Member A: Core, Exterior, Robot Arm

You are implementing Member A's workstream. Read `CLAUDE.md`, `docs/PROJECT_PLAN.md`, `docs/COORDINATE_SYSTEM.md`, `docs/SCENE_GRAPH.md`, `docs/INTEGRATION_CONTRACT.md`, `docs/INTERACTION_SPEC.md`, and `docs/TASK_DIVISION.md` first.

## Ownership

You own:
- `src/core/**`
- `src/scene/layoutConfig.js`
- `src/scene/SceneRegistry.js`
- `src/models/environment/exterior.js`
- `src/models/exhibits/robotArm.js`
- `src/lighting/**`
- `src/ui/bindUI.js`

Do not modify Mahda's `interior.js`, `train.js`, `motorcycle.js`, furniture, or cafe modules. Avoid editing shared files unless the API must change; document the proposed change first.

## Part A — Exterior

Build a recognizable low-to-medium-detail facade based on the supplied photos:
- White/light-gray architectural massing.
- Main entry recess and steps/platform.
- Window bands and repeated window frames.
- Roof/overhang and visible structural frames.
- Co-working sign as 3D letters or a clean label mesh if the text placement is visible.
- Paved forecourt and a small number of vegetation meshes.

Do not invent exact dimensions. Keep estimates in `layoutConfig.js` and mark them provisional. Build reusable helper functions for repeated windows, frames, and facade modules. Use separate materials for plaster/concrete, dark window glass, painted trim, and paving.

## Part B — Robot arm

Implement real hierarchy using nested `THREE.Group` pivots:
1. static base;
2. base yaw pivot;
3. rotating platform;
4. shoulder pivot and upper arm;
5. elbow pivot and forearm;
6. wrist pivot;
7. gripper palm;
8. two mirrored finger pivots.

Requirements:
- Keep joint pivots at the correct mechanical joint centers.
- Provide a state object with base, shoulder, elbow, wrist, and gripper values.
- Store angles in radians, clamp configured limits, and expose UI values in degrees.
- Make parent movement propagate to descendants.
- Make gripper fingers open/close symmetrically.
- Add one small pickable box.
- Implement pick/release by attaching/detaching the object while preserving its world pose. Document the chosen approach.
- Put interaction metadata on the robot and pickable object.
- Use update(deltaSeconds, state) for animation.

## Part C — controls and lighting

- Connect sliders/buttons without coupling model code to DOM code.
- Add an explicit power/enable state only where needed.
- Create an exterior directional light, ambient/hemisphere fill, indoor warm fill, and a few exhibit spotlights. Place lights based on the conceptual zones but make placements configurable.
- Shadows should be selective and performant.

## Quality gates

- Respect the integration contract.
- No magic numbers scattered across the code.
- No private render loops.
- No Three.js APIs that do not exist in the installed version.
- `npm run build` must pass.
- Provide a screenshot or short screen recording of exterior and robot interaction.
- Update `docs/SCENE_GRAPH.md`, `docs/INTERACTION_SPEC.md`, and `docs/DEMO_AND_CHALLENGE_PLAN.md` to match actual code.

Before coding, list planned files and implementation order. After coding, summarize the exact files changed and commands/tests run.
