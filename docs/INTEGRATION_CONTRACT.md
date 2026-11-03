# Kesepakatan Integrasi

Struktur kode yang sekarang dipakai:

| Bagian | File | Tugas |
|---|---|---|
| Renderer | `src/webgl/renderer.js` | Satu-satunya pemilik WebGL context, shader, buffer, tekstur, dan shadow map. Menerima scene graph, kamera, dan data lingkungan per frame. |
| Matematika dan geometri | `src/webgl/mat4.js`, `geometry.js`, `sceneNode.js` | Matriks, bentuk dasar, dan simpul hierarki. Tidak menyentuh WebGL. |
| Kamera | `src/webgl/orbitCamera.js`, `src/world/cameraPresets.js` | Kamera orbit dan sudut-sudut yang dicocokkan dengan foto. |
| Model | `src/models/ccwsBuilding.js`, `environment.js`, `parts.js`, `proceduralTextures.js` | Hanya membuat data: simpul, geometri, dan material. Mengembalikan `root`, simpul yang dianimasikan (`animated`), dan lampu (`lamps`). Tidak membuat context atau loop. |
| Dunia | `src/world/dayNight.js`, `animator.js` | Siang–malam (data cahaya dan langit) dan animasi berbasis waktu yang mengubah pivot. |
| Aplikasi dan UI | `src/core/createApp.js`, `src/ui/*` | Loop `requestAnimationFrame`, opsi halaman, pohon objek. |

Material adalah objek biasa: `color`, opsional `texture` (URL atau canvas), `tileSize` (meter per pengulangan), `flatColor` (warna saat tekstur dimatikan), `specular`, `shininess`, `bump`, `reflect`, `emissive` dan `glow`, `emissiveMask`, `alphaTest`, `castShadow`.

Koordinasikan perubahan file bersama. Proyek tidak memakai library 3D apa pun; satu-satunya dependensi adalah Vite sebagai server pengembangan.
