export function bindUI(app) {
  const orbitButton = document.querySelector('#orbit-mode');
  const walkButton = document.querySelector('#walk-mode');
  const hint = document.querySelector('#camera-hint');

  function selectMode(mode) {
    app.setCameraMode(mode);
    orbitButton.classList.toggle('active', mode === 'orbit');
    walkButton.classList.toggle('active', mode === 'walk');
    hint.textContent = mode === 'walk'
      ? 'Click the canvas to lock the pointer. Use W, A, S, D to move. Press Escape to release the pointer.'
      : 'Orbit around the blockout. Drag to rotate and scroll to zoom.';
  }

  orbitButton.addEventListener('click', () => selectMode('orbit'));
  walkButton.addEventListener('click', () => selectMode('walk'));
  document.querySelector('#reset-camera').addEventListener('click', () => app.resetCamera());

  // Show the original recording automatically once the team adds the expected file.
  const videoPath = '/assets/references/videos/site-walkthrough.mp4';
  fetch(videoPath, { method: 'HEAD' }).then((response) => {
    if (!response.ok) return;
    const container = document.querySelector('#video-container');
    if (!container) return;
    const video = document.createElement('video');
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.src = videoPath;
    video.className = 'walkthrough-video';
    container.replaceWith(video);
  }).catch(() => { /* The optional video is not present yet. */ });
}
