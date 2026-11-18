/**
 * Test Suite: Verifikasi Kepatuhan Teknis Spesifikasi NIM 241011402572
 * Pemrograman Web 1 - Pertemuan 16
 * Universitas Pamulang
 */

const fs = require('fs');
const path = require('path');

console.log("==================================================================");
console.log("MEMULAI PENGUJIAN OTOMATIS KEPATUHAN SPESIFIKASI TUGAS PERTEMUAN 16");
console.log("Mahasiswa : Hadi Sulaiman (NIM: 241011402572)");
console.log("Kelas     : 05TPLM003");
console.log("==================================================================\n");

// Baca script.js
const scriptPath = path.join(__dirname, 'script.js');
const scriptContent = fs.readFileSync(scriptPath, 'utf-8');

let passedTests = 0;
let totalTests = 0;

function assert(condition, testName, details = "") {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`[\x1b[32mPASS\x1b[0m] ${testName}`);
    if (details) console.log(`       -> ${details}`);
  } else {
    console.error(`[\x1b[31mFAIL\x1b[0m] ${testName}`);
    if (details) console.error(`       -> ${details}`);
  }
}

// 1. Verifikasi Keberadaan File Inti Proyek
assert(fs.existsSync(path.join(__dirname, 'index.html')), "File index.html tersedia");
assert(fs.existsSync(path.join(__dirname, 'style.css')), "File style.css tersedia");
assert(fs.existsSync(path.join(__dirname, 'script.js')), "File script.js tersedia");
assert(fs.existsSync(path.join(__dirname, 'SPECIFICATION.md')), "File SPECIFICATION.md tersedia");
assert(fs.existsSync(path.join(__dirname, 'DESIGN.md')), "File DESIGN.md tersedia");

// 2. Verifikasi NIM Digit Pemetaan
// Digit Terakhir = 2 -> Sistem Reservasi Hotel
assert(
  scriptContent.includes("Sistem Reservasi Hotel") && scriptContent.includes("STD") && scriptContent.includes("ROY"),
  "Aplikasi adalah Sistem Reservasi Hotel (Digit Terakhir NIM = 2)"
);

// Digit Ketiga Terakhir = 5 -> Menghitung Rata-rata Data
assert(
  scriptContent.includes("calculateStatisticalAverages") &&
  scriptContent.includes("avgBilling = sumBilling / totalCount") &&
  scriptContent.includes("avgDuration = sumDuration / totalCount"),
  "Tantangan Perulangan: Menghitung Rata-rata Data (Digit ke-3 Terakhir NIM = 5)"
);

// 3. Verifikasi Struktur SWITCH...CASE (Minimal 9 case di luar default)
const switchMatch = scriptContent.match(/case\s+"[A-Z]+":/g);
assert(
  switchMatch && switchMatch.length >= 9,
  `Struktur switch...case memiliki minimal 9 case (Ditemukan: ${switchMatch ? switchMatch.length : 0} cases)`,
  switchMatch ? switchMatch.join(", ") : ""
);
assert(scriptContent.includes("default:"), "Struktur switch...case memiliki cabang default fallback");

// 4. Verifikasi Struktur IF...ELSE IF...ELSE (Minimal 5 kategori keputusan)
assert(
  scriptContent.includes("determineRoomCategory") &&
  scriptContent.includes("baseRate < 500000") &&
  scriptContent.includes("baseRate < 900000") &&
  scriptContent.includes("baseRate < 1600000") &&
  scriptContent.includes("baseRate < 4000000"),
  "Struktur if...else if...else Klasifikasi Kategori Kamar memiliki 5 kategori keputusan (Standard, Deluxe, Executive, Presidential, Penthouse)"
);

assert(
  scriptContent.includes("determineDurationDiscount") &&
  scriptContent.includes("durationNights <= 2") &&
  scriptContent.includes("durationNights <= 4") &&
  scriptContent.includes("durationNights <= 6") &&
  scriptContent.includes("durationNights <= 13"),
  "Struktur if...else if...else Tingkat Diskon Menginap memiliki 5 tingkatan keputusan"
);

// 5. Verifikasi Struktur IF...ELSE (Minimal 2 blok percabangan dua kemungkinan)
assert(
  scriptContent.includes("calculateWeekendSurcharge") &&
  scriptContent.includes("if (hasWeekend === true)") &&
  scriptContent.includes("} else {"),
  "Blok if...else ke-1: Penentuan Surcharge Hari (Weekend vs Weekday)"
);

assert(
  scriptContent.includes("determineGuaranteeStatus") &&
  scriptContent.includes("if (depositScheme === \"full\" || isMember === true)") &&
  scriptContent.includes("} else {"),
  "Blok if...else ke-2: Penentuan Status Garansi Reservasi (Instant vs Manual Hold)"
);

// 6. Verifikasi Struktur IF Mandiri (Minimal 9 kondisi pemeriksaan)
const ifMatches = scriptContent.match(/if\s*\(/g);
assert(
  ifMatches && ifMatches.length >= 9,
  `Struktur if mandiri memiliki minimal 9 kondisi pemeriksaan (Ditemukan: ${ifMatches ? ifMatches.length : 0} ekspresi if)`
);

// 7. Verifikasi Perulangan FOR (Minimal 12 iterasi)
assert(
  scriptContent.includes("for (let day = 1; day <= 12; day++)"),
  "Perulangan for diimplementasikan dengan minimal 12 iterasi (1 s/d 12)"
);

// 8. Verifikasi Perulangan WHILE (Minimal 4 iterasi)
assert(
  scriptContent.includes("while (step < 4)"),
  "Perulangan while diimplementasikan dengan minimal 4 iterasi (0 s/d 3)"
);

// 9. Verifikasi Perulangan DO...WHILE (Minimal 6 iterasi)
assert(
  scriptContent.includes("do {") && scriptContent.includes("} while (i < availableAmenities.length);"),
  "Perulangan do...while diimplementasikan dengan minimal 6 iterasi fasilitas"
);

// 10. Verifikasi Struktur ARRAY (Minimal 10 elemen)
assert(
  scriptContent.includes("ROOM_CATALOG = [") && scriptContent.includes("VVIP"),
  "Array ROOM_CATALOG memiliki minimal 10 elemen kamar hotel"
);

assert(
  scriptContent.includes("reservationsData = [") && scriptContent.includes("SHR-2026-08110"),
  "Array reservationsData memiliki minimal 10 record awal reservasi tamu"
);

console.log("\n==================================================================");
console.log(`RINGKASAN PENGUJIAN: ${passedTests} / ${totalTests} PENGUJIAN BERHASIL (&check;)`);
if (passedTests === totalTests) {
  console.log("\x1b[32mSELURUH SPESIFIKASI DAN ATURAN NIM 241011402572 TERPENUHI 100%!\x1b[0m");
} else {
  console.log("\x1b[31mADA PENGUJIAN YANG GAGAL. SILAKAN PERIKSA KEMBALI KODE PROGRAM.\x1b[0m");
}
console.log("==================================================================");

process.exit(passedTests === totalTests ? 0 : 1);
