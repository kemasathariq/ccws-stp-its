/**
 * Registry for independently developed model modules.
 * Each module must implement the interface documented in docs/INTEGRATION_CONTRACT.md.
 */
export class SceneRegistry {
  constructor(scene) {
    this.scene = scene;
    this.modules = [];
  }

  register(module, name = 'unnamed-module') {
    if (!module?.group || typeof module.update !== 'function') {
      throw new TypeError(`${name} must expose { group, update() }.`);
    }
    module.group.name ||= name;
    this.scene.add(module.group);
    this.modules.push({ name, module });
    return module;
  }

  update(delta, state) {
    for (const entry of this.modules) entry.module.update(delta, state);
  }

  getInteractiveTargets() {
    return this.modules.flatMap(({ module }) => module.interactiveTargets ?? []);
  }

  dispose() {
    for (const { module } of this.modules) module.dispose?.();
    this.modules.length = 0;
  }
}
