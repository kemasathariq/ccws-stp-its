# Petunjuk proyek

Baca `docs/PROJECT_PLAN.md`, `docs/REQUIREMENTS_TRACEABILITY.md`, dan `docs/THREE_WEEK_ROADMAP.md` sebelum mengubah proyek. Naskah tugas menyebut tiga minggu; tim memakai jadwal tiga bulan agar model sedetail mungkin dan semua kriteria penilaian terpenuhi.

- Target: scene tampak luar gedung CCWS ITS yang sedetail dan semirip mungkin dengan foto, dibuat dengan API WebGL langsung dan shader GLSL. Fokus utama gedung CCWS; lingkungan cukup sebagai konteks.
- Kriteria penilaian: kompleksitas, kemiripan dengan real, pembagian, lighting dan texture, kemampuan menjelaskan, dan kemampuan menyelesaikan challenge. Pemetaannya ada di `docs/REQUIREMENTS_TRACEABILITY.md`.
- Halaman utama harus memuat nama kelompok, foto dan video asli, canvas dekat foto, pohon hubungan objek, dan pembagian tugas.
- Jangan perluas target menjadi interior lengkap, robot, kendaraan, kontrol orang pertama, atau sistem interaksi kompleks.
- Renderer WebGL2 langsung ada di `src/webgl/`, model di `src/models/`, siang–malam dan animasi di `src/world/`. File Three.js lama masih ada dan tidak dipakai; uji di browser sebelum mengklaim fitur selesai.
- Pertahankan foto referensi, tandai ukuran yang belum diukur sebagai perkiraan, dan koordinasikan perubahan file bersama.
- Jalankan build dan uji browser sesuai perubahan. Laporkan keterbatasan yang masih ada.
