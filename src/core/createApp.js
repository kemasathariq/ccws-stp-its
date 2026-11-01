import * as THREE from 'three';
import { createWorld } from '../scene/createWorld.js';
import { CameraRig } from './CameraRig.js';

export function createApp(host) {
  if (!host) throw new Error('Missing #canvas-host element.');

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  } catch (error) {
    console.error('Unable to initialize the WebGL renderer.', error);
    host.innerHTML = '<div class="error-message">WebGL could not be initialized. Check browser support and hardware acceleration.</div>';
    document.querySelector('#render-status').textContent = 'WEBGL UNAVAILABLE';
    return { setCameraMode() {}, resetCamera() {}, dispose() {} };
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(host.clientWidth, host.clientHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.setClearColor(0xdce7e6, 1);
  host.appendChild(renderer.domElement);

  const { scene, world, updateModules, disposeModules } = createWorld();
  const camera = new THREE.PerspectiveCamera(52, host.clientWidth / Math.max(host.clientHeight, 1), 0.1, 250);
  const cameraRig = new CameraRig(camera, renderer.domElement, host);
  const clock = new THREE.Clock();
  let animationFrame = 0;
  let disposed = false;

  const resizeObserver = new ResizeObserver(() => {
    const width = Math.max(host.clientWidth, 1);
    const height = Math.max(host.clientHeight, 1);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });
  resizeObserver.observe(host);

  function animate() {
    if (disposed) return;
    const delta = Math.min(clock.getDelta(), 0.05);
    const elapsed = clock.elapsedTime;
    cameraRig.update(delta);
    updateModules(delta, { elapsed, camera, scene, world });
    renderer.render(scene, camera);
    animationFrame = requestAnimationFrame(animate);
  }

  document.querySelector('#render-status').textContent = 'WEBGL ACTIVE · BLOCKOUT';
  document.querySelector('#loading-message')?.remove();
  animate();

  return {
    setCameraMode: (mode) => cameraRig.setMode(mode),
    resetCamera: () => cameraRig.reset(),
    getCameraMode: () => cameraRig.mode,
    dispose() {
      disposed = true;
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      cameraRig.dispose();
      disposeModules();
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
