import { formatClock } from '../world/dayNight.js';
import { renderSceneTree } from './renderSceneTree.js';

// Optional URL parameters open the scene in a given state, e.g. for a demo:
// ?jam=20.5&kamera=pintuUtama&urai=1&animasi=0&bayangan=0&tekstur=0&siklus=1
// More: lampuKerja, lampuPameran, atap=0 (potongan), motor=1, pintuKereta=1, layarKereta=1.
function applyQuery(app) {
  const query = new URLSearchParams(window.location.search);
  if (query.has('jam')) app.set('hour', Math.min(24, Math.max(0, Number(query.get('jam')) || 0)));
  for (const [key, option] of [['siklus', 'autoTime'], ['animasi', 'animate'], ['bayangan', 'shadows'], ['tekstur', 'textures'], ['urai', 'exploded'], ['lampuKerja', 'interiorLights'], ['lampuPameran', 'exhibitLights']]) {
    if (query.has(key)) app.set(option, query.get(key) === '1');
  }
  if (query.has('atap')) app.set('cutaway', query.get('atap') === '0');
  if (app.presets[query.get('kamera')]) app.jumpTo(query.get('kamera'));
  if (query.get('motor') === '1') app.exhibits.motorcycle.setPowered(true);
  if (query.get('pintuKereta') === '1') app.exhibits.train.setDoorOpen(true);
  if (query.get('layarKereta') === '1') app.exhibits.train.setLightsOn(true);
}

const ROBOT_LABELS = { base: 'Putar dasar', shoulder: 'Bahu', elbow: 'Siku', wrist: 'Pergelangan', gripper: 'Gripper' };

// Slider panel for the robot arm. Joint sliders show the target angle; the arm glides to it.
// Limits come from the robot's own config so the sliders and the model never disagree.
function bindRobot(robot, $) {
  const list = $('#robot-sliders');
  const status = $('#robot-status');
  const grabButton = $('#robot-grab');
  const inputs = {};

  for (const name of robot.joints) {
    const [lo, hi] = robot.config.limits[name];
    const isGripper = name === 'gripper';
    const row = document.createElement('label');
    row.className = 'slider-row';
    const text = document.createElement('span');
    text.textContent = ROBOT_LABELS[name];
    const input = document.createElement('input');
    input.type = 'range';
    input.min = String(isGripper ? 0 : lo);
    input.max = String(isGripper ? 100 : hi);
    input.step = '1';
    const output = document.createElement('output');
    row.append(text, input, output);
    list.append(row);
    inputs[name] = { input, output, isGripper };
    input.addEventListener('input', () => {
      robot.setJoint(name, isGripper ? Number(input.value) / 100 : Number(input.value));
      sync();
    });
  }

  function sync() {
    const target = robot.getTarget();
    for (const [name, { input, output, isGripper }] of Object.entries(inputs)) {
      const shown = isGripper ? Math.round(target[name] * 100) : Math.round(target[name]);
      input.value = String(shown);
      output.textContent = isGripper ? `${shown}%` : `${shown}°`;
    }
    const holding = robot.isHolding();
    grabButton.textContent = holding ? 'Lepas kotak' : 'Ambil kotak';
    grabButton.setAttribute('aria-pressed', String(holding));
  }

  const say = (message) => { status.textContent = message; };
  $('#robot-ready').addEventListener('click', () => { robot.setPose(robot.config.readyPose); sync(); say('Pose siap.'); });
  $('#robot-pick-pose').addEventListener('click', () => { robot.pickPose(); sync(); say('Lengan bergerak ke pose ambil. Setelah berhenti, tekan "Ambil kotak".'); });
  $('#robot-reset').addEventListener('click', () => { robot.resetPose(); sync(); say('Pose dikembalikan ke posisi awal (kotak tidak dipindahkan).'); });
  $('#robot-reset-box').addEventListener('click', () => { robot.resetCube(); sync(); say('Kotak dikembalikan ke platform.'); });
  grabButton.addEventListener('click', () => { const result = robot.grab(); sync(); say(result.message); });
  sync();
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

  const toggles = [['#auto-time', 'autoTime'], ['#animate', 'animate'], ['#shadows', 'shadows'], ['#textures', 'textures'], ['#exploded', 'exploded'],
    ['#interior-lights', 'interiorLights'], ['#exhibit-lights', 'exhibitLights'], ['#cutaway', 'cutaway']];
  for (const [id, option] of toggles) {
    $(id).addEventListener('change', (event) => app.set(option, event.target.checked));
  }
  // The roof view can also change by choosing a camera view, so keep the checkboxes in step.
  const showToggles = (options) => toggles.forEach(([id, option]) => { $(id).checked = options[option]; });
  app.onChange(showToggles);
  showToggles(app.options);

  const { motorcycle, train, robot } = app.exhibits;
  $('#moto-power').checked = motorcycle.state().powered;
  $('#moto-power').addEventListener('change', (event) => {
    motorcycle.setPowered(event.target.checked);
    $('#moto-status').textContent = event.target.checked
      ? 'Menyala: kedua roda berputar pada porosnya, rangka diam, lampu menyala.'
      : 'Mati: roda melambat sampai diam, lampu padam.';
  });
  if (motorcycle.state().powered) $('#moto-power').dispatchEvent(new Event('change')); // started from the URL
  const trainStatus = () => {
    $('#train-status').textContent = `Pintu ${$('#train-door').checked ? 'terbuka' : 'tertutup'}, layar dan lampu ${$('#train-lights').checked ? 'menyala' : 'padam'}.`;
  };
  $('#train-door').checked = train.state().doorOpen;
  $('#train-lights').checked = train.state().lightsOn;
  trainStatus();
  $('#train-door').addEventListener('change', (event) => { train.setDoorOpen(event.target.checked); trainStatus(); });
  $('#train-lights').addEventListener('change', (event) => { train.setLightsOn(event.target.checked); trainStatus(); });
  bindRobot(robot, $);

  const presets = $('#camera-presets');
  const interiorPresets = $('#camera-presets-interior');
  for (const [name, preset] of Object.entries(app.presets)) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = preset.label;
    if (preset.photo) button.title = `Sudut yang mendekati foto ${preset.photo}`;
    button.addEventListener('click', () => app.flyTo(name));
    (preset.interior || preset.cutaway ? interiorPresets : presets).append(button);
  }

  renderSceneTree($('#scene-tree'), app.scene);
}
