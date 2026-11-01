import './styles/main.css';
import { createApp } from './core/createApp.js';
import { bindUI } from './ui/bindUI.js';

const app = createApp(document.querySelector('#canvas-host'));
bindUI(app);

window.addEventListener('beforeunload', () => app.dispose());
