# CCWS ITS — Tugas 2 Grafika Komputer

Scene 3D Co-working Space (CCWS) ITS: tampak luar gedung, interior sederhana, dan pameran inovasi. Dibuat dengan **WebGL2 dan shader GLSL ES 3.00 langsung**, tanpa library 3D apa pun. Vite hanya dipakai sebagai server pengembangan dan alat build.

## Kelompok dan pembagian tugas

| Anggota | NRP | Tugas |
|---|---|---|
| Kemas Muhammad Athariq | 5025241102 | Dasar WebGL (context, shader, buffer, kamera, pencahayaan) dan integrasi; lengan robot (hierarki pivot, batas sudut sendi, ambil–lepas kotak) |
| Gilbran Mahdavikia Raja | 5025241134 | Foto dan video referensi, fasad dan lingkungan, tekstur, isi halaman utama; interior (ruangan, furnitur, konter kafe), mockup kereta, dan motor listrik |
| Bersama | | Hierarki dan animasi, penggabungan kode, uji browser, latihan penjelasan, dan pengumpulan |

Rincian per berkas ada di [`docs/TASK_DIVISION.md`](docs/TASK_DIVISION.md).

## Menjalankan

Butuh Node.js 20.19 atau lebih baru (`.nvmrc`: 22.12.0).

```bash
npm install
npm run dev       # server pengembangan
npm run build     # build produksi ke dist/
npm run preview   # menyajikan hasil build
```

Halaman bisa dibuka langsung dalam keadaan tertentu lewat parameter URL, misalnya `?jam=19.5&kamera=pintuUtama` atau `?mode=jalan`. Daftar lengkapnya ada di [`docs/INTERACTION_SPEC.md`](docs/INTERACTION_SPEC.md).

## Fitur

- **Gedung CCWS:** fasad dengan kusen 3D dan jendela atas berengsel, portal OPOP Training Center dengan pintu kaca ganda serta tangga–ramp–tangga, sisi co-working dengan papan nama berketebalan dan pintu ganda, kanopi segilima dengan rangka ⌂, talang, pot tanaman, dan tempat sampah.
- **Interior dan pameran:** dinding berongga dengan jendela, lantai kayu, plafon berbalok, meja, kursi, sofa, konter kafe, mockup kereta (pintu geser, layar, lampu), motor listrik (roda berputar pada pivot), dan lengan robot lima sendi yang bisa mengambil dan melepas kotak.
- **Animasi berbasis pivot:** pengunjung berjalan keluar-masuk gedung dan pintu membuka saat mereka lewat, petugas menyapu halaman, pohon dan palem tertiup angin, siang–malam, serta "Urai hierarki" yang memisahkan bagian gedung dari induknya.
- **Kamera:** orbit dengan sudut-sudut yang disamakan dengan foto asli, kamera interior, tampilan potongan (atap dibuka), dan mode **Jalan (WASD)** untuk berjalan seperti orang, termasuk masuk ke dalam gedung. Tombol **Layar penuh** membuat kanvas memenuhi layar; panel kontrol disembunyikan dan bisa dimunculkan lagi.
- **Lighting:** ambient hemisfer, matahari dan bulan (Lambert + Blinn-Phong), bayangan shadow map dengan PCF, lampu luar dan lampu interior yang menyala otomatis menurut jam, pantulan langit pada kaca, cahaya jendela, kabut, dan langit gradasi.
- **Tekstur:** paving dari foto tim, tekstur prosedural (plester, genteng, teralis, beton, lantai kayu, dan lainnya), bump mapping, dan huruf papan nama dengan alpha test.

## Struktur repo

