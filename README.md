# Tugas 2 Grafika Komputer — CCWS ITS

Proyek kelompok: scene 3D CCWS ITS (tampak luar, interior sederhana, dan pameran inovasi), dibuat dengan **WebGL2 dan shader GLSL ES 3.00 secara langsung**, tanpa library 3D apa pun (bukan Three.js). Vite hanya server pengembangan dan alat build. Naskah tugas memberi waktu **tiga minggu**.

CCWS adalah pilihan kerja tim, bukan objek yang diwajibkan dosen.

## Fitur

- **Model CCWS detail:** fasad dengan kusen 3D dan jendela atas berengsel, portal OPOP Training Center dengan pintu kaca, undakan, dan ramp, sisi co-working dengan papan nama berketebalan dan pintu ganda, kanopi segilima dengan rangka "^", tempat sampah, talang, dan pot tanaman.
- **Animasi berbasis pivot:** pintu utama dan pintu samping, jendela atas, tutup tempat sampah, pohon dan palem, siang–malam, serta "Urai hierarki" yang memisahkan bagian-bagian gedung dari induknya.
- **Lighting:** ambient hemisfer, matahari/bulan (Lambert + Blinn-Phong), bayangan shadow map, lampu titik yang menyala malam hari, pantulan langit pada kaca, cahaya jendela, kabut, dan langit gradasi.
- **Tekstur:** paving dari foto tim, tekstur prosedural (plester, noda, beton, genteng, teralis, rumput sintetis, kerikil, plafon), bump mapping, dan huruf alpha-test.
- **Interior dan pameran:** dinding berongga dengan jendela dari dalam, lantai kayu, plafon dengan balok dan lampu, delapan meja, 22 kursi, sofa, konter kafe, mockup kereta (pintu geser, layar dan lampu), motor listrik (dua pivot roda, daya), dan lengan robot lima sendi dengan batas sudut serta ambil–lepas kotak. Kamera interior, lampu titik langit-langit, dan "Buka atap".
- **Halaman utama:** nama kelompok, model, foto dan video asli, pohon hubungan objek, dan pembagian tugas. Tombol "Sudut kamera" menyamakan sudut pandang dengan tiap foto.

```bash
npm install
npm run dev
npm run build
```

Parameter URL untuk demo, misalnya `?jam=19.5&kamera=pintuUtama` (lihat `docs/INTERACTION_SPEC.md`).

## Keterbatasan

- Semua ukuran dan tata letak adalah perkiraan dari foto, belum diukur di lokasi; denah interior konseptual (`docs/FLOOR_PLAN.md`).
- Motor listrik dan lengan robot belum ada fotonya; bentuknya generik. Tulisan "HST JAKARTA" tidak dianggap bukti bahwa kereta itu pameran Whoosh.
- Kontrol pameran lewat tombol di halaman; belum ada picking mouse atau kontrol orang pertama. Kotak yang dilepas di udara tetap melayang (tanpa fisika).
- Diuji di Chromium headless (renderer perangkat lunak); belum di GPU sungguhan atau browser lain.
- Sisi belakang CCWS dibuat sama dengan depan karena tidak ada fotonya.
- Tidak memakai library 3D apa pun; satu-satunya dependensi adalah Vite.

## Dokumen

[Naskah tugas](docs/Tugas%202%20Animasi,%20Object%203D,%20Lighting,%20Texture.md), [rencana proyek](docs/PROJECT_PLAN.md), [jadwal](docs/THREE_WEEK_ROADMAP.md), [pemetaan kriteria](docs/REQUIREMENTS_TRACEABILITY.md), [konsep → kode](docs/COURSE_CONCEPT_MAPPING.md), dan [demo dan challenge](docs/DEMO_AND_CHALLENGE_PLAN.md).
