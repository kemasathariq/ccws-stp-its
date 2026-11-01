# Demo and Lecturer Challenge Plan

## Suggested 3–4 minute walkthrough

1. **Reference and objective (20 seconds):** introduce CCWS STP ITS and show original exterior/interior photos beside the model.
2. **Exterior camera (30 seconds):** orbit around the building, identify the entrance, facade, windows, signage, and surroundings.
3. **Interior walkthrough (30 seconds):** switch to first-person mode and move through the collaborative and exhibition zones.
4. **Robot arm (60 seconds):** rotate base, shoulder, elbow, and wrist independently; open/close the gripper; pick and release a small object.
5. **Motorcycle and train (30 seconds):** toggle wheel rotation and show the train exhibit information/animation.
6. **Graphics concepts (40 seconds):** explain hierarchy, camera/projection, lighting, texture, and animation loop.
7. **Team split (20 seconds):** explain independent module ownership and integration interface.

## Questions both members should be able to answer

### Three.js / WebGL
- Why is Three.js being used, and what does `WebGLRenderer` do?
- Which parts does Three.js automate compared with raw WebGL?
- Why did the team ask the lecturer to confirm library acceptability?

### Transformation and hierarchy
- What is the difference between local and world coordinates?
- What happens to child objects when the parent pivot rotates?
- Why is the wheel attached to a wheel pivot rather than directly animated as part of the chassis?
- How does the robot shoulder affect the elbow, forearm, and gripper?

### Camera
- What are camera position, target, and up direction?
- What does perspective projection change when an object is farther away?
- How does OrbitControls differ from a first-person camera controller?

### Lighting and texture
- What is the role of a surface normal?
- What do ambient, diffuse, and specular contributions represent?
- What are UV coordinates?
- Why should rough concrete, glass, wood, and metal use different material settings?

### Animation and interaction
- Why use delta time rather than adding a fixed amount per frame?
- How does raycasting detect which object the user selected?
- How is an object attached to and released from the robot gripper?

## Challenge practice

Each member should be able to make a small live change safely:
- Member A: change one robot joint angle limit or camera starting position and explain the resulting matrix/hierarchy effect.
- Mahda: change a wheel spin rate, train material, or a texture repeat value and explain the change.

Do not memorize answers without understanding the actual implementation. The code and explanation must match.
