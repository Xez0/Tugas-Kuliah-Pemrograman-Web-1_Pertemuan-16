# Panduan Menjelaskan Kode Tugas ke Dosen (Cheat Sheet Presentasi)
**Mata Kuliah :** Pemrograman Web 1 (Pertemuan 16)  
**Mahasiswa   :** Hadi Sulaiman (NIM: 241011402572) &bull; Kelas: 05TPLM003  
**Aplikasi    :** Sistem Reservasi Hotel & Kalkulasi Tagihan Tamu (*Svarga Heritage Hotel*)

---

## 1. Pertanyaan Pembuka: "Kenapa Memilih Tema dan Rumus Ini?"

> **Pertanyaan Dosen :** *"Dari mana kamu menentukan tema website dan rumus-rumus perulangannya?"*

### Jawaban Mahasiswa:
> *"Izin menjelaskan, Pak/Bu. Seluruh penentuan tema dan logika program mengacu ketat pada petunjuk penugasan Pertemuan 16 berdasarkan **variasi digit NIM saya (241011402572)**:*
> 1. ***Digit Terakhir NIM saya adalah 2***, yang menurut tabel soal diwajibkan membuat **Sistem Reservasi Hotel** dengan proses menghitung biaya menginap dan menentukan kategori kamar.
> 2. ***Digit Ketiga Terakhir NIM saya adalah 5*** (dari 3 digit terakhir: 5, 7, 2), yang menurut tabel mewajibkan tantangan perulangan **Menghitung Rata-rata Data (Mean)**.
> 3. ***5 Digit Terakhir NIM saya (0, 2, 5, 7, 2)*** dengan aturan khusus soal: *Jika ada angka 0, diganti menjadi 9*. Maka kombinasinya menjadi:
>    - **Digit 1 (nilai 9)** : Minimal 9 kondisi `if` dan minimal 9+3 = 12 iterasi loop `for`.
>    - **Digit 2 (nilai 2)** : Minimal 2 kemungkinan `if...else` dan minimal 2+2 = 4 iterasi loop `while`.
>    - **Digit 3 (nilai 5)** : Minimal 5 kategori `if...else if...else` dan minimal 5+1 = 6 iterasi loop `do...while`.
>    - **Digit 4 (nilai 7)** : Minimal 7+2 = 9 case pada `switch...case` dan minimal 7+3 = 10 elemen `Array`.*

---

## 2. Cara Menjelaskan CSS (`style.css`) ke Dosen

### A. Variabel Desain (`:root`)
> **Pertanyaan Dosen :** *"Kenapa variabel CSS diletakkan di `:root` dan apa keuntungannya?"*
* **Jawaban :**  
  > *"`:root` merepresentasikan elemen tertinggi di DOM (identik dengan elemen `<html>`). Dengan meletakkan variabel di `:root`, semua variabel bersifat global sehingga bisa diwariskan ke seluruh elemen di bawahnya. Keuntungannya adalah kemudahan pemeliharaan kode (*maintainability*). Jika ingin mengganti warna aksen terracotta atau jarak spasi hotel, kita cukup mengubah satu baris variabel di `:root` tanpa perlu mengubah ratusan baris CSS lainnya."*

### B. Properti `box-sizing: border-box`
> **Pertanyaan Dosen :** *"Apa fungsi `*, *::before, *::after { box-sizing: border-box; }`?"*
* **Jawaban :**  
  > *"Pada model box standar bawaan browser (`content-box`), lebar elemen dihitung di luar padding dan border. Jika sebuah kotak lebarnya 300px lalu diberi padding 20px dan border 2px, maka total lebarnya membengkak menjadi 344px dan sering membuat layout berantakan/patah.  
  Dengan `box-sizing: border-box`, padding dan border dihitung di **dalam** kotak, sehingga total lebar kotak tetap persis 300px. Ini menjamin akurasi layout sistem grid kita."*

### C. Kapan Menggunakan Flexbox vs CSS Grid?
> **Pertanyaan Dosen :** *"Kapan kamu memakai Flexbox dan kapan memakai CSS Grid?"*
* **Jawaban :**  
  > *"Saya menggunakan **CSS Grid** untuk tata letak 2 dimensi (baris dan kolom sekaligus), seperti pembagian layout utama `.reservation-grid` (kolom formulir 1.25fr dan kolom struk 1fr) serta form row multi-kolom (`repeat(2, 1fr)`).  
  Sedangkan **Flexbox** saya gunakan untuk tata letak 1 dimensi (hanya baris ATAU kolom saja), seperti bilah navigasi header (`justify-content: space-between` untuk merapatkan logo di kiri dan nama mahasiswa di kanan), penyejajaran ikon SVG di dalam tombol, dan tumpukan vertikal pada rincian nota tagihan."*

### D. Rekayasa Checkbox Kustom & Saklar Switch
> **Pertanyaan Dosen :** *"Bagaimana cara membuat checkbox fasilitas dan switch toggle tanpa plugin JavaScript?"*
* **Jawaban :**  
  > *"Checkbox bawaan browser yang kaku disembunyikan menggunakan `opacity: 0; position: absolute;` agar tetap bisa difokuskan oleh keyboard (aksesibilitas).  
  Kemudian kita membuat kotak visual pengganti menggunakan class `.checkbox-indicator`. Saat dicentang (`:checked`), pseudo-class `:checked + .checkbox-indicator` memberi warna latar terracotta dan pseudo-element `::after` menggambar tanda centang menggunakan dua sisi border CSS (bawah dan kanan) yang diputar 45 derajat (`transform: rotate(45deg)`).  
  Untuk saklar switch, lingkaran putih digeser secara halus ke kanan sejauh 18px menggunakan `transform: translateX(18px)` ketika input berstatus `:checked`."*

