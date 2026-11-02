# Rencana Proyek — Tugas 2 CCWS ITS

## Target

Buat scene 3D tampak luar gedung CCWS ITS yang sedetail dan semirip mungkin dengan foto asli, dengan WebGL langsung. Naskah [tugas](Tugas%202%20Animasi,%20Object%203D,%20Lighting,%20Texture.md) menyebut tiga minggu dan maksimal dua anggota; tim memakai waktu **tiga bulan** agar setiap kriteria penilaian (kompleksitas, kemiripan, pembagian, lighting/texture, penjelasan, challenge) terpenuhi sebaik mungkin.

CCWS dan fokus tampak luar adalah pilihan kerja tim, bukan objek yang diwajibkan dosen. Fokus utama adalah gedung CCWS; lingkungan cukup sebagai konteks.

## Yang dikerjakan

1. Gedung CCWS sedetail mungkin sesuai foto: fasad, jendela, portal, pintu, kanopi, papan nama, talang, pot, dan tempat sampah.
2. WebGL langsung: shader, buffer, transformasi, kamera, lighting lanjut (bayangan, lampu titik, siang–malam), dan tekstur.
3. Hierarki induk–anak dengan pivot dan animasi beberapa objek.
4. Satu halaman berisi nama kelompok, foto dan video asli, canvas dekat foto, pohon hubungan objek, serta pembagian tugas.
5. Penjelasan konsep dan latihan challenge untuk masing-masing anggota (`DEMO_AND_CHALLENGE_PLAN.md`). Satu anggota mengumpulkan.

Interior lengkap, robot, kendaraan, kontrol orang pertama, picking, dan simulasi fisika tidak menjadi target.

## Selesai jika

- Scene berjalan di browser dengan WebGL langsung, menampilkan model CCWS yang detail, animasi beberapa objek, lighting, dan tekstur.
- Transformasi induk–anak dapat ditunjukkan ("Urai hierarki") dan dijelaskan.
- Halaman memuat seluruh bahan yang diminta; foto dan video adalah rekaman asli.
- Kedua anggota memahami bagian masing-masing dan bisa mengerjakan challenge sederhana; build berhasil dan aplikasi diperiksa di browser.

## Kondisi saat ini

Lihat `REQUIREMENTS_TRACEABILITY.md` untuk pemetaan tiap kriteria ke fitur yang sudah dibuat. Yang masih kurang: nama kelompok, dua digit terakhir NRP Kemas, ukuran nyata dari lokasi (semua ukuran masih perkiraan dari foto), dan latihan demo. File Three.js dari scaffold awal masih ada di repo tetapi tidak dipakai.
