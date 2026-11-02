// Camera viewpoints. The photo views roughly match where each reference photo was taken
// (found by placing the model next to the photo); the phone's ultra-wide lens is imitated
// with a wide field of view. Angles in radians, distances in metres.
const deg = (value) => (value * Math.PI) / 180;

export const CAMERA_PRESETS = {
  awal: { label: 'Awal', target: [-3, 3.2, 3], yaw: -0.6, pitch: 0.14, distance: 31, fov: deg(50) },
  fasadKiri: { label: 'Fasad, sudut kiri', photo: 'eksterior-fasad-serong-kiri', target: [0, 3.2, 5], yaw: -0.98, pitch: 0.08, distance: 18, fov: deg(72) },
  fasadKanan: { label: 'Fasad, sudut kanan', photo: 'eksterior-fasad-serong-kanan', target: [0, 3.2, 5], yaw: 0.98, pitch: 0.08, distance: 18, fov: deg(72) },
  pintuUtama: { label: 'Pintu masuk', photo: 'eksterior-fasad-pintu-utama', target: [-0.5, 2.4, 6.5], yaw: 0.5, pitch: 0.06, distance: 11, fov: deg(58) },
  sisiCoworking: { label: 'Sisi co-working', photo: 'eksterior-coworking-gable-kanopi', target: [-12.5, 3, 1.5], yaw: -1.1, pitch: 0.06, distance: 11, fov: deg(72) },
  kanopiDepan: { label: 'Kanopi, depan', photo: 'eksterior-kanopi-depan', target: [-19.6, 3.6, -0.45], yaw: -Math.PI / 2, pitch: -0.28, distance: 5.5, fov: deg(75) },
  hierarki: { label: 'Dari atas', target: [-4, 2, 0], yaw: 0.55, pitch: 0.75, distance: 52, fov: deg(50) },
};
