# Tugas 2 Grafika Komputer — CCWS ITS

Proyek kelompok: scene 3D tampak luar gedung CCWS ITS, dibuat dengan WebGL2 dan shader GLSL secara langsung, tanpa library 3D. Naskah tugas menyebut tiga minggu; tim memakai **tiga bulan** agar model sedetail dan semirip mungkin dengan foto dan semua kriteria penilaian terpenuhi.

CCWS dan fokus tampak luar adalah pilihan kerja tim, bukan objek yang diwajibkan dosen. Fokus utama adalah gedung CCWS; lingkungan cukup sebagai konteks.

## Fitur

- **Model CCWS detail:** fasad dengan kusen 3D dan jendela atas berengsel, portal OPOP Training Center dengan pintu kaca, undakan, dan ramp, sisi co-working dengan papan nama berketebalan dan pintu ganda, kanopi segilima dengan rangka "^", tempat sampah, talang, dan pot tanaman.
- **Animasi berbasis pivot:** pintu utama dan pintu samping, jendela atas, tutup tempat sampah, pohon dan palem, siang–malam, serta "Urai hierarki" yang memisahkan bagian-bagian gedung dari induknya.
- **Lighting:** ambient hemisfer, matahari/bulan (Lambert + Blinn-Phong), bayangan shadow map, lampu titik yang menyala malam hari, pantulan langit pada kaca, cahaya jendela, kabut, dan langit gradasi.
- **Tekstur:** paving dari foto tim, tekstur prosedural (plester, noda, beton, genteng, teralis, rumput sintetis, kerikil, plafon), bump mapping, dan huruf alpha-test.
- **Halaman utama:** nama kelompok, model, foto dan video asli, pohon hubungan objek, dan pembagian tugas. Tombol "Sudut kamera" menyamakan sudut pandang dengan tiap foto.

```bash
npm install
npm run dev
npm run build
```

Parameter URL untuk demo, misalnya `?jam=19.5&kamera=pintuUtama` (lihat `docs/INTERACTION_SPEC.md`).

## Keterbatasan

- Semua ukuran adalah perkiraan dari foto, belum diukur di lokasi.
- Sisi belakang CCWS dibuat sama dengan depan karena tidak ada fotonya.
- Tidak memakai library 3D apa pun; satu-satunya dependensi adalah Vite.

## Dokumen

[Naskah tugas](docs/Tugas%202%20Animasi,%20Object%203D,%20Lighting,%20Texture.md), [rencana proyek](docs/PROJECT_PLAN.md), [jadwal tiga bulan](docs/THREE_WEEK_ROADMAP.md), [pemetaan kriteria](docs/REQUIREMENTS_TRACEABILITY.md), [konsep → kode](docs/COURSE_CONCEPT_MAPPING.md), dan [demo dan challenge](docs/DEMO_AND_CHALLENGE_PLAN.md).
