# Interaction Specification

## Camera modes

### Orbit
- Left-drag: orbit.
- Wheel/trackpad: zoom.
- Optional right-drag: pan.
- Reset button restores the initial exterior overview.

### First-person walkthrough
- User selects Walk mode, then clicks the canvas to lock the pointer.
- Mouse: look around.
- W/A/S/D: move.
- Escape: release pointer lock.
- Keep movement speed delta-time based.
- Add simple bounds/collision only if time permits; do not claim full collision physics.

## Robot arm

Controls:
- Base yaw: rotate around vertical axis.
- Shoulder: rotate upper arm around shoulder pivot.
- Elbow: bend forearm relative to upper arm.
- Wrist: orient end effector.
- Gripper: open/close two fingers symmetrically.
- Pick: attach a selected pickable object to the gripper while maintaining its world transform.
- Release: detach the object and leave it at its current world pose.

Requirements:
- Joint values stored in one state object.
- Clamp joint values to configured minimum/maximum angles.
- Use radians internally; UI may show degrees.
- Moving a parent joint must move every descendant.
- Do not animate by moving the entire robot mesh.
- A clear visual status should indicate whether an object is held.

## Electric motorcycle

- Power toggle enables/disables wheel spin.
- Front and rear wheels rotate around their own local axle pivots.
- Chassis stays still while wheels spin in place.
- Optional headlight toggle changes light/emissive state.

## Train exhibit

- Object selection opens an information panel.
- Optional door or destination display interaction only if the actual exhibit supports that visible feature.
- Avoid inventing a train route or official identity.

## Selection feedback

- Use raycasting from pointer coordinates.
- Selected object receives a subtle highlight or outline, and the information panel names it.
- Clicking empty space clears selection.

## Accessibility and usability

- All controls have visible labels.
- Provide a reset-camera action.
- Do not make the app depend on hover only.
- Show brief keyboard help in the UI.
