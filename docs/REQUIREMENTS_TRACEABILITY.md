# Pemetaan Tugas 2

Sumber: [naskah tugas](Tugas%202%20Animasi,%20Object%203D,%20Lighting,%20Texture.md). Tim memakai jadwal tiga bulan (naskah: tiga minggu); pilihan CCWS adalah keputusan tim.

## Ketentuan dan isi halaman

| Ketentuan | Pemenuhan | Cara memeriksa |
|---|---|---|
| Maksimal dua orang; satu orang mengumpulkan | Kemas Muhammad Athariq dan Gilbran Mahdavikia Raja | Bagian "Pembagian tugas" di halaman |
| Implementasi dengan WebGL | WebGL2 dan GLSL langsung di `src/webgl/`, tanpa library 3D | `src/webgl/renderer.js` memanggil `gl.*` sendiri |
| Animasi beberapa objek di lingkungan ITS | Pintu utama, pintu samping, jendela atas berengsel, tutup tempat sampah, pohon dan palem, siang–malam, urai hierarki | Kanvas, centang "Animasi objek" |
| a. Nama kelompok | Judul halaman | Masih `[nama kelompok]`, perlu diisi |
| c. Foto objek asli | Bagian "Foto asli lokasi" (6 foto tim) | Halaman utama |
| d. Video objek asli | Bagian "Video asli lokasi" (2 video tim) | Halaman utama |
| e. Canvas dekat gambar | Kanvas di bagian atas; foto tepat di bawahnya; tombol "Sudut kamera" menyamakan sudut pandang dengan tiap foto | Klik "Fasad, sudut kiri", bandingkan dengan foto pertama |
| f. Desain tree hubungan antar objek | Bagian "Pohon hubungan objek", dibaca langsung dari scene graph | Halaman utama; ringkasan di `SCENE_GRAPH.md` |
| Pembagian tugas | Tabel anggota, NRP, dan tugas | Halaman utama; `TASK_DIVISION.md` |

## Kriteria penilaian

| Kriteria | Yang sudah dibuat | Yang ditunjukkan saat demo |
|---|---|---|
| a. Kompleksitas | ±1.080 simpul scene graph, ±870 mesh. Detail CCWS: kusen jendela 3D per panel, 42 daun jendela atas berengsel, talang bulat berleher angsa, pot berisi lidah mertua, pintu kaca berbingkai dengan gagang, portal dengan tangga–ramp–tangga, huruf papan nama berketebalan, kanopi segilima dengan rangka "^", tempat sampah beroda dengan tutup berengsel. Tiga program shader (bayangan, langit, scene). | "Urai hierarki", "Dari atas", pohon objek |
| b. Kemiripan dengan real | Tata letak fasad, kanopi, dan sisi co-working diturunkan dari foto dan video (lihat `SITE_EVIDENCE_AND_ASSUMPTIONS.md`); jam awal 16:24 sama dengan waktu pengambilan foto; preset kamera dengan FOV lebar meniru lensa ultra-wide ponsel | Tombol "Sudut kamera" lalu bandingkan dengan foto di bawah kanvas |
| c. Pembagian | Tabel pembagian tugas dengan nama dan NRP | Tiap anggota menjelaskan bagiannya |
| d. Lighting, texture | Ambient hemisfer, cahaya matahari/bulan (Lambert + Blinn-Phong), bayangan shadow map dengan PCF 3×3, 3 lampu titik yang menyala malam hari, jendela dan lampu bercahaya (emisi), pantulan langit pada kaca (Fresnel), kabut, langit gradasi dengan matahari dan bintang. Tekstur: paving dari foto, plus tekstur kanvas untuk plester, noda alas, beton, genteng, teralis jendela, rumput sintetis, kerikil, plafon, dan huruf; bump mapping dari kecerahan tekstur | Slider "Waktu", centang "Bayangan" dan "Tekstur" |
| e. Kemampuan menjelaskan | Komentar singkat di setiap modul; peta konsep → kode di `COURSE_CONCEPT_MAPPING.md` | Ikuti urutan di `DEMO_AND_CHALLENGE_PLAN.md` |
| f. Kemampuan menyelesaikan challenge | Parameter terpusat (ukuran gedung, waktu, kecepatan animasi, warna lampu) dan daftar challenge yang mungkin beserta lokasi kodenya | Latihan di `DEMO_AND_CHALLENGE_PLAN.md` |

Naskah tidak menjelaskan lebih lanjut arti kriteria "Pembagian"; tim menafsirkannya sebagai pembagian pekerjaan. Daftar isi halaman pada naskah melewati butir b, sehingga tidak ada butir tambahan yang diasumsikan.
