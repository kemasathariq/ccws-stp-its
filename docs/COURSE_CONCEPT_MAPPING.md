# Course Concept Mapping — Three.js Implementation

This guide maps the lecturer's topics to where the project demonstrates them. Three.js automates a number of lower-level graphics operations, so distinguish the conceptual pipeline from the library API used.

| Course topic | Three.js implementation | Where to explain it |
|---|---|---|
| 3D coordinate and mesh | BufferGeometry, Mesh, vertices/faces | Geometry/model modules |
| Transformations | Object3D.position, rotation, scale, local matrix | Building, wheel pivots, robot joints |
| Local/world coordinates | Object3D.matrix and matrixWorld | Scene graph and robot hierarchy |
| Camera / view | PerspectiveCamera and controls | CameraRig |
| Projection | PerspectiveCamera projection matrix | CameraRig and renderer explanation |
| MVP pipeline | Three.js renderer applies model-view-projection transforms internally | Explain conceptual MVP; do not claim it is hand-coded in this project |
| Depth buffer | WebGLRenderer depth buffer and scene rendering | Rendering setup |
| Normal vectors | Geometry normals and material shading | Mesh geometry and lighting |
| Phong-style lighting | MeshPhongMaterial if selected; otherwise explain the chosen Standard material's PBR model | Lighting/material demo |
| UV mapping | Geometry UV attributes and TextureLoader | Textured floor/wall/object models |
| Texture sampling | Texture min/mag filters, wrapping and color space | Asset loading and material setup |
| Hierarchical modelling | Nested THREE.Group objects | Robot arm and vehicle assemblies |
| Animation | update(deltaSeconds), renderer loop | Robot joints and motorcycle wheels |
| Picking | Raycaster | InteractionManager |

## Important educational honesty

Three.js handles buffer creation, shader program setup, rasterization calls, and the full MVP application internally. Do not claim to have written raw GLSL shaders or manually built WebGL buffers unless that code is actually added. If the lecturer asks for raw WebGL implementation, confirm whether Three.js is accepted before continuing.

## Demonstration checklist

- Show a child object moving because its parent pivot rotates.
- Show an independently rotating motorcycle wheel.
- Explain camera eye/target and perspective projection.
- Explain why surface normals matter for lighting.
- Show how UV coordinates map an image texture to a surface.
- Explain how raycasting determines which object was clicked.