### E. Posisi Mengambang Nota Tagihan (`position: sticky`)
> **Pertanyaan Dosen :** *"Kenapa nota tagihan di sebelah kanan bisa tetap melayang saat halaman digulir?"*
* **Jawaban :**  
  > *"Kartu nota tagihan menggunakan `position: sticky; top: 96px;`. Elemen ini akan berperilaku relatif normal sampai posisinya mencapai jarak 96px dari atas viewport, lalu secara otomatis terkunci (mengambang) mengikuti pengguna saat menggulir halaman. Ini memastikan tamu selalu melihat total tagihan saat mengisi form yang panjang."*

### F. Aturan Cetak `@media print`
> **Pertanyaan Dosen :** *"Bagaimana cara kerja fitur cetak struk nota fisik?"*
* **Jawaban :**  
  > *"Kita memanfaatkan media query `@media print`. Ketika pengguna menekan tombol 'Cetak Struk' atau pintasan `Ctrl + P`, browser akan menerapkan aturan khusus cetak: seluruh elemen layar (header, banner, formulir input, tabel data, modal, dan tombol aksi) disembunyikan menggunakan `display: none !important;`.  
  Hanya kartu struk tamu `.folio-card` yang ditampilkan dengan latar putih bersih, border hitam tegas, dan teks hitam hemat tinta untuk menghasilkan lembar fisik kwitansi hotel yang rapi."*

---

## 3. Cara Menjelaskan Logika JavaScript (`script.js`) ke Dosen

### A. Struktur Percabangan (Decision Control)
1. **`if` Mandiri (10 Kondisi Guard Clauses) :**  
   Mengevaluasi validasi input secara ketat satu per satu: nama tidak boleh kosong, panjang no telepon minimal 10 digit, kamar harus dipilih, tanggal check-in tidak lampau, check-out setelah check-in, jumlah tamu tidak melampaui kapasitas kamar, durasi maksimal reservasi online, konsistensi ekstra bed, validasi kode promo, dan opsi deposit instan.
2. **`if...else` (2 Kemungkinan Ganda) :**  
   - Blok 1: Penentuan Surcharge Akhir Pekan (`isWeekend === true ? 15% : 0%`).
   - Blok 2: Penentuan Status Garansi Reservasi (`deposit === 'full' ? 'Terkonfirmasi Instan' : 'Hold 24 Jam'`).
3. **`if...else if...else` (5 Kategori Keputusan) :**  
   - Blok 1: Klasifikasi Kategori Kamar Berdasarkan Tarif Dasar (*Standard, Deluxe, Executive, Presidential, Penthouse*).
   - Blok 2: Klasifikasi 5 Tingkat Diskon Durasi Menginap (*Reguler 0%, Saver 5%, Weekly 10%, Extended 15%, Long Term 25%*).
4. **`switch...case` (9 Case + 1 Default Fallback) :**  
   Memetakan kode kamar (`STD`, `DLX`, `PRE`, `EXE`, `JS`, `FAM`, `PS`, `VIL`, `ROY`) ke objek spesifikasi tarif dasar, nama kamar, dan kapasitas maksimal, dengan cabang `default` untuk menangani pilihan yang tidak sah.

### B. Struktur Perulangan (Looping Algorithms)
1. **`for` (12 Iterasi) :**  
   Loop `for (let day = 1; day <= 12; day++)` menghasilkan breakdown simulasi kalender 12 malam menginap dengan mengevaluasi tanggal kalender, status hari kerja vs akhir pekan, dan menghitung akumulasi saldo kumulatif.
2. **`while` (4 Iterasi) :**  
   Loop `while (step < 4)` mensimulasikan pembagian pembayaran grand total ke dalam 4 termin angsuran deposit berjangka masing-masing 25%.
3. **`do...while` (6 Iterasi) :**  
   Loop `do { ... } while (i < 6)` memeriksa dan memvalidasi 6 fasilitas tambahan kamar (*amenities*): Sarapan, Antar-Jemput VIP, Wi-Fi 6, Spa Tradisional, Late Check-out, dan Extra Bed.
4. **Tantangan Perulangan NIM Digit 5 (Menghitung Rata-rata Data) :**  
   Fungsi `calculateStatisticalAverages(reservations)` mengiterasi seluruh elemen array data tamu, mengakumulasikan nilai `grandTotal`, `duration`, dan `amenitiesTotal`, lalu membaginya dengan jumlah total reservasi (`totalCount`) untuk mendapatkan nilai rata-rata (*mean*) secara matematis presisi.

---

## 4. Tips Saat Demo di Depan Dosen
1. Buka browser dan tunjukkan tampilan website yang rapi dan elegan.
2. Klik tombol **"Audit Algoritma NIM"** di bilah navigasi kanan atas untuk menampilkan modal verifikasi kepatuhan seluruh aturan soal.
3. Coba isi formulir reservasi (misalnya pilih Junior Suite, 2 tamu, centang sarapan & spa, masukkan promo `SVARGA2026`).
4. Tunjukkan struk sebelah kanan yang langsung terhitung secara otomatis.
5. Tekan tombol **"Konfirmasi & Simpan ke Data Tamu"**, lalu tunjukkan baris baru bertambah di tabel bawah dan angka rata-rata di kartu statistik langsung diperbarui secara dinamis.
6. Tekan tombol **"Cetak Struk"** untuk menunjukkan jendela print preview yang hanya mencetak nota hotel bersih!