```text
.
├── index.html                      Halaman utama (kanvas, kontrol, foto, video, pohon objek, pembagian tugas)
├── src/
│   ├── main.js                     Titik masuk
│   ├── core/createApp.js           Loop render, opsi halaman, kamera aktif
│   ├── webgl/                      Lapisan WebGL generik: renderer dan shader, matriks, geometri, scene graph, teks, picking
│   ├── camera/                     Kamera orbit dan kamera jalan (WASD)
│   ├── models/                     Konten scene (hanya membuat simpul dan geometri)
│   │   ├── shared/                 Pembantu bentuk dan tekstur prosedural
│   │   ├── building/               Gedung CCWS: fasad, portal, sisi co-working, kanopi
│   │   ├── exterior/               Lingkungan sekitar dan orang
│   │   ├── interior/               Ruang dalam, furnitur, konter kafe
│   │   └── exhibits/               Pameran: tata letak, kereta, motor listrik, lengan robot
│   ├── world/                      Siang–malam, animasi, gerak orang, area jalan dan tabrakan, preset kamera
│   ├── ui/                         Pengikat kontrol halaman dan pohon objek
│   └── styles/main.css
├── public/assets/
│   ├── references/                 Foto dan video asli lokasi (foto web 1200 px di photos/web/)
│   ├── textures/                   Tekstur gambar (paving dari foto tim)
│   └── fonts/                      Font halaman
├── docs/                           Dokumen proyek (lihat daftar di bawah)
└── prompts/                        Prompt perencanaan dan pengerjaan yang dipakai tim
```

## Dokumen

| Dokumen | Isi |
|---|---|
| [`NASKAH_TUGAS_2.md`](docs/NASKAH_TUGAS_2.md) | Naskah tugas dari dosen dan kriteria penilaian |
| [`PROJECT_PLAN.md`](docs/PROJECT_PLAN.md) | Target dan cakupan proyek |
| [`ROADMAP.md`](docs/ROADMAP.md) | Jadwal pengerjaan |
| [`REQUIREMENTS_TRACEABILITY.md`](docs/REQUIREMENTS_TRACEABILITY.md) | Pemetaan setiap ketentuan dan kriteria penilaian ke fitur |
| [`COURSE_CONCEPT_MAPPING.md`](docs/COURSE_CONCEPT_MAPPING.md) | Konsep grafika dan lokasinya di kode |
| [`DEMO_AND_CHALLENGE_PLAN.md`](docs/DEMO_AND_CHALLENGE_PLAN.md) | Urutan demo dan latihan challenge |
| [`INTERACTION_SPEC.md`](docs/INTERACTION_SPEC.md) | Kamera, kontrol halaman, parameter URL, dan animasi |
| [`SCENE_GRAPH.md`](docs/SCENE_GRAPH.md) | Ringkasan pohon hubungan objek |
| [`COORDINATE_SYSTEM.md`](docs/COORDINATE_SYSTEM.md) | Sumbu, satuan, dan urutan transformasi |
| [`FLOOR_PLAN.md`](docs/FLOOR_PLAN.md) | Denah konseptual interior |
| [`SITE_EVIDENCE_AND_ASSUMPTIONS.md`](docs/SITE_EVIDENCE_AND_ASSUMPTIONS.md) | Apa yang diambil dari foto dan apa yang diperkirakan |
| [`INTEGRATION_CONTRACT.md`](docs/INTEGRATION_CONTRACT.md) | Pembagian tanggung jawab antarmodul |
| [`ASSET_REGISTER.md`](docs/ASSET_REGISTER.md) | Sumber setiap foto, video, dan tekstur |
| [`TASK_DIVISION.md`](docs/TASK_DIVISION.md) | Pembagian tugas anggota |
| [`GIT_WORKFLOW.md`](docs/GIT_WORKFLOW.md) | Alur kerja git tim |

## Keterbatasan

- Semua ukuran dan tata letak adalah perkiraan dari foto, belum diukur di lokasi; denah interior bersifat konseptual.
- Sisi belakang CCWS dibuat sama dengan depan karena tidak ada fotonya. Motor listrik dan lengan robot belum ada fotonya, jadi bentuknya generik.
- Mode jalan memakai tabrakan kotak sederhana: dinding, pameran, dan konter tidak bisa ditembus, tetapi meja, kursi, pohon, pagar, dan orang bisa. Tidak ada simulasi fisika.
- Kontrol pameran muncul sebagai popup saat lengan robot, motor, atau kereta diklik (picking dengan sinar terhadap kotak batas tiap mesh, `src/webgl/picking.js`). Picking hanya aktif dari dalam gedung atau saat atap dibuka, dan bisa salah pilih di tepi objek karena memakai kotak batas, bukan segitiga.
- Diuji di Chromium headless (renderer perangkat lunak); belum di GPU sungguhan atau browser lain.
