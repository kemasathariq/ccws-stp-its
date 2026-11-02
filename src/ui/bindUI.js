import { formatClock } from '../world/dayNight.js';
import { renderSceneTree } from './renderSceneTree.js';

// Optional URL parameters open the scene in a given state, e.g. for a demo:
// ?jam=20.5&kamera=pintuUtama&urai=1&animasi=0&bayangan=0&tekstur=0&siklus=1
function applyQuery(app) {
  const query = new URLSearchParams(window.location.search);
  if (query.has('jam')) app.set('hour', Math.min(24, Math.max(0, Number(query.get('jam')) || 0)));
  for (const [key, option] of [['siklus', 'autoTime'], ['animasi', 'animate'], ['bayangan', 'shadows'], ['tekstur', 'textures'], ['urai', 'exploded']]) {
    if (query.has(key)) app.set(option, query.get(key) === '1');
  }
  if (app.presets[query.get('kamera')]) app.jumpTo(query.get('kamera'));
}

export function bindUI(app) {
  if (!app) {
    document.querySelector('.controls')?.setAttribute('hidden', '');
    return;
  }
  const $ = (selector) => document.querySelector(selector);
  applyQuery(app);

  $('#reset-camera').addEventListener('click', () => app.resetCamera());

  const slider = $('#time-of-day');
  const label = $('#time-label');
  const showTime = ({ hour }) => {
    slider.value = String(hour);
    label.textContent = formatClock(hour);
  };
  slider.addEventListener('input', () => app.set('hour', Number(slider.value)));
  app.onChange(showTime);
  showTime(app.options);

  for (const [id, option] of [['#auto-time', 'autoTime'], ['#animate', 'animate'], ['#shadows', 'shadows'], ['#textures', 'textures'], ['#exploded', 'exploded']]) {
    const input = $(id);
    input.checked = app.options[option];
    input.addEventListener('change', () => app.set(option, input.checked));
  }

  const presets = $('#camera-presets');
  for (const [name, preset] of Object.entries(app.presets)) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = preset.label;
    if (preset.photo) button.title = `Sudut yang mendekati foto ${preset.photo}`;
    button.addEventListener('click', () => app.flyTo(name));
    presets.append(button);
  }

  renderSceneTree($('#scene-tree'), app.scene);
}
