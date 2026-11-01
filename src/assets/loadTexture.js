import * as THREE from 'three';

/** Load a local texture and apply consistent color-space and sampling defaults. */
export function loadTexture(url, {
  color = true,
  repeat = [1, 1],
  wrapS = THREE.RepeatWrapping,
  wrapT = THREE.RepeatWrapping,
  minFilter = THREE.LinearMipmapLinearFilter,
  magFilter = THREE.LinearFilter,
} = {}) {
  const loader = new THREE.TextureLoader();
  return new Promise((resolve, reject) => {
    loader.load(
      url,
      (texture) => {
        if (color) texture.colorSpace = THREE.SRGBColorSpace;
        texture.wrapS = wrapS;
        texture.wrapT = wrapT;
        texture.repeat.set(repeat[0], repeat[1]);
        texture.minFilter = minFilter;
        texture.magFilter = magFilter;
        texture.generateMipmaps = true;
        texture.needsUpdate = true;
        resolve(texture);
      },
      undefined,
      (error) => reject(new Error(`Failed to load texture ${url}: ${error?.message ?? error}`)),
    );
  });
}
