# Spesifikasi Teknis Tugas Pertemuan 16 - Pemrograman Web 1

## Identitas Mahasiswa
- **Nama Lengkap :** Hadi Sulaiman
- **NIM :** 241011402572
- **Kelas :** 05TPLM003
- **Program Studi :** Teknik Informatika S-1
- **Fakultas :** Ilmu Komputer
- **Perguruan Tinggi :** Universitas Pamulang
- **Mata Kuliah :** Pemrograman Web 1 (Pertemuan 16)
- **Topik :** Aplikasi Web Pengambilan Keputusan (Branching) dan Pengolahan Data Perulangan (Looping) Berdasarkan Variasi NIM

---

## 1. Pemetaan Digit NIM terhadap Jenis Aplikasi
Digit terakhir dari NIM `241011402572` adalah angka **`2`**.

| Digit | Jenis Aplikasi | Proses yang Harus Dibuat | Status Pemilihan |
| :---: | :--- | :--- | :---: |
| 0 | Sistem Penilaian Mahasiswa | Menentukan grade dan menampilkan daftar nilai | - |
| 1 | Sistem Kasir Mini | Menghitung total belanja dan menentukan kategori diskon | - |
| **2** | **Sistem Reservasi Hotel** | **Menghitung biaya menginap dan menentukan kategori kamar** | **TERPILIH (&check;)** |
| 3 | Sistem Perpustakaan | Menghitung denda dan menentukan status keterlambatan | - |
| 4 | Sistem Parkir | Menghitung tarif berdasarkan durasi dan jenis kendaraan | - |
| 5 | Sistem Penggajian | Menghitung gaji dan menentukan kategori tunjangan | - |
| 6 | Sistem Tiket Wisata | Menghitung harga tiket dan menentukan kategori pengunjung | - |
| 7 | Sistem Pemesanan Makanan | Menghitung total pesanan dan menentukan promo | - |
| 8 | Sistem Kursus | Menghitung nilai akhir dan menentukan status kelulusan | - |
| 9 | Sistem Inventaris | Menghitung stok dan menentukan status persediaan | - |

---

## 2. Pemetaan Digit Ketiga Terakhir NIM terhadap Tantangan Perulangan
Tiga digit terakhir NIM `241011402572` adalah `5`, `7`, `2`.  
Digit ketiga terakhir (dihitung dari belakang) adalah angka **`5`**.

| Digit | Tantangan Perulangan | Status Pemilihan |
| :---: | :--- | :---: |
| 0 | Menampilkan data berurutan dari kecil ke besar | - |
| 1 | Menampilkan data berurutan dari besar ke kecil | - |
| 2 | Menampilkan hanya data bernilai genap | - |
| 3 | Menampilkan hanya data bernilai ganjil | - |
| 4 | Menghitung jumlah keseluruhan data | - |
| **5** | **Menghitung rata-rata data** | **TERPILIH (&check;)** |
| 6 | Menghitung jumlah data yang memenuhi kondisi | - |
| 7 | Menampilkan data berdasarkan kategori | - |
| 8 | Mencari nilai terbesar dari sekumpulan data | - |
| 9 | Mencari nilai terkecil dari sekumpulan data | - |

**Implementasi Tantangan pada Sistem Reservasi Hotel:**
1. Menghitung rata-rata biaya menginap harian dari seluruh transaksi reservasi.
2. Menghitung rata-rata durasi menginap tamu (satuan malam).
3. Menghitung rata-rata total nominal transaksi per reservasi.

---

## 3. Ketentuan Pengambilan 5 Digit Terakhir NIM
Lima digit terakhir dari NIM `241011402572` dibaca dari kiri ke kanan:
`0`, `2`, `5`, `7`, `2`.

> **Aturan Khusus Soal:**  
> *"Gunakan 5 digit terakhir NIM, dihitung dari kiri ke kanan. Jika terdapat angka 0, diganti menjadi 9 khusus untuk menentukan jumlah implementasi."*

