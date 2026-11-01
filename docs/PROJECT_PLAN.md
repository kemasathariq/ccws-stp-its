# Project Plan — CCWS STP ITS

## 1. Vision

Create a browser-based 3D reconstruction of the CCWS STP ITS environment that lets a visitor inspect the building, understand the relationship between collaborative and exhibition areas, and interact with selected innovation displays.

The project is an educational real-time 3D scene, not an operational facility digital twin. It does not claim measured architectural accuracy or real physical robot control.

## 2. Locked decisions

| Decision | Agreed direction |
|---|---|
| 3D API/library | Three.js with `THREE.WebGLRenderer` |
| Build tool | Vite, vanilla JavaScript modules |
| Camera | Orbit + first-person walkthrough |
| Robot arm | Full articulated joint controls, gripper, pick/release simulation |
| Scope | Balanced; architectural likeness first, interaction second |
| Team | Two people: Member A and Mahda |
| Deadline | Three weeks, per assignment sheet |

## 3. Assignment requirements

The assignment document states: scene around ITS outside Informatics; WebGL; animated objects; main page with group name, original object photos, original object video, application canvas adjacent to photo references, object relationship tree, and task division. Assessment includes complexity, similarity to reality, task division, lighting/texture, explanation, and lecturer challenges.

**Library compatibility risk:** Three.js uses a WebGL renderer but abstracts low-level WebGL operations. The assignment sheet does not explicitly approve or forbid Three.js. Obtain lecturer approval before detailed work. Never describe this implementation as raw WebGL.

## 4. Scope

### Must-have
- Exterior structure and entry facade based on photographs.
- Indoor room shell and windows.
- Main furniture/work tables and chairs.
- Coffee/snack counter as a simplified but recognizable object.
- Exhibition segment with the photographed train display.
- Electric motorcycle with independently rotating wheels and power toggle.
- Articulated robot arm with independently controlled joints and gripper.
- Orbit and first-person camera modes.
- Lighting and multiple material/texture types.
- Raycast-based selection and object information.
- Reference photos, original walkthrough video, scene graph and task allocation shown on the project page or linked documentation.

### Stretch only if the core is complete
- Train door/indicator animation, only if supported by the actual exhibit design.
- Better contact shadows and selected spotlights.
- Small animated visitors, only if time permits.
- More detailed cafe equipment.

### Out of scope
- Full building BIM accuracy.
- Real robotics hardware control.
- Full physical simulation or collision engine.
- Full Whoosh train exterior/track system; model only the exhibit segment visible in the reference, unless further evidence supports a larger model.
- Backend, login, database, or cloud synchronization.

## 5. Success criteria

1. The app starts using `npm run dev` and produces a production build using `npm run build`.
2. The external silhouette, entrance, window rhythm, and main interior/exhibition zones resemble the supplied references.
3. The scene can be explored using both orbit and walkthrough modes.
4. Robot arm joints move independently, the gripper opens/closes, and a basic object can be attached/released.
5. Motorcycle wheels spin without rotating the chassis.
6. At least three visually distinct material/texture types are used, such as plaster/concrete, glass, wood, and metal.
7. Lighting creates a visible difference between outdoor daylight, indoor fill, and exhibit spotlights.
8. Every independent model follows the shared module interface.
9. The main page shows original reference photos and a recorded video, with the canvas close enough for visual comparison.
10. Both members can explain their modules and answer at least one relevant transformation, lighting, texture, or hierarchy challenge.

## 6. Visual priorities

1. Building massing and facade proportions.
2. Room shape, ceiling height, window placement, and room zoning.
3. Train silhouette and exhibition arrangement.
4. Robot arm silhouette and pivot logic.
5. Motorcycle silhouette and wheel placement.
6. Materials, lighting, and small props.

Do not spend time on tiny decorations while major dimensions remain uncertain.

## 7. Main risks

| Risk | Effect | Mitigation |
|---|---|---|
| Three.js not accepted by lecturer | Technology mismatch | Ask before detailed modelling; preserve this decision in docs |
| No measured floor plan | Lower similarity | Do an onsite measurement/photo pass; use parameterized estimates meanwhile |
| Uneven model complexity | Unfair split | Track work by module and review progress twice weekly |
| Merge conflicts | Integration delays | Strict ownership and stable module contract |
| Texture assets unavailable | Flat-looking models | Start with materials; add permitted local textures later |
| Time overrun | Incomplete core | Finish blockout, camera, and essential interactions before polish |
| Incorrect train identity | Inaccurate description | Refer to it neutrally as the train exhibit until verified |

## 8. Deliverables

- Source code repository.
- Main application page with team/group name.
- Supplied original photographs and a new original walkthrough video.
- 3D scene canvas beside reference media.
- Scene hierarchy/tree diagram.
- Explicit Member A / Mahda task split.
- Short screen recording showing navigation and interaction.
- Short technical explanation and challenge answers.
