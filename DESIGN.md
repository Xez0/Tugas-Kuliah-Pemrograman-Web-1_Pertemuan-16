# Design System: Svarga Heritage Hotel & Resort

Dokumentasi sistem desain antarmuka aplikasi Sistem Reservasi Hotel (*Hotel Reservation & Guest Billing System*) yang disusun berdasarkan prinsip desain antarmuka yang bersih, konsisten, berkarakter profesional, dan berorientasi pada kemudahan pengguna.

---

## 1. Identitas & Karakter Produk
- **Produk :** Sistem Reservasi Hotel & Kalkulasi Tagihan Tamu Svarga Heritage.
- **Karakter :** *Calm, exact, and architecturally warm.* Nuansa kemewahan *heritage hospitality* Indonesia yang tenang, presisi, dan terstruktur rapi.
- **Dunia / Konteks :** Resor warisan budaya, kayu kenari berpolitur, batu pasir andesit, kertas linen berbobot, dan pencahayaan temaram hangat.
- **Mode :** `Operate` (fokus pada kemudahan input data, pembacaan kalkulasi instan, presisi angka mata uang, serta analisis statistik).
- **Detail Tanda Tangan (*Signature*) :** Tata letak kartu struk nota reservasi bergaya *folio bill* klasik perhotelan dengan garis perforasi halus dan stempel status dinamis.

---

## 2. Palet Warna (The Heritage Neutral & Terracotta Ramp)

```css
:root {
  /* Permukaan Kanvas & Latar Belakang */
  --bg-canvas: #FBF9F5;
  --bg-surface: #FFFFFF;
  --bg-subtle: #F3EFEA;
  --bg-hover: #ECE6DD;
  --bg-accent-tint: #FBF1EB;

  /* Garis & Pembatas (Hairline Borders) */
  --border-subtle: #E7E1D8;
  --border-strong: #D2C8BA;
  --border-focus: #9C4B27;

  /* Peran Tipografi */
  --text-primary: #181A1C;     /* Basalt charcoal berbobot tinggi */
  --text-secondary: #4A5157;   /* Warna teks sekunder berimbang */
  --text-muted: #788089;       /* Keterangan meta & label pasif */
  --text-inverse: #FFFFFF;

  /* Aksen Utama (Terracotta & Warm Bronze) */
  --accent-primary: #9C4B27;
  --accent-hover: #833D1E;
  --accent-active: #6E3218;

  /* Warna Semantik Status */
  --status-success-bg: #EAF4EE;
  --status-success-text: #1B5E38;
  --status-warning-bg: #FCF4E8;
  --status-warning-text: #965B17;
  --status-danger-bg: #FDEEEE;
  --status-danger-text: #A12B26;
  --status-info-bg: #EEF3FA;
  --status-info-text: #23548F;
}
```

---

## 3. Tipografi & Hierarki
- **Font Display / Heading :** `'Newsreader', Georgia, serif` &mdash; memberikan sentuhan wibawa editorial perhotelan bintang lima pada judul utama dan rincian tarif nominal.
- **Font UI / Body :** `'Plus Jakarta Sans', -apple-system, sans-serif` &mdash; keterbacaan tinggi pada teks formulir, label, tombol, dan tabel.
- **Font Monospace :** `'JetBrains Mono', Consolas, monospace` &mdash; untuk kode booking, ID kamar, kalkulasi matematis, dan angka tabular (`font-variant-numeric: tabular-nums`).

---

## 4. Skala Spasi (Grid 4px Berdisiplin)
Semua jarak margin, padding, dan gap menggunakan kelipatan 4px:
- `4px`  : Jarak mikro ikon ke label kecil.
- `8px`  : Spasi kontrol formulir internal, tag status.
- `12px` : Padding vertikal input text dan dropdown select.
- `16px` : Padding tombol aksi dan spasi antar field input.
- `20px` : Padding kartu metrik statistik.
- `24px` : Padding kartu formulir utama dan panel struk.
- `32px` : Gap utama grid antara formulir reservasi dan panel tagihan.
- `48px` : Margin pemisah antar section halaman.

---

## 5. Standar Rekayasa & Estetika Antarmuka
1. **Pewarnaan Bersih & Terarah :** Tidak menggunakan efek gradien berlebihan atau teks bersinar agar kontras tetap nyaman dibaca.
2. **Ikonografi Vektor Murni :** Seluruh ikon menggunakan SVG inline berskala 16px/20px dengan ketebalan garis konsisten (1.5px/2px), tanpa emoji di judul tombol atau label formulir.
3. **Format Angka Tabular :** Setiap nominal harga disajikan dalam standar Rupiah yang konsisten (`Rp 1.500.000`) dengan fitur penyelarasan rata kanan pada kolom tabel angka.
4. **Validasi & Penanganan Status Nyata :** Formulir dilengkapi pesan galat kontekstual dan tabel memiliki status *empty state* yang informatif.
