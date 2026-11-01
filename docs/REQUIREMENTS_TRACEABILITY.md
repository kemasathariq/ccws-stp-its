# Requirements Traceability

This table maps the provided Tugas 2 document to project artifacts and verification.

| Assignment requirement | Planned implementation | Evidence / verification |
|---|---|---|
| Make an animated scene from objects around ITS | CCWS STP building, interior, cafe, exhibits | App walkthrough and model comparison |
| Use WebGL | Three.js `WebGLRenderer` | Runtime renderer creation and browser WebGL support |
| Transformations | Object3D position, rotation, scale, local/world matrices | Explain a model and robot joint transforms |
| Camera | Perspective camera, OrbitControls, PointerLockControls | Demonstrate both modes |
| Lighting | Hemisphere, directional, point/spot lights; material response | Show facade and indoor exhibit lighting |
| Texture | TextureLoader, UV mapping, texture settings | Demonstrate at least 3 surface types |
| Hierarchical modelling | Groups and parent-child pivots for robot arm, wheels, train components | Scene graph diagram and live joint demo |
| Group name | Main page header | Screenshot |
| Original photos | `public/assets/references/photos/` | Main page gallery |
| Original video | `public/assets/references/videos/site-walkthrough.mp4` | Video element or linked local recording |
| Canvas near reference | Main page two-column presentation and reference gallery | Browser screenshot |
| Design tree of relationships | `docs/SCENE_GRAPH.md` and diagram in submission | Diagram in docs/page |
| Task division | `docs/TASK_DIVISION.md` | Main page or documentation |
| Complexity | Multiple models and interactive objects | Live demo |
| Similarity to real | Photographic references and onsite measurement | Side-by-side comparisons |
| Division | Two independently owned module tracks | Git history and task matrix |
| Ability to explain / handle challenges | `docs/DEMO_AND_CHALLENGE_PLAN.md` | Individual live responses |

## Important interpretation

The assignment sheet says WebGL. Three.js can use WebGL through `WebGLRenderer`, but it is not a raw-WebGL implementation. Ask the lecturer to confirm acceptance. If the answer is no, this repository requires a technical redesign, not a superficial wording change.
