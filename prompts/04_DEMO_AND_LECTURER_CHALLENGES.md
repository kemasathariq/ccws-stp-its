# Claude Code Prompt 04 — Demo, Explanation, and Lecturer Challenges

Read the final code and project docs. Prepare a concise demonstration guide for both members. Do not invent implementation details or describe planned features as completed.

## Required output

Create/update `docs/FINAL_DEMO_SCRIPT.md` containing:

1. A 3–4 minute demo sequence.
2. A Member A section covering renderer, camera, exterior transforms, robot arm hierarchy, joint state, and pick/release.
3. A Mahda section covering interior geometry, material/texture setup, train exhibit, motorcycle hierarchy, and wheel animation.
4. A scene graph explanation matching actual object parenting.
5. A course mapping for transformations, camera/projection, lighting, texture, animation, and hierarchical modelling.
6. At least eight lecturer challenge questions with correct answers grounded in the source code.
7. Two safe live-change exercises, one per member.
8. A clear list of known limitations and unverified site assumptions.

## Honesty requirements

- Explain that Three.js `WebGLRenderer` uses WebGL but abstracts lower-level WebGL calls.
- Do not claim raw GLSL or manual GPU buffer management unless those are implemented in this repository.
- Do not claim exact building dimensions unless measured.
- Do not call the train a confirmed Whoosh model unless the team verifies it.
- Do not claim the app physically controls real machinery. All controls are a local simulation.
