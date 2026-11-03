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
| Lampu ruang kerja / Lampu pameran | Menyalakan atau mematikan tiga dan dua lampu titik langit-langit beserta lampu di plafon |
| Buka atap (potongan) | Menyembunyikan atap dan plafon untuk melihat isi ruangan dari atas |

Tombol kamera interior: Interior lorong, ruang kerja, kafe, Pameran, Lengan robot, Motor listrik, dan Potongan (atap dibuka). Titik pandangnya adalah perkiraan.

## Pameran

| Objek | Kontrol | Perilaku |
|---|---|---|
| Lengan robot | Lima slider: putar dasar −170…170°, bahu −30…110°, siku −10…145°, pergelangan −100…100°, gripper 0–100% | Sudut dibatasi; lengan bergerak halus menuju target. Bahu, siku, dan pergelangan diukur sebagai kemiringan ke depan (0° = tegak) |
| | Pose siap, Pose ambil, Reset pose | Pose ambil menaruh gripper di atas kotak. Reset pose hanya mengembalikan sendi, tidak memindahkan kotak |
| | Ambil kotak / Lepas kotak | Ambil hanya berhasil bila titik genggam ≤ 0,16 m dari pusat kotak (kotak menyala bila terjangkau); kotak menjadi anak `GripperRoot`. Lepas mengembalikan kotak ke `RobotArmRoot` dengan posisi dan orientasi dunia yang sama; tidak ada fisika, jadi kotak tetap melayang bila dilepas di udara |
| | Kembalikan kotak | Menaruh kotak kembali di platform |
| Motor listrik | Daya menyala | Kedua roda berputar pada poros masing-masing dengan percepatan tetap; rangka diam; lampu depan, belakang, dan dasbor menyala. "Animasi objek" yang dimatikan membekukan roda |
| Mockup kereta | Pintu terbuka | Panel pintu bergeser sepanjang sisi kereta dan memperlihatkan ceruk gelap |
| | Layar tujuan dan lampu jendela | Layar "HST 01 JAKARTA" dan kaca jendela menyala |

Interaksi dilakukan lewat kontrol di halaman; picking dengan mouse belum ada.

Parameter URL membuka halaman dalam keadaan tertentu: `jam`, `kamera` (nama preset), `siklus`, `animasi`, `bayangan`, `tekstur`, `urai` (nilai `1` atau `0`), serta `lampuKerja`, `lampuPameran`, `atap=0` (potongan), `motor=1`, `pintuKereta=1`, dan `layarKereta=1`. Contoh: `?jam=20&kamera=sisiCoworking`.

## Animasi (`src/world/animator.js`)

- Pintu utama ganda membuka ke luar setiap 14 detik.
- Pintu samping co-working membuka ke bawah kanopi setiap 18 detik.
- 42 daun jendela atas berengsel atas membuka dan menutup bergelombang sepanjang fasad.
- Tutup tempat sampah terangkat bergiliran.
- Tajuk pohon dan pelepah palem bergoyang tertiup angin.

Semua gerakan adalah interpretasi untuk demonstrasi, bukan rekaman perilaku nyata di lokasi. Navigasi orang pertama dengan tabrakan, picking mouse, dan simulasi fisika tidak termasuk target.