Penyesuaian nilai digit untuk perhitungan implementasi:
- **Digit ke-1 :** Asli = `0` &rarr; Disesuaikan = **`9`**
- **Digit ke-2 :** Asli = `2` &rarr; Disesuaikan = **`2`**
- **Digit ke-3 :** Asli = `5` &rarr; Disesuaikan = **`5`**
- **Digit ke-4 :** Asli = `7` &rarr; Disesuaikan = **`7`**
- **Digit ke-5 :** Asli = `2` &rarr; Disesuaikan = **`2`**

---

## 4. Matriks Implementasi Struktur Kontrol & Perulangan JavaScript

| Fitur JavaScript | Posisi Digit NIM | Nilai Digit | Rumus / Ketentuan Soal | Target Implementasi Nyata | Rincian Modul Program |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **`if`** | Digit ke-1 | **9** | Minimal sebanyak nilai digit untuk memeriksa kondisi | **Minimal 9 kondisi pemeriksaan (`if`)** | 9 validasi input & guard clauses (Nama kosong, nomor telepon, tanggal check-in, durasi, kapasitas, kode promo, opsi deposit, member loyalty, extra bed). |
| **`if...else`** | Digit ke-2 | **2** | Minimal sebanyak nilai digit untuk menentukan dua kemungkinan | **Minimal 2 blok percabangan (`if...else`)** | 1) Surcharge akhir pekan (Weekend vs Weekday), 2) Status garansi reservasi (Instant vs Manual Verification). |
| **`if...else if...else`** | Digit ke-3 | **5** | Minimal sebanyak nilai digit untuk menentukan kategori keputusan | **Minimal 5 kategori keputusan** | Klasifikasi Tingkat Diskon Menginap & Kategori Kemewahan Kamar (Reguler, Saver, Weekly, Extended, Long-term Resident). |
| **`switch...case`** | Digit ke-4 | **7** | Jumlah minimal case = digit + 2, di luar default | **Minimal 9 `case` + 1 `default`** | Pemilihan 9 Tipe Kamar Hotel (STD, DLX, PRE, EXE, JS, FAM, PS, VIL, ROY) + default fallback. |
| **`for`** | Digit ke-1 | **9** | Minimal jumlah iterasi = digit + 3 | **Minimal 12 iterasi loop** | Perulangan kalkulasi jadwal rincian tarif 12 malam/hari menginap secara detail per tanggal. |
| **`while`** | Digit ke-2 | **2** | Minimal jumlah iterasi = digit + 2 | **Minimal 4 iterasi loop** | Perulangan alokasi angsuran deposit bertahap / verifikasi multi-lantai kamar (4 siklus verifikasi). |
| **`do...while`** | Digit ke-3 | **5** | Minimal jumlah iterasi = digit + 1 | **Minimal 6 iterasi loop** | Perulangan validasi 6 fasilitas tambahan kamar (amenities checklist: Breakfast, Airport Shuttle, Wi-Fi 6, Spa, Late Checkout, Welcome Drink). |
| **`Array`** | Digit ke-4 | **7** | Minimal jumlah elemen array = digit + 3 | **Minimal 10 elemen array** | Array katalog kamar hotel (10+ tipe kamar) dan array data histori reservasi (10+ transaksi awal). |

---

## 5. Standar Rekayasa & Estetika Antarmuka
Aplikasi dibangun mengacu pada standar rekayasa frontend profesional:
1. **Tipografi Berkarakter :** Tipografi editorial berkarakter perhotelan mewah (*Plus Jakarta Sans*, *Newsreader*, dan *JetBrains Mono*).
2. **Interaktivitas Reaktif :** Interaksi formulir reaktif, kalkulasi instan tanpa reload, umpan balik visual yang jelas, dan penanganan status kosong (*empty states*).
3. **Penyajian Bersih & Presisi :** Skala spasi berbasis 4px/8px, palet warna bertema *Heritage Basalt, Walnut, dan Terracotta*, bebas dari gradien berlebihan, ikon SVG inline standar, serta penyajian nominal angka rupiah yang presisi (*tabular figures*).
