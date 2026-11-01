# Coordinate System and Modelling Convention

## World convention

- X: building width, left to right when facing the front facade.
- Y: vertical height, positive upward.
- Z: building depth, with the front facade provisionally at negative Z.
- Ground plane: Y = 0.
- Main building root: world origin `(0, 0, 0)`.
- Intended scale: one world unit represents approximately one metre. This is a modelling convention; dimensions remain estimates until measured.

## Object origins and pivots

Each model must document its root origin and meaningful pivot locations.

- Building root: center of footprint.
- Door pivot: hinge axis.
- Motorcycle wheel pivot: center of axle.
- Robot base pivot: center of turntable.
- Robot shoulder/elbow/wrist pivots: actual conceptual joint centers.
- Train root: center of the displayed segment or a consistently documented end origin.

## Transform order

Three.js `Object3D` combines local position, rotation, and scale into a local matrix and propagates the result through the parent hierarchy into `matrixWorld`. Do not manually multiply transforms in inconsistent orders. If the project needs explicit matrix demonstrations, add small explanatory helpers/examples and document conventions.

## Parent-child rule

A child transform is local to its parent. Moving a parent carries all descendants. Rotating a wheel pivot must spin only that wheel; rotating a robot shoulder must carry the elbow, forearm, wrist, and gripper.

## Camera

- Orbit mode: perspective camera controlled by OrbitControls.
- Walk mode: first-person perspective camera controlled by PointerLockControls and WASD movement.
- Camera near/far planes should be configured to include the entire blockout without excessive depth range.

## Dimension rules

All estimated dimensions must be centralized in configuration. Use labels such as `estimated`, `measured`, or `confirmed` in comments/docs. Never silently replace a measured value with a guess.
