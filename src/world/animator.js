// Time-based animation of the CCWS scene. Every animated object is a pivot node in the
// scene graph; the animator only changes that pivot's local rotation or position, and the
// renderer's parent × local multiplication carries the change down to all its children.
// All motion is an interpretation for the demo, not a record of how the site behaves.

const smoothstep = (edge0, edge1, x) => {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
};

// 0 → 1 → 0 once per `period` seconds: opens during [start, start + ramp], stays open
// until `end`, closes during [end, end + ramp].
function openCycle(time, period, start, end, ramp) {
  const t = ((time % period) + period) % period;
  return smoothstep(start, start + ramp, t) * (1 - smoothstep(end, end + ramp, t));
}

export function createAnimator(building, environment) {
  const { mainDoors, sideDoors, sashes, binLids, explode } = building;
  const { crowns, fronds } = environment;
  const explodeBase = explode.map(({ node }) => [...node.position]);
  const frondBase = fronds.map((frond) => [...frond.rotation]);
  let explodeAmount = 0;
  let explodeTarget = 0;

  function animateObjects(time) {
    // Main entrance: both leaves swing outwards (+Z) together every 14 s. A leaf hinged on
    // the west jamb points along +X, so it needs a negative turn about Y to swing out.
    const main = openCycle(time, 14, 1, 6, 1.2) * 1.45;
    mainDoors[0].rotation[1] = -main;
    mainDoors[1].rotation[1] = main;

    // Co-working side doors open a little later and swing out under the canopy (−X).
    const side = openCycle(time, 18, 5, 11, 1.4) * 1.3;
    sideDoors[0].rotation[1] = -side;
    sideDoors[1].rotation[1] = side;

    // Upper top-hung sashes open and close in a wave that travels along the facade.
    sashes.forEach((sash, i) => {
      const wave = Math.sin(time * 0.35 - sash.position[0] * 0.25 + (i % 2) * 0.6);
      sash.rotation[0] = -0.55 * smoothstep(0.2, 0.9, wave);
    });

    // Bin lids lift one after another, as if someone were sorting rubbish.
    binLids.forEach((lid, i) => {
      lid.rotation[2] = -1.2 * openCycle(time + i * 3.1, 20, 2, 4, 0.6);
    });

    // Wind: tree crowns sway around the top of the trunk, palm fronds flutter.
    crowns.forEach((crown, i) => {
      crown.rotation[0] = Math.sin(time * 0.7 + i * 1.3) * 0.025;
      crown.rotation[2] = Math.cos(time * 0.55 + i * 0.9) * 0.03;
    });
    fronds.forEach((frond, i) => {
      frond.rotation[0] = frondBase[i][0] + Math.sin(time * 1.8 + i * 0.7) * 0.07;
    });
  }

  // Exploded view: glide towards the target and offset each part from its parent.
  function animateExplode(delta) {
    explodeAmount += (explodeTarget - explodeAmount) * Math.min(1, delta * 3);
    const ease = explodeAmount * explodeAmount * (3 - 2 * explodeAmount);
    explode.forEach(({ node, offset }, i) => {
      node.position = explodeBase[i].map((value, axis) => value + offset[axis] * ease);
    });
  }

  return {
    // `time` is the animation clock (it stops while paused); the exploded view always runs.
    update(time, delta, { animateObjects: objectsOn }) {
      if (objectsOn) animateObjects(time);
      animateExplode(delta);
    },
    setExploded(on) {
      explodeTarget = on ? 1 : 0;
    },
  };
}
