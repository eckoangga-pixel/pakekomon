# Petualangan Pikachu Cilik — Game Edukasi 3D

Game prototipe edukasi 3D berbasis HTML, CSS, JavaScript dan Three.js.

## Menjalankan
1. Ekstrak ZIP.
2. Jalankan server lokal dari folder proyek (disarankan karena `game.js` memakai JavaScript module dan memuat aset).
   - Jika Python terpasang: `python -m http.server 8000`
   - Buka `http://localhost:8000`
3. Internet diperlukan untuk memuat Three.js dari CDN dan font. Aset gambar Pokémon sudah disertakan lokal.

## Kontrol
- HP/tablet/Papan Interaktif Digital: geser jari pada arena untuk bergerak dan menghindar; tombol TEMBAK dan LOMPAT.
- Laptop: geser/klik arena untuk menembak, tombol panah atau A/D untuk bergerak, W/↑ untuk melompat, Spasi untuk menembak, Esc untuk jeda.
- Pilih kelas, mata pelajaran, kesulitan dan mode di layar persiapan.
- Setiap misi memiliki 10 soal, nyawa, skor, jeda, dan reward bintang.

## Catatan
- Mode Duo/Squad pada prototipe ini merupakan mode kerja sama lokal bergiliran pada satu perangkat, belum multiplayer online.
- Pertanyaan merupakan contoh awal untuk demonstrasi. Mohon ditinjau guru dan disesuaikan dengan ATP/modul ajar serta konteks sekolah sebelum digunakan sebagai asesmen resmi. Pendekatan Pembelajaran Mendalam menekankan pembelajaran berkesadaran, bermakna, dan menggembirakan; implementasi kurikulum dan materi perlu diselaraskan oleh satuan pendidikan.
- Efek suara dibuat secara sintetis melalui Web Audio API, bukan rekaman audio resmi Pokémon.
- Aset visual yang dipakai adalah file yang diberikan pengguna.
