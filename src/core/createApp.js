import { createRenderer } from '../webgl/renderer.js';
import { createOrbitCamera } from '../webgl/orbitCamera.js';
import { addChildren, createNode } from '../webgl/sceneNode.js';
import { createCcwsBuilding } from '../models/ccwsBuilding.js';
import { createEnvironment } from '../models/environment.js';
import { createAnimator } from '../world/animator.js';
import { environmentAt } from '../world/dayNight.js';
import { CAMERA_PRESETS } from '../world/cameraPresets.js';

// Hours of scene time per real second while the day–night cycle runs (a full day ≈ 96 s).
const HOURS_PER_SECOND = 0.25;

export function createApp(host) {
  if (!host) throw new Error('Missing #canvas-host element.');
  const status = document.querySelector('#render-status');

  const canvas = document.createElement('canvas');
  canvas.style.touchAction = 'none';
  host.appendChild(canvas);
  let renderer;
  try {
    renderer = createRenderer(canvas, { shadowCenter: [-4, 0, -2], shadowRadius: 34 });
  } catch (error) {
    console.error('Unable to initialize WebGL.', error);
    canvas.remove();
    host.innerHTML = '<div class="error-message">WebGL2 tidak dapat dijalankan. Periksa dukungan browser dan akselerasi hardware.</div>';
    status.textContent = 'WebGL2 tidak tersedia';
    return null;
  }

  const building = createCcwsBuilding();
  const environment = createEnvironment();
  const scene = addChildren(createNode('Scene'), environment.root, building.root);
  const animator = createAnimator(building.animated, environment.animated);
  const camera = createOrbitCamera(canvas, CAMERA_PRESETS.awal);

  // Everything the page controls can change. The photos were taken at about 16:24.
  const options = { hour: 16.4, autoTime: false, animate: true, shadows: true, textures: true, exploded: false };
  const listeners = new Set();
  let animationTime = 0;
  let last = performance.now();
  let frame = 0;

  function draw(now) {
    const delta = Math.min(0.1, (now - last) / 1000);
    last = now;
    if (options.animate) animationTime += delta;
    if (options.autoTime) {
      options.hour = (options.hour + delta * HOURS_PER_SECOND) % 24;
      listeners.forEach((listener) => listener(options));
    }
    animator.update(animationTime, delta, { animateObjects: options.animate });
    camera.update(delta);

    const sky = environmentAt(options.hour);
    if (sky.lampLevel > 0.01) {
      sky.pointLights = building.lamps.map((lamp) => ({ ...lamp, color: lamp.color.map((c) => c * sky.lampLevel) }));
    }
    const aspect = renderer.resize();
    renderer.render(scene, camera.matrices(aspect), sky, options);
    frame = requestAnimationFrame(draw);
  }

  status.textContent = 'WebGL2 aktif';
  document.querySelector('#loading-message')?.remove();
  frame = requestAnimationFrame(draw);

  return {
    scene,
    options,
    presets: CAMERA_PRESETS,
    set(name, value) {
      options[name] = value;
      if (name === 'exploded') animator.setExploded(value);
      listeners.forEach((listener) => listener(options));
    },
    onChange(listener) {
      listeners.add(listener);
    },
    flyTo(name) {
      camera.flyTo(CAMERA_PRESETS[name]);
    },
    jumpTo(name) {
      camera.jumpTo(CAMERA_PRESETS[name]);
    },
    resetCamera: () => camera.reset(),
    dispose() {
      cancelAnimationFrame(frame);
      camera.dispose();
      renderer.dispose();
      canvas.remove();
    },
  };
}
