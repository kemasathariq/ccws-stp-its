# Kamera, Kontrol, dan Animasi

## Kamera

- Kamera perspektif orbit: seret untuk memutar, gulir untuk zoom, "Atur ulang kamera" kembali ke sudut awal.
- Tombol "Sudut kamera" berpindah halus ke sudut yang mendekati foto referensi (`src/world/cameraPresets.js`), termasuk FOV lebar yang meniru lensa ultra-wide ponsel.

## Kontrol di bawah kanvas

| Kontrol | Fungsi |
|---|---|
| Waktu (slider) | Jam 0–24; awalnya 16:24, sesuai waktu pengambilan foto |
| Siklus siang–malam | Jam berjalan otomatis (satu hari ±96 detik) |
| Animasi objek | Menjeda atau melanjutkan animasi objek |
| Bayangan | Menyalakan atau mematikan shadow map |
| Tekstur | Menyalakan atau mematikan tekstur (bahan memakai warna rata-ratanya) |
| Urai hierarki | Memisahkan atap, fasad, portal, sisi co-working, dan kanopi dari induknya |

Parameter URL membuka halaman dalam keadaan tertentu: `jam`, `kamera` (nama preset), `siklus`, `animasi`, `bayangan`, `tekstur`, `urai` (nilai `1` atau `0`). Contoh: `?jam=20&kamera=sisiCoworking`.

## Animasi (`src/world/animator.js`)

- Pintu utama ganda membuka ke luar setiap 14 detik.
- Pintu samping co-working membuka ke bawah kanopi setiap 18 detik.
- 42 daun jendela atas berengsel atas membuka dan menutup bergelombang sepanjang fasad.
- Tutup tempat sampah terangkat bergiliran.
- Tajuk pohon dan pelepah palem bergoyang tertiup angin.

Semua gerakan adalah interpretasi untuk demonstrasi, bukan rekaman perilaku nyata di lokasi. Navigasi orang pertama, pemilihan objek, robot, kendaraan, dan simulasi fisika tidak termasuk target.
