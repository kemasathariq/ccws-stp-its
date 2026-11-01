# Claude Code Prompt 00 — Foundation and Shared Scaffold

You are working in the repository `ccws-stp-its`.

Read `CLAUDE.md` and all core documents in `docs/` before editing. The project decisions are locked: Three.js with `WebGLRenderer`, Vite, orbit + first-person camera, full robot arm interactions, balanced three-week scope, and two contributors (Member A and Mahda).

## Assignment caveat

The assignment says WebGL. Three.js uses WebGL through `WebGLRenderer` but abstracts low-level WebGL operations. Do not misrepresent this as raw WebGL. Keep this caveat in project docs and do not change libraries without explicit team instruction.

## Your task

1. Inspect the current scaffold and preserve all supplied reference photos.
2. Verify package scripts and imports against installed Three.js version.
3. Ensure `npm install`, `npm run dev`, and `npm run build` work.
4. Ensure the canvas resizes correctly and renderer is disposed correctly.
5. Confirm Orbit mode and Walk mode switch correctly. In Walk mode, explain pointer lock and WASD in the UI.
6. Confirm the conceptual building blockout is visible. Clearly label dimensions as provisional.
7. Keep model factories aligned to `docs/INTEGRATION_CONTRACT.md`.
8. Do not implement the detailed exterior, room, train, motorcycle, or robot arm yet. Those are parallel member workstreams.
9. Add a simple error state when WebGL cannot initialize.
10. Add any test/manual QA notes to README.

## Required output

- A concise implementation summary.
- Files changed.
- Exact commands executed and their results.
- Any remaining known issues.
- Updated docs only where the implementation requires it.

Do not claim tests passed unless you ran them. Do not silently alter the team ownership map.
