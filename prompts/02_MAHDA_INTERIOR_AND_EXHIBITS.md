# Claude Code Prompt 02 — Mahda: Interior and Exhibits

You are implementing Mahda's workstream in the `ccws-stp-its` repository. Read `CLAUDE.md`, `docs/PROJECT_PLAN.md`, `docs/SITE_EVIDENCE_AND_ASSUMPTIONS.md`, `docs/FLOOR_PLAN.md`, `docs/COORDINATE_SYSTEM.md`, `docs/SCENE_GRAPH.md`, `docs/INTEGRATION_CONTRACT.md`, and `docs/INTERACTION_SPEC.md` first.

## Ownership

You own:
- `src/models/environment/interior.js`
- `src/models/exhibits/train.js`
- `src/models/exhibits/motorcycle.js`
- `src/models/furniture/**` (create when needed)
- `src/models/cafe/**` (create when needed)
- Reference media collection and model-specific asset register rows.

Do not edit Member A's `src/core/**`, `exterior.js`, `robotArm.js`, shared lighting module, or shared UI without coordination. Do not alter the shared module contract.

## Part A — Interior architecture

Use the supplied interior photograph as the primary reference. Model:
- room floor and high ceiling volume;
- structural beams and visible ceiling elements;
- high-level window band and lower window groups;
- large window frames and mullions;
- representative tables, chairs, sofas, and counter;
- cafe/snack counter, shelves, and a few recognizable equipment/product shapes.

Prioritize room proportions, window rhythm, and furniture arrangement. Do not over-model tiny products before the room reads correctly. Use repeatable furniture factory functions and separate materials for wood, fabric, painted metal, and glass.

## Part B — Train exhibit

Model only the visible exhibit segment supported by the supplied photo. Preserve the large white carriage body, red upper panel/roof band, dark windows, visible door/panel, and readable label details where legible. Do not invent a route, operator, or official branding. The reference visibly contains the text `HST JAKARTA`; keep the neutral label “Train Exhibit” unless the team verifies the identity onsite.

Expose one or two interactions only if the geometry supports them, for example selected-object information, a destination display toggle, or sliding doors if doors are actually visible/confirmed.

## Part C — Electric motorcycle

Build a simplified but recognizable electric motorcycle:
- frame/chassis;
- main body panels;
- seat;
- front fork/handlebar assembly;
- front and rear wheel pivots;
- tires and rims;
- dashboard/headlight details if visible in the actual reference.

Requirements:
- Wheel pivots must be separate children and spin without moving the chassis.
- Implement a power toggle or `setPowered(boolean)` method.
- Use delta-time-based wheel animation.
- The two wheels must rotate around their own local axle orientation.
- Add interaction metadata to the model root/body.

## Part D — textures and evidence

- Add UV mapping and texture loading where useful.
- Keep image sizes optimized and use local files in `public/assets/textures/`.
- Record every external asset source and permission in `docs/ASSET_REGISTER.md`.
- Help capture an original walkthrough video and additional onsite angles. Do not use generated pictures as original site evidence.

## Required factory interface

Every model must return:

```js
{
  group: THREE.Group,
  update(deltaSeconds, state) {},
  interactiveTargets: THREE.Object3D[],
  dispose() {}
}
```

Keep all children under the returned root group. Do not create a camera, renderer, or animation loop in a model file.

## Quality gates

- Match the team's coordinate convention.
- Ensure the model module integrates without changing the renderer.
- Use reusable functions for repeated chairs/windows/wheels.
- `npm run build` must pass.
- Provide screenshots of interior, train, and motorcycle.
- Update docs with actual pivots, assumed dimensions, and remaining uncertainties.

Before coding, list planned files and implementation order. After coding, list files changed and the build/test result.
