# Claude Code Prompt 03 — Integration and Quality Assurance

Read `CLAUDE.md` and all project documents before integrating. Treat both member branches as independent deliverables and preserve their ownership boundaries.

## Goals

1. Integrate Member A's exterior/core/robot modules with Mahda's interior/train/motorcycle modules.
2. Preserve the public model factory interface.
3. Place all modules relative to the agreed world origin and coordinate convention.
4. Add selected-object information and connect the robot/motorcycle controls.
5. Ensure reference photos appear next to the canvas and the original walkthrough video appears after the team adds it.
6. Ensure the scene hierarchy and task division are documented and consistent with code.

## Integration checklist

- [ ] `npm ci` installs exact dependencies from the committed lockfile.
- [ ] `npm run dev` starts successfully.
- [ ] `npm run build` succeeds.
- [ ] No console errors or failed asset requests.
- [ ] Renderer, camera, and controls initialize once.
- [ ] Orbit mode works.
- [ ] Walk mode pointer-lock and WASD work; Escape releases pointer.
- [ ] Scene resizes correctly.
- [ ] Exterior, room, furniture, cafe, train, motorcycle, and robot arm are all visible and correctly oriented.
- [ ] Child meshes follow parent transformations.
- [ ] Robot joints move independently.
- [ ] Gripper opens and closes symmetrically.
- [ ] Pick/release works without object teleportation.
- [ ] Motorcycle wheels spin while chassis remains still.
- [ ] Lighting and materials are visibly distinct.
- [ ] At least three texture/material classes are demonstrated.
- [ ] Reference gallery loads all four supplied photos.
- [ ] Original video placeholder is replaced when team recording is available.
- [ ] `docs/SCENE_GRAPH.md`, `docs/TASK_DIVISION.md`, `docs/ASSET_REGISTER.md`, and demo notes match actual implementation.

## Visual comparison

Compare the rendered scene to source photos in this order:
1. building silhouette and facade opening positions;
2. interior proportions and window locations;
3. furniture and counter placement;
4. exhibit position and broad silhouette;
5. materials, lights, and smaller details.

Do not optimize decorative details while major layout mismatches remain.

## Deliverables from this pass

- Fixed integrated application.
- Updated docs.
- A short QA report with pass/fail per checklist item.
- Screenshots of exterior, interior, exhibit, and robot interaction.
- Known limitations and any assumptions still requiring onsite confirmation.

Never mark a checklist item as passed unless it has been tested.
