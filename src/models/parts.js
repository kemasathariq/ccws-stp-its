import { box, cylinder } from '../webgl/geometry.js';
import { createNode } from '../webgl/sceneNode.js';

// Small helpers shared by the building, environment and vehicle models. Every helper
// returns an ordinary scene node, so the hierarchy stays plain data.

export function mesh(name, geometry, material, options = {}) {
  return createNode(name, { ...options, mesh: { geometry, material } });
}

// Box given by its extents in the parent's local coordinates.
export function boxFrom(name, [x0, x1], [y0, y1], [z0, z1], material) {
  return mesh(name, box(x1 - x0, y1 - y0, z1 - z0), material, {
    position: [(x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2],
  });
}

// Rotation [about X, about Y, 0] that turns the +Y axis towards `direction`. The local
// matrix applies Rx first and Ry second, so +Y tilts towards +Z and then swings round Y.
export function alignY([dx, dy, dz]) {
  const length = Math.hypot(dx, dy, dz);
  return [Math.acos(dy / length), Math.atan2(dx, dz), 0];
}

// Round bar between two points (pipes, poles, branches, handles).
export function cylinderBetween(name, from, to, radius, material, { radiusTo = radius, segments = 8 } = {}) {
  const direction = [to[0] - from[0], to[1] - from[1], to[2] - from[2]];
  return mesh(name, cylinder(radius, radiusTo, Math.hypot(...direction), segments), material, {
    position: from,
    rotation: alignY(direction),
  });
}

// Profile ([z, y] points) of a gable end wall under a pitched roof of the given span and
// rise: the roof triangle raised by a constant band, so its top edges run at exactly the
// roof's pitch and stand `proud` metres above the tiles everywhere.
export function gableEndProfile(span, rise, proud) {
  return [[-span / 2, 0], [span / 2, 0], [span / 2, proud], [0, rise + proud], [-span / 2, proud]];
}

// Deterministic pseudo-random numbers so the scene looks the same on every load.
export function seededRandom(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
