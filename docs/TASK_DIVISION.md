# Task Division — Member A and Mahda

## Principle

The target is approximately 50/50 in effort. The split is based on two independent workstreams, not identical file counts. Member A owns the rendering foundation, exterior, and most technically demanding articulated mechanism. Mahda owns the detailed interior, café/furnishing set, train exhibit, and motorcycle model. Reassess effort after the first blockout rather than assuming the split is perfectly equal.

## Member A — Core, exterior, robot arm (target 50%)

| Work package | Scope | Deliverable |
|---|---|---|
| Core runtime | renderer, resize, animation loop, camera modes, raycasting | working shared 3D foundation |
| Coordinate/layout contract | world axes, configurable building footprint and zone placements | updated `layoutConfig.js` and docs |
| Exterior | massing, facade, roof/overhang, entry, windows, sign, pavement, vegetation | `exterior.js` and helpers |
| Robot arm geometry | base, pivots, links, wrist, gripper | `robotArm.js` hierarchical model |
| Robot controls | independent joint controls, angle limits, gripper, pick/release simulation | robot controller and UI connection |
| Lighting integration | exterior and indoor light setup, selected exhibit spotlights | lighting module |
| Integration lead | coordinate stable APIs and merge work | integrated build and issue list |

## Mahda — Interior and exhibits (target 50%)

| Work package | Scope | Deliverable |
|---|---|---|
| Interior architecture | floor, wall/window detail, ceiling beams, spatial zoning | `interior.js` |
| Furniture | representative tables, chairs, sofas, table groups | `furniture/` modules |
| Café | counter, shelves, coffee/snack props | `cafe/` modules |
| Train exhibit | visible train segment geometry, color bands, windows, signage details supported by photos | `train.js` |
| Electric motorcycle | frame/body, wheels, handlebar, seat, lighting/dashboard | `motorcycle.js` |
| Vehicle animation | wheel pivots and power state | motorcycle module update/control method |
| References and media | collect extra angles, record original walkthrough video, label photos | assets and asset register entries |
| Model-side documentation | document assumptions, pivots, dimensions, and texture sources | update model docs/asset register |

## Shared tasks (both members)

- Confirm the exact site and get lecturer approval for Three.js.
- Complete onsite measurement and reference capture.
- Review each other's work twice per week.
- Run the build and inspect visual integration.
- Prepare scene graph and final main-page evidence.
- Prepare demo script and answer questions for both modules.

## Branches and merge rules

- `main`: stable deliverable only.
- `develop`: shared integration branch.
- Member A: `feat/member-a-core-exterior-robot`.
- Mahda: `feat/mahda-interior-exhibits`.
- Do not modify the other member's owned modules without coordination.
- Coordinate any edits to `createWorld.js`, `index.html`, `main.js`, `package.json`, or shared CSS before committing.
- Each PR must include a build result and one screenshot or short video of the changed module.

## Progress tracking

Update checkboxes and evidence in this file at least every two days. If one track is behind, reduce decorative detail before reducing the required building, camera, lighting, texture, or interaction scope.
