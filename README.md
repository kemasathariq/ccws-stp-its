# CCWS STP ITS — Interactive 3D Environment

A two-person course project to reproduce the CCWS STP ITS building and selected interior innovation exhibits as an interactive 3D browser scene.

## Locked project decisions

- **3D library:** Three.js, using `WebGLRenderer`.
- **Build tool:** Vite.
- **Camera:** Orbit mode and first-person walkthrough mode.
- **Robot arm:** Full articulated controls, gripper open/close, and basic pick/release interaction.
- **Scope:** Balanced. Prioritize similarity of the real site, then a small number of clear interactive features.
- **Team:** Member A (you) and Mahda.

## Important assignment compatibility check

The assignment sheet says to implement the scene with WebGL. Three.js renders through WebGL when this project explicitly creates `THREE.WebGLRenderer`, but Three.js is a higher-level 3D library and abstracts low-level WebGL buffer, shader, and draw-call work. The assignment sheet does not explicitly prohibit Three.js, but it also does not explicitly approve it. **Ask the lecturer whether Three.js is acceptable before investing in detailed modelling.** If raw WebGL is required, the implementation plan must change.

This project uses Three.js intentionally because that is the team's selected decision. The team should still be able to explain the underlying scene graph, local/world transforms, view/projection camera concepts, materials, lighting, UV texture coordinates, raycasting, and animation updates.

## Create the GitHub repository

After extracting this folder, you can create the remote repository with GitHub CLI:

```bash
git init
git branch -M main
git add .
git commit -m "Initial CCWS STP project scaffold"
gh repo create ccws-stp-its --public --source=. --remote=origin --push
```

Change `--public` to `--private` if the group prefers a private repository. Replace the project group name in `index.html` with the team's actual agreed group name before submission.

## Quick start

Requirements:
- Node.js 20.19+ or 22.12+.
- npm.
- A modern browser with WebGL support.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

Build check:

```bash
npm run build
npm run preview
```

## Repository layout

```text
ccws-stp-its/
├── CLAUDE.md
├── README.md
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── .nvmrc
├── public/
│   └── assets/
│       ├── references/photos/       # Original site photographs supplied by the team
│       ├── references/videos/       # Add original walkthrough video here
│       └── textures/                # Locally owned / permitted texture images
├── docs/
│   ├── PROJECT_PLAN.md
│   ├── GIT_WORKFLOW.md
│   ├── REQUIREMENTS_TRACEABILITY.md
│   ├── SITE_EVIDENCE_AND_ASSUMPTIONS.md
│   ├── FLOOR_PLAN.md
│   ├── COORDINATE_SYSTEM.md
│   ├── SCENE_GRAPH.md
│   ├── COURSE_CONCEPT_MAPPING.md
│   ├── INTEGRATION_CONTRACT.md
│   ├── TASK_DIVISION.md
│   ├── THREE_WEEK_ROADMAP.md
│   ├── INTERACTION_SPEC.md
│   ├── DEMO_AND_CHALLENGE_PLAN.md
│   └── ASSET_REGISTER.md
├── prompts/
│   ├── 00_FOUNDATION_AND_SCAFFOLD.md
│   ├── 01_MEMBER_A_CORE_EXTERIOR_ROBOT.md
│   ├── 02_MAHDA_INTERIOR_AND_EXHIBITS.md
│   ├── 03_INTEGRATION_AND_QA.md
│   └── 04_DEMO_AND_LECTURER_CHALLENGES.md
└── src/
    ├── main.js
    ├── core/
    │   ├── createApp.js
    │   ├── CameraRig.js
    │   └── InteractionManager.js
    ├── scene/
    │   ├── createWorld.js
    │   ├── layoutConfig.js
    │   └── SceneRegistry.js
    ├── models/
    │   ├── environment/
    │   │   ├── exterior.js
    │   │   └── interior.js
    │   └── exhibits/
    │       ├── robotArm.js
    │       ├── motorcycle.js
    │       └── train.js
    ├── lighting/
    │   └── createLighting.js
    ├── assets/
    │   └── loadTexture.js
    └── ui/
        └── bindUI.js
```

## Build order

1. Confirm that Three.js is allowed by the lecturer.
2. Visit the site and update the unverified floor-plan assumptions in `docs/FLOOR_PLAN.md`.
3. Complete the shared foundation using `prompts/00_FOUNDATION_AND_SCAFFOLD.md`.
4. Work in parallel on separate branches using the Member A and Mahda prompts.
5. Integrate and run the acceptance checks using `prompts/03_INTEGRATION_AND_QA.md`.
6. Prepare the live explanation using `prompts/04_DEMO_AND_LECTURER_CHALLENGES.md`.

## Team workflow

- Shared base branch: `main`.
- Integration branch: `develop`.
- Member A branch: `feat/member-a-core-exterior-robot`.
- Mahda branch: `feat/mahda-interior-exhibits`.
- Do not commit `node_modules/` or build output `dist/`.
- Do not edit another member's owned modules without coordinating first.
- Keep the public module contract in `docs/INTEGRATION_CONTRACT.md` stable.
- Commit `package-lock.json` after the first `npm install`; both members use `npm ci` thereafter.

## Current implementation status

This is a **starter scaffold**, not the completed 3D replica. It contains a runnable Three.js blockout, camera mode switching, initial UI, reference photo gallery, and module stubs. Placeholder geometry is intentionally approximate and must be refined against measurements and additional photographs.

## Foundation QA notes (Prompt 00)

Verified by command: `npm install` (0 vulnerabilities) and `npm run build` succeed.
Fixed in this step: deprecated `THREE.Clock` replaced by `THREE.Timer`; missing-favicon 404 removed; walkthrough-video detection no longer fooled by Vite's SPA fallback; "Reset camera" now returns to Orbit and syncs the buttons; provisional-dimension notice added under the canvas.

Manual checks still to be done in a real browser (not yet run): zero console errors, Orbit/Walk switching, pointer lock + WASD, window resize, and the WebGL-unavailable message (e.g. disable hardware acceleration).
Known limits: Walk mode has no collision; exterior/interior are blockouts; Three.js approval from the lecturer is still outstanding.
