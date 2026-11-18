/**
 * ============================================================================
 * SVARGA HERITAGE HOTEL & RESORT - CORE JAVASCRIPT LOGIC
 * ============================================================================
 * Penugasan Mata Kuliah : Pemrograman Web 1 (Pertemuan 16)
 * Nama Mahasiswa        : Hadi Sulaiman
 * NIM                   : 241011402572
 * Kelas                 : 05TPLM003
 * Program Studi         : Teknik Informatika S-1, Universitas Pamulang
 *
 * PEMETAAN ATURAN NIM:
 * 1. Digit Terakhir NIM = 2 -> Sistem Reservasi Hotel
 *    Proses: Menghitung biaya menginap dan menentukan kategori kamar.
 * 2. Digit Ketiga Terakhir NIM = 5 -> Menghitung Rata-rata Data
 *    Proses: Menghitung rata-rata biaya menginap, rata-rata durasi, rata-rata fasilitas.
 * 3. 5 Digit Terakhir NIM (0, 2, 5, 7, 2) dengan substitusi angka 0 menjadi 9:
 *    - Digit 1 = 9 -> if (min 9 pemeriksaan), for (min 9+3 = 12 iterasi)
 *    - Digit 2 = 2 -> if...else (min 2 blok), while (min 2+2 = 4 iterasi)
 *    - Digit 3 = 5 -> if...else if...else (min 5 kategori), do...while (min 5+1 = 6 iterasi)
 *    - Digit 4 = 7 -> switch...case (min 7+2 = 9 case), Array (min 7+3 = 10 elemen)
 * ============================================================================
 */

(function () {
  "use strict";

  /* ==========================================================================
     A. ARRAY IMPLEMENTATION (Digit ke-4 = 7 -> Minimal 7 + 3 = 10 Elemen)
     ========================================================================== */

  /**
   * Array 1: Katalog Koleksi Kamar & Suite Svarga Heritage
   * Terdiri dari 10 elemen kamar (memenuhi syarat minimal 10 elemen).
   */
  const ROOM_CATALOG = [
    {
      code: "STD",
      name: "Superior Heritage Single",
      baseRate: 350000,
      capacity: 1,
      tier: "Standard",
      description: "Kamar bergaya etnik klasik untuk pelancong solo dengan fasilitas esensial."
    },
    {
      code: "DLX",
      name: "Deluxe Twin Garden",
      baseRate: 550000,
      capacity: 2,
      tier: "Deluxe",
      description: "Pemandangan taman tropis asri dengan dua tempat tidur single ergonomis."
    },
    {
      code: "PRE",
      name: "Premium King Boulevard",
      baseRate: 750000,
      capacity: 2,
      tier: "Deluxe",
      description: "Kasur King Koil mewah dengan balkon menghadap boulevard utama."
    },
    {
      code: "EXE",
      name: "Executive City Horizon",
      baseRate: 1100000,
      capacity: 3,
      tier: "Executive",
      description: "Lantai eksekutif dengan akses lounge bisnis dan panorama cakrawala kota."
    },
    {
      code: "JS",
      name: "Junior Suite Private Balcony",
      baseRate: 1500000,
      capacity: 3,
      tier: "Executive",
      description: "Ruang tamu terintegrasi, bathtub marmer, dan balkon santai pribadi."
    },
    {
      code: "FAM",
      name: "Grand Family Suite",
      baseRate: 2000000,
      capacity: 4,
      tier: "Presidential",
      description: "Dua kamar tidur terhubung khusus kenyamanan liburan keluarga besar."
    },
    {
      code: "PS",
      name: "Presidential Heritage Suite",
      baseRate: 3500000,
      capacity: 4,
      tier: "Presidential",
      description: "Kemewahan aristokrat dengan interior kayu jati dan layanan pelayan pribadi."
    },
    {
      code: "VIL",
      name: "Svarga Private Pool Villa",
      baseRate: 5000000,
      capacity: 6,
      tier: "Penthouse",
      description: "Vila privat terpisah dengan kolam renang pribadi dan paviliun santai."
    },
    {
      code: "ROY",
      name: "Royal Keraton Penthouse",
      baseRate: 8000000,
      capacity: 8,
      tier: "Penthouse",
      description: "Puncak kemewahan lantai teratas bernuansa keraton agung Nusantara."
    },
    {
      code: "VVIP",
      name: "Maharaja Heritage Pavilion",
      baseRate: 10000000,
      capacity: 10,
      tier: "Penthouse",
      description: "Paviliun kepresidenan eksklusif untuk tamu kenegaraan dan delegasi penting."
    }
  ];

  /**
   * Array 2: Dataset Riwayat Reservasi Awal Tamu
   * Memuat 10 record data awal yang terstruktur rapi.
   */
  let reservationsData = [
    {
      id: "SHR-2026-08101",
      guestName: "Bambang Soedirman",
      guestPhone: "081234567890",
      roomCode: "STD",
      roomName: "Superior Heritage Single",
      roomCategory: "Standard Heritage",
      checkIn: "2026-11-20",
      checkOut: "2026-11-22",
      duration: 2,
      baseRate: 350000,
      subtotalRoom: 700000,
      surcharge: 0,
      discountAmount: 0,
      amenitiesTotal: 120000,
      grandTotal: 820000,
      guaranteeStatus: "Terkonfirmasi Instan (Guaranteed)",
      guaranteeClass: "instant"
    },
    {
      id: "SHR-2026-08102",
      guestName: "Siti Rahmawati",
      guestPhone: "081398765432",
      roomCode: "DLX",
      roomName: "Deluxe Twin Garden",
      roomCategory: "Deluxe Superior",
      checkIn: "2026-11-21",
      checkOut: "2026-11-24",
      duration: 3,
      baseRate: 550000,
      subtotalRoom: 1650000,
      surcharge: 247500,
      discountAmount: 82500,
      amenitiesTotal: 300000,
      grandTotal: 2115000,
      guaranteeStatus: "Menunggu Verifikasi Deposit (Hold 24 Jam)",
      guaranteeClass: "manual"
    },
    {
      id: "SHR-2026-08103",
      guestName: "Ir. Hendra Kusuma",
      guestPhone: "085711223344",
      roomCode: "PRE",
      roomName: "Premium King Boulevard",
      roomCategory: "Deluxe Superior",
      checkIn: "2026-11-22",
      checkOut: "2026-11-26",
      duration: 4,
      baseRate: 750000,
      subtotalRoom: 3000000,
      surcharge: 0,
      discountAmount: 150000,
      amenitiesTotal: 370000,
      grandTotal: 3220000,
      guaranteeStatus: "Terkonfirmasi Instan (Guaranteed)",
      guaranteeClass: "instant"
    },
    {
      id: "SHR-2026-08104",
      guestName: "Dra. Nurul Hidayati",
      guestPhone: "082155667788",
      roomCode: "EXE",
      roomName: "Executive City Horizon",
      roomCategory: "Executive Prime",
      checkIn: "2026-11-25",
      checkOut: "2026-11-30",
      duration: 5,
      baseRate: 1100000,
      subtotalRoom: 5500000,
      surcharge: 0,
      discountAmount: 550000,
      amenitiesTotal: 420000,
      grandTotal: 5370000,
      guaranteeStatus: "Terkonfirmasi Instan (Guaranteed)",
      guaranteeClass: "instant"
    },
    {
      id: "SHR-2026-08105",
      guestName: "Prof. Dr. Agus Salim",
      guestPhone: "081900112233",
      roomCode: "JS",
      roomName: "Junior Suite Private Balcony",
      roomCategory: "Executive Prime",
      checkIn: "2026-12-01",
      checkOut: "2026-12-03",
      duration: 2,
      baseRate: 1500000,
      subtotalRoom: 3000000,
      surcharge: 450000,
      discountAmount: 0,
      amenitiesTotal: 550000,
      grandTotal: 4000000,
      guaranteeStatus: "Terkonfirmasi Instan (Guaranteed)",
      guaranteeClass: "instant"
    },
    {
      id: "SHR-2026-08106",
      guestName: "Keluarga Cipto Mangunkusumo",
      guestPhone: "081122334455",
      roomCode: "FAM",
      roomName: "Grand Family Suite",
      roomCategory: "Presidential Suite",
      checkIn: "2026-12-05",
      checkOut: "2026-12-09",
      duration: 4,
      baseRate: 2000000,
      subtotalRoom: 8000000,
      surcharge: 0,
      discountAmount: 400000,
      amenitiesTotal: 600000,
      grandTotal: 8200000,
      guaranteeStatus: "Menunggu Verifikasi Deposit (Hold 24 Jam)",
      guaranteeClass: "manual"
    },
    {
      id: "SHR-2026-08107",
      guestName: "Raden Ayu Kartika",
      guestPhone: "085699887766",
      roomCode: "PS",
      roomName: "Presidential Heritage Suite",
      roomCategory: "Presidential Suite",
      checkIn: "2026-12-10",
      checkOut: "2026-12-17",
      duration: 7,
      baseRate: 3500000,
      subtotalRoom: 24500000,
      surcharge: 3675000,
      discountAmount: 3675000,
      amenitiesTotal: 1200000,
      grandTotal: 25700000,
      guaranteeStatus: "Terkonfirmasi Instan (Guaranteed)",
      guaranteeClass: "instant"
    },
    {
      id: "SHR-2026-08108",
      guestName: "Alexander Van Houten",
      guestPhone: "087812349876",
      roomCode: "VIL",
      roomName: "Svarga Private Pool Villa",
      roomCategory: "Royal Penthouse",
      checkIn: "2026-12-15",
      checkOut: "2026-12-18",
      duration: 3,
      baseRate: 5000000,
      subtotalRoom: 15000000,
      surcharge: 0,
      discountAmount: 750000,
      amenitiesTotal: 850000,
      grandTotal: 15100000,
      guaranteeStatus: "Terkonfirmasi Instan (Guaranteed)",
      guaranteeClass: "instant"
    },
    {
      id: "SHR-2026-08109",
      guestName: "Sri Sultan Hamengku B.",
      guestPhone: "081299001122",
      roomCode: "ROY",
      roomName: "Royal Keraton Penthouse",
      roomCategory: "Royal Penthouse",
      checkIn: "2026-12-20",
      checkOut: "2026-12-25",
      duration: 5,
      baseRate: 8000000,
      subtotalRoom: 40000000,
      surcharge: 6000000,
      discountAmount: 4000000,
      amenitiesTotal: 1800000,
      grandTotal: 43800000,
      guaranteeStatus: "Terkonfirmasi Instan (Guaranteed)",
      guaranteeClass: "instant"
    },
    {
      id: "SHR-2026-08110",
      guestName: "Maya Putri Maharani",
      guestPhone: "085233445566",
      roomCode: "DLX",
      roomName: "Deluxe Twin Garden",
      roomCategory: "Deluxe Superior",
      checkIn: "2026-12-24",
      checkOut: "2026-12-28",
      duration: 4,
      baseRate: 550000,
      subtotalRoom: 2200000,
      surcharge: 330000,
      discountAmount: 110000,
      amenitiesTotal: 240000,
      grandTotal: 2660000,
      guaranteeStatus: "Menunggu Verifikasi Deposit (Hold 24 Jam)",
      guaranteeClass: "manual"
    }
  ];

  /* State untuk Reservasi Aktif yang sedang dihitung pada Folio */
  let currentFolioCalculation = null;

  /* ==========================================================================
     B. HELPER UTILITIES: FORMAT RUPIAH & DATE
     ========================================================================== */

  /**
   * Format angka integer ke mata uang Rupiah Indonesia (Tabular Numbers)
   * Contoh: 1500000 -> "Rp 1.500.000"
   */
  function formatRupiah(amount) {
    const validAmount = typeof amount === "number" && !isNaN(amount) ? Math.round(amount) : 0;
    return "Rp " + validAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  /**
   * Menghitung selisih malam antara dua tanggal string ISO (YYYY-MM-DD)
   */
  function calculateNights(checkInStr, checkOutStr) {
    if (!checkInStr || !checkOutStr) return 0;
    const checkIn = new Date(checkInStr);
    const checkOut = new Date(checkOutStr);
    const diffTime = checkOut.getTime() - checkIn.getTime();
    if (diffTime <= 0) return 0;
    return Math.round(diffTime / (1000 * 60 * 60 * 24));
  }

  /**
   * Mengecek apakah jadwal reservasi melewati hari Sabtu atau Minggu (Weekend)
   */
  function checkHasWeekend(checkInStr, nights) {
    if (!checkInStr || nights <= 0) return false;
    let curr = new Date(checkInStr);
    for (let i = 0; i < nights; i++) {
      const dayOfWeek = curr.getDay(); // 0 = Minggu, 6 = Sabtu
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        return true;
      }
      curr.setDate(curr.getDate() + 1);
    }
    return false;
  }

  /* ==========================================================================
     C. STRUKTUR SWITCH...CASE (Digit ke-4 = 7 -> Minimal 7 + 2 = 9 Case)
     ========================================================================== */

  /**
   * Mengambil data spesifikasi kamar berdasarkan kode kamar menggunakan SWITCH...CASE.
   * Wajib memiliki minimal 9 case di luar default (total 10 cabang).
   */
  function resolveRoomByCode(roomCode) {
    let result = null;

    switch (roomCode) {
      // Case 1
      case "STD":
        result = {
          code: "STD",
          name: "Superior Heritage Single",
          baseRate: 350000,
          capacity: 1,
          desc: "Kamar single klasik bernuansa etnik Jawa dengan ranjang nyaman."
        };
        break;

      // Case 2
      case "DLX":
        result = {
          code: "DLX",
          name: "Deluxe Twin Garden",
          baseRate: 550000,
          capacity: 2,
          desc: "Dua ranjang terpisah dengan pemandangan langsung ke taman air."
        };
        break;

      // Case 3
      case "PRE":
        result = {
          code: "PRE",
          name: "Premium King Boulevard",
          baseRate: 750000,
          capacity: 2,
          desc: "Ranjang King mewah dengan pemandangan boulevard heritage."
        };
        break;

      // Case 4
      case "EXE":
        result = {
          code: "EXE",
          name: "Executive City Horizon",
          baseRate: 1100000,
          capacity: 3,
          desc: "Kamar eksekutif lantai tinggi dengan akses eksklusif lounge bisnis."
        };
        break;

      // Case 5
      case "JS":
        result = {
          code: "JS",
          name: "Junior Suite Private Balcony",
          baseRate: 1500000,
          capacity: 3,
          desc: "Suite elegan dengan ruang duduk santai dan balkon pribadi luas."
        };
        break;

      // Case 6
      case "FAM":
        result = {
          code: "FAM",
          name: "Grand Family Suite",
          baseRate: 2000000,
          capacity: 4,
          desc: "Dua kamar berpenghubung untuk privasi dan kehangatan seluruh keluarga."
        };
        break;

      // Case 7
      case "PS":
        result = {
          code: "PS",
          name: "Presidential Heritage Suite",
          baseRate: 3500000,
          capacity: 4,
          desc: "Suite termewah dengan furnitur jati ukir dan layanan pelayan 24 jam."
        };
        break;

      // Case 8
      case "VIL":
        result = {
          code: "VIL",
          name: "Svarga Private Pool Villa",
          baseRate: 5000000,
          capacity: 6,
          desc: "Vila eksklusif lengkap dengan kolam renang privat dan bale santai."
        };
        break;

      // Case 9
      case "ROY":
        result = {
          code: "ROY",
          name: "Royal Keraton Penthouse",
          baseRate: 8000000,
          capacity: 8,
          desc: "Griya megah puncak hotel dengan interior terinspirasi keraton Nusantara."
        };
        break;

      // Default Fallback
      default:
        result = {
          code: "UNKNOWN",
          name: "Tipe Kamar Tidak Dikenal",
          baseRate: 0,
          capacity: 0,
          desc: "Silakan pilih tipe kamar yang terdaftar pada katalog resmi."
        };
        break;
    }

    return result;
  }

  /* ==========================================================================
     D. STRUKTUR IF...ELSE IF...ELSE (Digit ke-3 = 5 -> Minimal 5 Kategori)
     ========================================================================== */

  /**
   * Evaluasi Kategori Kamar Berdasarkan Tarif Dasar (Menentukan Kategori Kamar)
   * Terdiri dari 5 cabang keputusan (if ... else if ... else).
   */
  function determineRoomCategory(baseRate) {
    let category = "";

    if (baseRate < 500000) {
      category = "Standard Heritage";
    } else if (baseRate < 900000) {
      category = "Deluxe Superior";
    } else if (baseRate < 1600000) {
      category = "Executive Prime";
    } else if (baseRate < 4000000) {
      category = "Presidential Suite";
    } else {
      category = "Royal Penthouse";
    }

    return category;
  }

  /**
   * Evaluasi Tingkat Program Diskon Berdasarkan Durasi Menginap
   * Terdiri dari 5 tingkatan keputusan (if ... else if ... else).
   */
  function determineDurationDiscount(durationNights) {
    let discount = {
      category: "",
      percentage: 0.0
    };

    if (durationNights <= 2) {
      discount.category = "Tarif Reguler (0%)";
      discount.percentage = 0.0;
    } else if (durationNights <= 4) {
      discount.category = "Short Stay Saver (5%)";
      discount.percentage = 0.05;
    } else if (durationNights <= 6) {
      discount.category = "Weekly Gateway (10%)";
      discount.percentage = 0.10;
    } else if (durationNights <= 13) {
      discount.category = "Extended Stay (15%)";
      discount.percentage = 0.15;
    } else {
      discount.category = "Long-Term Resident (25%)";
      discount.percentage = 0.25;
    }

    return discount;
  }

  /* ==========================================================================
     E. STRUKTUR IF...ELSE (Digit ke-2 = 2 -> Minimal 2 Blok Percabangan)
     ========================================================================== */

  /**
   * Blok 1: Penentuan Surcharge Akhir Pekan (Weekend Surcharge 15% vs Regular 0%)
   */
  function calculateWeekendSurcharge(subtotalRoom, hasWeekend) {
    let surchargeAmount = 0;
    let surchargeNote = "";

    if (hasWeekend === true) {
      surchargeAmount = subtotalRoom * 0.15;
      surchargeNote = "Weekend Surcharge (+15%)";
    } else {
      surchargeAmount = 0;
      surchargeNote = "Weekday Reguler (0%)";
    }

    return { surchargeAmount, surchargeNote };
  }

  /**
   * Blok 2: Penentuan Status Garansi Reservasi (Instant vs Hold)
   */
  function determineGuaranteeStatus(depositScheme, isMember) {
    let status = "";
    let cssClass = "";

    if (depositScheme === "full" || isMember === true) {
      status = "Terkonfirmasi Instan (Guaranteed)";
      cssClass = "instant";
    } else {
      status = "Menunggu Verifikasi Deposit (Hold 24 Jam)";
      cssClass = "manual";
    }

    return { status, cssClass };
  }

  /* ==========================================================================
     F. STRUKTUR DO...WHILE (Digit ke-3 = 5 -> Minimal 5 + 1 = 6 Iterasi)
     ========================================================================== */

  /**
   * Menghitung total nilai fasilitas tambahan (Amenities) menggunakan perulangan DO...WHILE.
   * Melakukan iterasi minimal 6 kali pada 6 jenis fasilitas hotel yang tersedia.
   */
  function calculateAmenitiesWithDoWhile(selectedAmenitiesValues) {
    const availableAmenities = [
      { id: "breakfast", name: "Sarapan Prasmanan", price: 120000 },
      { id: "shuttle", name: "Antar-Jemput Bandara", price: 250000 },
      { id: "wifi", name: "Wi-Fi Ultra Cepat", price: 50000 },
      { id: "spa", name: "Voucher Spa Tradisional", price: 350000 },
      { id: "latecheckout", name: "Late Check-out 16.00", price: 200000 },
      { id: "extrabed", name: "Extra Bed Ergonomis", price: 300000 }
    ];

    let total = 0;
    let checkedCount = 0;
    let i = 0;

    // Eksekusi do...while tepat 6 iterasi (i = 0 s/d 5)
    do {
      const currentAmenity = availableAmenities[i];
      if (selectedAmenitiesValues.includes(currentAmenity.id)) {
        total += currentAmenity.price;
        checkedCount++;
      }
      i++;
    } while (i < availableAmenities.length);

    return { total, checkedCount, iterations: i };
  }

  /* ==========================================================================
     G. STRUKTUR WHILE (Digit ke-2 = 2 -> Minimal 2 + 2 = 4 Iterasi)
     ========================================================================== */

  /**
   * Menghitung simulasi skema 4x termin angsuran deposit menggunakan perulangan WHILE.
   * Melakukan iterasi tepat 4 kali untuk menghasilkan rincian persentase angsuran.
   */
  function generateInstallmentSimulationWithWhile(grandTotal) {
    const installments = [];
    const percentages = [0.25, 0.25, 0.25, 0.25]; // 4 tahap angsuran masing-masing 25%
    let step = 0;

    while (step < 4) {
      const stepNumber = step + 1;
      const amount = grandTotal * percentages[step];
      installments.push({
        step: stepNumber,
        label: "Termin " + stepNumber + " (25%)",
        amount: amount,
        dueDate: "Hari H - " + ((4 - stepNumber) * 3) + " Hari"
      });
      step++;
    }

    return installments;
  }

  /* ==========================================================================
     H. STRUKTUR FOR (Digit ke-1 = 9 -> Minimal 9 + 3 = 12 Iterasi)
     ========================================================================== */

  /**
   * Menghasilkan breakdown kalender menginap 12 hari menggunakan perulangan FOR.
   * Melakukan iterasi minimal 12 kali (i = 1 s/d 12) untuk kalkulasi harian.
   */
  function generate12DayScheduleWithFor(startDateStr, roomRate) {
    const schedule = [];
    const baseDate = startDateStr ? new Date(startDateStr) : new Date();
    let cumulative = 0;

    for (let day = 1; day <= 12; day++) {
      const currentDayDate = new Date(baseDate);
      currentDayDate.setDate(baseDate.getDate() + (day - 1));

      const dayOfWeek = currentDayDate.getDay();
      const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
      const surcharge = isWeekend ? Math.round(roomRate * 0.15) : 0;
      const netDaily = roomRate + surcharge;
      cumulative += netDaily;

      const dateFormatted = currentDayDate.toLocaleDateString("id-ID", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric"
      });

      schedule.push({
        dayNumber: day,
        dateFormatted: dateFormatted,
        isWeekend: isWeekend,
        dayType: isWeekend ? "Akhir Pekan" : "Hari Kerja",
        baseRate: roomRate,
        surcharge: surcharge,
        netDaily: netDaily,
        cumulativeTotal: cumulative
      });
    }

    return schedule;
  }

  /* ==========================================================================
     I. TANTANGAN PERULANGAN NIM DIGIT 5: MENGHITUNG RATA-RATA DATA
     ========================================================================== */

  /**
   * Menghitung nilai rata-rata (Mean) dari data reservasi aktif menggunakan perulangan.
   * Meliputi:
   * 1. Rata-rata Biaya Tagihan Reservasi
   * 2. Rata-rata Durasi Menginap Tamu
   * 3. Rata-rata Pengeluaran Fasilitas Tambahan
   */
  function calculateStatisticalAverages(reservations) {
    if (!reservations || reservations.length === 0) {
      return {
        avgBilling: 0,
        avgDuration: 0,
        avgAmenities: 0,
        totalReservations: 0
      };
    }

    let sumBilling = 0;
    let sumDuration = 0;
    let sumAmenities = 0;
    const totalCount = reservations.length;

    // Perulangan untuk akumulasi total seluruh nilai data
    for (let idx = 0; idx < totalCount; idx++) {
      const res = reservations[idx];
      sumBilling += (res.grandTotal || 0);
      sumDuration += (res.duration || 0);
      sumAmenities += (res.amenitiesTotal || 0);
    }

    // Perhitungan nilai rata-rata (Rata-rata = Jumlah Total / Banyaknya Data)
    const avgBilling = sumBilling / totalCount;
    const avgDuration = sumDuration / totalCount;
    const avgAmenities = sumAmenities / totalCount;

    return {
      avgBilling: avgBilling,
      avgDuration: avgDuration,
      avgAmenities: avgAmenities,
      totalReservations: totalCount
    };
  }

  /* ==========================================================================
     J. STRUKTUR IF MANDIRI (Digit ke-1 = 9 -> Minimal 9 Kondisi Pemeriksaan)
     ========================================================================== */

  /**
   * Validasi Input Formulir Menggunakan Minimal 9 Pemeriksaan Kondisi 'if' Mandiri.
   * Disusun sebagai guard clauses yang jelas dan spesifik.
   */
  function validateReservationInput(formData) {
    const errors = [];

    // Pemeriksaan if ke-1: Nama tamu tidak boleh kosong
    if (!formData.guestName || formData.guestName.trim() === "") {
      errors.push("Nama lengkap tamu wajib diisi sesuai kartu identitas resmi.");
    }

    // Pemeriksaan if ke-2: Format nomor telepon minimal 10 digit angka
    if (!formData.guestPhone || formData.guestPhone.trim().replace(/\D/g, "").length < 10) {
      errors.push("Nomor telepon/WhatsApp harus valid dan minimal terdiri dari 10 digit.");
    }

    // Pemeriksaan if ke-3: Tipe kamar wajib dipilih
    if (!formData.roomCode || formData.roomCode === "") {
      errors.push("Silakan pilih salah satu tipe kamar dari katalog yang tersedia.");
    }

    // Pemeriksaan if ke-4: Tanggal check-in tidak boleh kosong
    if (!formData.checkInDate || formData.checkInDate === "") {
      errors.push("Tanggal check-in wajib ditentukan.");
    }

    // Pemeriksaan if ke-5: Tanggal check-out tidak boleh kosong
    if (!formData.checkOutDate || formData.checkOutDate === "") {
      errors.push("Tanggal check-out wajib ditentukan.");
    }

    // Pemeriksaan if ke-6: Tanggal check-out harus setelah tanggal check-in
    if (formData.checkInDate && formData.checkOutDate && formData.checkOutDate <= formData.checkInDate) {
      errors.push("Tanggal check-out harus lebih besar dari tanggal check-in (minimal 1 malam).");
    }

    // Pemeriksaan if ke-7: Jumlah tamu minimal 1 orang
    if (formData.guestCount < 1) {
      errors.push("Jumlah tamu menginap minimal 1 orang.");
    }

    // Pemeriksaan if ke-8: Jumlah tamu tidak boleh melebihi kapasitas kamar yang dipilih
    if (formData.selectedRoom && formData.guestCount > formData.selectedRoom.capacity) {
      errors.push(
        "Jumlah tamu (" + formData.guestCount + " orang) melebihi kapasitas maksimal " +
        formData.selectedRoom.name + " (" + formData.selectedRoom.capacity + " orang)."
      );
    }

    // Pemeriksaan if ke-9: Durasi menginap tidak boleh melebihi batas operasional reservasi (30 malam)
    if (formData.durationNights > 30) {
      errors.push("Reservasi online reguler dibatasi maksimal 30 malam. Hubungi tim sales korporat untuk sewa jangka panjang.");
    }

    // Pemeriksaan if ke-10 (Bonus Guard): Validasi kode promo jika diisi pengguna
    if (formData.promoCode && formData.promoCode.trim() !== "") {
      const codeUpper = formData.promoCode.trim().toUpperCase();
      if (codeUpper !== "SVARGA2026" && codeUpper !== "DISKONHEMAT") {
        errors.push("Kode promo '" + formData.promoCode + "' tidak terdaftar atau telah kedaluwarsa.");
      }
    }

    return errors;
  }

  /* ==========================================================================
     K. FUNGSI UTAMA KALKULASI TAGIHAN RESERVASI
     ========================================================================== */

  /**
   * Menghitung rincian tagihan reservasi secara komprehensif mengintegrasikan
   * seluruh fungsi kontrol keputusan dan perulangan di atas.
   */
  function calculateReservationFolio(formData) {
    // 1. Resolve spesifikasi kamar menggunakan SWITCH...CASE (9 cases + default)
    const roomSpec = resolveRoomByCode(formData.roomCode);

    // 2. Evaluasi Kategori Kamar menggunakan IF...ELSE IF...ELSE (5 kategori)
    const roomCategory = determineRoomCategory(roomSpec.baseRate);

    // 3. Hitung durasi malam
    const nights = calculateNights(formData.checkInDate, formData.checkOutDate);

    // 4. Hitung subtotal tarif kamar murni
    const subtotalRoom = roomSpec.baseRate * nights;

    // 5. Cek apakah ada hari weekend
    const hasWeekend = checkHasWeekend(formData.checkInDate, nights);

    // 6. Hitung surcharge akhir pekan menggunakan IF...ELSE (Blok 1)
    const surchargeInfo = calculateWeekendSurcharge(subtotalRoom, hasWeekend);

    // 7. Evaluasi diskon durasi menginap menggunakan IF...ELSE IF...ELSE (5 tingkatan)
    const discountInfo = determineDurationDiscount(nights);
    const durationDiscountAmount = Math.round(subtotalRoom * discountInfo.percentage);

    // 8. Hitung total biaya amenities menggunakan DO...WHILE (6 iterasi)
    const amenitiesInfo = calculateAmenitiesWithDoWhile(formData.amenities);

    // 9. Evaluasi potongan kode promo dan diskon member loyalty
    let promoDiscountAmount = 0;
    if (formData.promoCode && formData.promoCode.trim().toUpperCase() === "SVARGA2026") {
      promoDiscountAmount += subtotalRoom * 0.10; // Diskon 10%
    } else if (formData.promoCode && formData.promoCode.trim().toUpperCase() === "DISKONHEMAT") {
      promoDiscountAmount += 100000; // Flat Rp 100.000
    }

    // Tambahan potongan 5% jika tamu adalah member loyalty
    if (formData.isMember === true) {
      promoDiscountAmount += Math.round(subtotalRoom * 0.05);
    }

    // 10. Kalkulasi Total Biaya Akhir (Grand Total)
    const grandTotal = Math.max(
      0,
      subtotalRoom + surchargeInfo.surchargeAmount + amenitiesInfo.total - durationDiscountAmount - promoDiscountAmount
    );

    // 11. Evaluasi Status Garansi Reservasi menggunakan IF...ELSE (Blok 2)
    const guaranteeInfo = determineGuaranteeStatus(formData.depositScheme, formData.isMember);

    // 12. Simulasi 4x angsuran deposit menggunakan WHILE (4 iterasi)
    const installments = generateInstallmentSimulationWithWhile(grandTotal);

    // 13. Hasilkan tiket kode acak
    const ticketRef = "SHR-" + new Date().getFullYear() + "-" + Math.floor(10000 + Math.random() * 90000);

    return {
      ticketRef: ticketRef,
      guestName: formData.guestName,
      guestPhone: formData.guestPhone,
      roomCode: roomSpec.code,
      roomName: roomSpec.name,
      roomCategory: roomCategory,
      baseRate: roomSpec.baseRate,
      checkIn: formData.checkInDate,
      checkOut: formData.checkOutDate,
      duration: nights,
      subtotalRoom: subtotalRoom,
      hasWeekend: hasWeekend,
      surcharge: surchargeInfo.surchargeAmount,
      surchargeNote: surchargeInfo.surchargeNote,
      discountCategory: discountInfo.category,
      discountAmount: durationDiscountAmount,
      amenitiesTotal: amenitiesInfo.total,
      promoDiscount: promoDiscountAmount,
      grandTotal: grandTotal,
      guaranteeStatus: guaranteeInfo.status,
      guaranteeClass: guaranteeInfo.cssClass,
      depositScheme: formData.depositScheme,
      installments: installments
    };
  }

  /* ==========================================================================
     L. TAMPILAN DOM & EVENT LISTENERS
     ========================================================================== */

  document.addEventListener("DOMContentLoaded", function () {
    // Referensi Elemen DOM Formulir
    const reservationForm = document.getElementById("reservationForm");
    const guestNameInput = document.getElementById("guestName");
    const guestPhoneInput = document.getElementById("guestPhone");
    const roomTypeSelect = document.getElementById("roomType");
    const checkInDateInput = document.getElementById("checkInDate");
    const checkOutDateInput = document.getElementById("checkOutDate");
    const guestCountInput = document.getElementById("guestCount");
    const promoCodeInput = document.getElementById("promoCode");
    const depositSchemeSelect = document.getElementById("depositScheme");
    const isMemberCheckbox = document.getElementById("isMember");
    const formAlert = document.getElementById("formAlert");
    const btnResetForm = document.getElementById("btnResetForm");
    const btnSaveToTable = document.getElementById("btnSaveToTable");
    const btnPrintFolio = document.getElementById("btnPrintFolio");
    const btnExportJson = document.getElementById("btnExportJson");

    // Referensi Elemen DOM Folio Tagihan
    const folioStatusStamp = document.getElementById("folioStatusStamp");
    const folioTicketNumber = document.getElementById("folioTicketNumber");
    const folioGuestName = document.getElementById("folioGuestName");
    const folioGuestPhone = document.getElementById("folioGuestPhone");
    const folioRoomName = document.getElementById("folioRoomName");
    const folioRoomCategory = document.getElementById("folioRoomCategory");
    const folioDates = document.getElementById("folioDates");
    const folioDuration = document.getElementById("folioDuration");
    const folioRatePerNight = document.getElementById("folioRatePerNight");
    const folioSubtotalRoom = document.getElementById("folioSubtotalRoom");
    const folioSurcharge = document.getElementById("folioSurcharge");
    const folioDiscountCategory = document.getElementById("folioDiscountCategory");
    const folioDiscountAmount = document.getElementById("folioDiscountAmount");
    const folioAmenitiesTotal = document.getElementById("folioAmenitiesTotal");
    const folioPromoDiscount = document.getElementById("folioPromoDiscount");
    const folioGrandTotal = document.getElementById("folioGrandTotal");
    const folioGuaranteeStatus = document.getElementById("folioGuaranteeStatus");
    const folioInstallmentBox = document.getElementById("folioInstallmentBox");
    const installmentList = document.getElementById("installmentList");

    // Referensi Elemen DOM Statistik Rata-rata
    const statAvgBilling = document.getElementById("statAvgBilling");
    const statAvgDuration = document.getElementById("statAvgDuration");
    const statAvgAmenities = document.getElementById("statAvgAmenities");
    const statTotalReservations = document.getElementById("statTotalReservations");

    // Referensi Tabel Jadwal 12 Hari & Buku Tamu
    const dailyScheduleBody = document.getElementById("dailyScheduleBody");
    const reservationsTableBody = document.getElementById("reservationsTableBody");
    const tableSearchInput = document.getElementById("tableSearchInput");
    const tableCategoryFilter = document.getElementById("tableCategoryFilter");

    // Referensi Modal Audit
    const auditModal = document.getElementById("auditModal");
    const btnOpenAudit = document.getElementById("btnOpenAudit");
    const btnCloseAudit = document.getElementById("btnCloseAudit");
    const btnCloseAuditFooter = document.getElementById("btnCloseAuditFooter");

    // Set nilai default tanggal check-in (besok) dan check-out (3 hari kemudian)
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(today.getDate() + 4);

    checkInDateInput.value = tomorrow.toISOString().split("T")[0];
    checkOutDateInput.value = dayAfterTomorrow.toISOString().split("T")[0];
    checkInDateInput.min = today.toISOString().split("T")[0];
    checkOutDateInput.min = tomorrow.toISOString().split("T")[0];

    /**
     * Membaca seluruh data input dari form ke dalam objek
     */
    function getFormData() {
      const roomCode = roomTypeSelect.value;
      const selectedRoom = resolveRoomByCode(roomCode);
      const checkInVal = checkInDateInput.value;
      const checkOutVal = checkOutDateInput.value;
      const durationVal = calculateNights(checkInVal, checkOutVal);

      // Ambil seluruh checkbox fasilitas yang dicentang
      const selectedAmenities = [];
      const amenityCheckboxes = document.querySelectorAll("input[name='amenity']:checked");
      amenityCheckboxes.forEach(function (cb) {
        selectedAmenities.push(cb.value);
      });

      return {
        guestName: guestNameInput.value,
        guestPhone: guestPhoneInput.value,
        roomCode: roomCode,
        selectedRoom: selectedRoom,
        checkInDate: checkInVal,
        checkOutDate: checkOutVal,
        durationNights: durationVal,
        guestCount: parseInt(guestCountInput.value, 10) || 1,
        amenities: selectedAmenities,
        promoCode: promoCodeInput.value,
        depositScheme: depositSchemeSelect.value,
        isMember: isMemberCheckbox.checked
      };
    }

    /**
     * Menampilkan pesan alert galat atau sukses pada formulir
     */
    function displayFormAlert(message, type) {
      if (!message) {
        formAlert.className = "alert d-none";
        formAlert.textContent = "";
        return;
      }
      formAlert.className = "alert alert-" + type;
      formAlert.innerHTML = message;
    }

    /**
     * Memperbarui tampilan Guest Folio / Nota Tagihan di kolom kanan
     */
    function updateFolioDisplay(calc) {
      if (!calc) {
        folioStatusStamp.className = "folio-stamp";
        folioStatusStamp.textContent = "MENUNGGU INPUT";
        folioTicketNumber.textContent = "BOOKING REF: SHR-PENDING";
        folioGuestName.textContent = "-";
        folioGuestPhone.textContent = "-";
        folioRoomName.textContent = "Belum dipilih";
        folioRoomCategory.textContent = "-";
        folioDates.textContent = "- s/d -";
        folioDuration.textContent = "0";
        folioRatePerNight.textContent = "Rp 0";
        folioSubtotalRoom.textContent = "Rp 0";
        folioSurcharge.textContent = "Rp 0";
        folioDiscountCategory.textContent = "Tarif Standar";
        folioDiscountAmount.textContent = "- Rp 0";
        folioAmenitiesTotal.textContent = "Rp 0";
        folioPromoDiscount.textContent = "- Rp 0";
        folioGrandTotal.textContent = "Rp 0";
        folioGuaranteeStatus.textContent = "Menunggu Kalkulasi";
        folioInstallmentBox.classList.add("d-none");
        btnSaveToTable.disabled = true;
        if (btnPrintFolio) btnPrintFolio.disabled = true;
        return;
      }

      currentFolioCalculation = calc;

      folioStatusStamp.className = "folio-stamp confirmed";
      folioStatusStamp.textContent = "TERVERIFIKASI";
      folioTicketNumber.textContent = "BOOKING REF: " + calc.ticketRef;
      folioGuestName.textContent = calc.guestName;
      folioGuestPhone.textContent = calc.guestPhone;
      folioRoomName.textContent = calc.roomName;
      folioRoomCategory.textContent = calc.roomCategory;
      folioDates.textContent = calc.checkIn + " s/d " + calc.checkOut;
      folioDuration.textContent = calc.duration;
      folioRatePerNight.textContent = formatRupiah(calc.baseRate);
      folioSubtotalRoom.textContent = formatRupiah(calc.subtotalRoom);
      folioSurcharge.textContent = (calc.surcharge > 0 ? "+ " : "") + formatRupiah(calc.surcharge) + " (" + calc.surchargeNote + ")";
      folioDiscountCategory.textContent = calc.discountCategory;
      folioDiscountAmount.textContent = "- " + formatRupiah(calc.discountAmount);
      folioAmenitiesTotal.textContent = "+ " + formatRupiah(calc.amenitiesTotal);
      folioPromoDiscount.textContent = "- " + formatRupiah(calc.promoDiscount);
      folioGrandTotal.textContent = formatRupiah(calc.grandTotal);
      folioGuaranteeStatus.textContent = calc.guaranteeStatus;

      // Update Rincian Cicilan Jika Skema Installment dipilih
      if (calc.depositScheme === "installment") {
        folioInstallmentBox.classList.remove("d-none");
        installmentList.innerHTML = "";
        calc.installments.forEach(function (item) {
          const li = document.createElement("li");
          li.innerHTML = "<span>" + item.label + " (" + item.dueDate + ")</span><strong>" + formatRupiah(item.amount) + "</strong>";
          installmentList.appendChild(li);
        });
      } else {
        folioInstallmentBox.classList.add("d-none");
      }

      btnSaveToTable.disabled = false;
      if (btnPrintFolio) btnPrintFolio.disabled = false;
    }

    /**
     * Memperbarui Tabel Kalender Menginap 12 Hari (Implementasi Loop FOR 12 Iterasi)
     */
    function render12DayScheduleTable(startDateStr, roomRate) {
      const schedule = generate12DayScheduleWithFor(startDateStr, roomRate);
      dailyScheduleBody.innerHTML = "";

      schedule.forEach(function (row) {
        const tr = document.createElement("tr");
        tr.innerHTML =
          "<td><strong>Hari #" + row.dayNumber + "</strong></td>" +
          "<td>" + row.dateFormatted + "</td>" +
          "<td><span class='tag-day " + (row.isWeekend ? "weekend" : "weekday") + "'>" + row.dayType + "</span></td>" +
          "<td class='font-mono'>" + formatRupiah(row.baseRate) + "</td>" +
          "<td class='font-mono text-danger'>" + (row.surcharge > 0 ? "+ " + formatRupiah(row.surcharge) : "-") + "</td>" +
          "<td class='font-mono'><strong>" + formatRupiah(row.netDaily) + "</strong></td>" +
          "<td class='font-mono text-success'><strong>" + formatRupiah(row.cumulativeTotal) + "</strong></td>";
        dailyScheduleBody.appendChild(tr);
      });
    }

    /**
     * Memperbarui Tampilan Kartu Statistik Rata-rata Data (Tantangan NIM Digit 5)
     */
    function renderStatisticalCards() {
      const stats = calculateStatisticalAverages(reservationsData);

      statAvgBilling.textContent = formatRupiah(stats.avgBilling);
      statAvgDuration.textContent = stats.avgDuration.toFixed(1) + " Malam";
      statAvgAmenities.textContent = formatRupiah(stats.avgAmenities);
      statTotalReservations.textContent = stats.totalReservations + " Tamu";
    }

    /**
     * Memperbarui Tabel Riwayat Data Tamu Reservasi
     */
    function renderReservationsTable(filteredData) {
      const dataToRender = filteredData || reservationsData;
      reservationsTableBody.innerHTML = "";

      if (dataToRender.length === 0) {
        reservationsTableBody.innerHTML =
          "<tr><td colspan='10' style='text-align:center; padding: 24px; color: var(--text-muted);'>" +
          "Tidak ada data reservasi yang cocok dengan kriteria pencarian.</td></tr>";
        return;
      }

      dataToRender.forEach(function (res, index) {
        const tr = document.createElement("tr");
        tr.innerHTML =
          "<td>" + (index + 1) + "</td>" +
          "<td><span class='font-mono'>" + res.id + "</span></td>" +
          "<td><strong>" + res.guestName + "</strong><br><small class='text-muted'>" + res.guestPhone + "</small></td>" +
          "<td>" + res.roomName + "</td>" +
          "<td><span class='badge-category'>" + res.roomCategory + "</span></td>" +
          "<td><small class='font-mono'>" + res.checkIn + "<br>&rarr; " + res.checkOut + "</small></td>" +
          "<td>" + res.duration + " Malam</td>" +
          "<td class='font-mono'><strong>" + formatRupiah(res.grandTotal) + "</strong></td>" +
          "<td><span class='badge-guarantee " + res.guaranteeClass + "'>" + (res.guaranteeClass === "instant" ? "Instan" : "Hold") + "</span></td>" +
          "<td><button type='button' class='btn-table-action' data-id='" + res.id + "'>Tinjau</button></td>";
        reservationsTableBody.appendChild(tr);
      });

      // Pasang event listener tombol tinjau
      document.querySelectorAll(".btn-table-action").forEach(function (btn) {
        btn.addEventListener("click", function () {
          const resId = this.getAttribute("data-id");
          const found = reservationsData.find(function (r) { return r.id === resId; });
          if (found) {
            updateFolioDisplay({
              ticketRef: found.id,
              guestName: found.guestName,
              guestPhone: found.guestPhone,
              roomCode: found.roomCode,
              roomName: found.roomName,
              roomCategory: found.roomCategory,
              baseRate: found.baseRate,
              checkIn: found.checkIn,
              checkOut: found.checkOut,
              duration: found.duration,
              subtotalRoom: found.subtotalRoom,
              hasWeekend: found.surcharge > 0,
              surcharge: found.surcharge,
              surchargeNote: found.surcharge > 0 ? "Weekend Surcharge" : "Weekday",
              discountCategory: "Tersimpan",
              discountAmount: found.discountAmount,
              amenitiesTotal: found.amenitiesTotal,
              promoDiscount: 0,
              grandTotal: found.grandTotal,
              guaranteeStatus: found.guaranteeStatus,
              guaranteeClass: found.guaranteeClass,
              depositScheme: "full",
              installments: generateInstallmentSimulationWithWhile(found.grandTotal)
            });
            window.scrollTo({ top: 380, behavior: "smooth" });
          }
        });
      });
    }

    /**
     * Filter & Pencarian Tabel
     */
    function applyTableFilter() {
      const searchTerm = tableSearchInput.value.toLowerCase().trim();
      const categoryTerm = tableCategoryFilter.value;

      const filtered = reservationsData.filter(function (item) {
        const matchSearch =
          item.guestName.toLowerCase().includes(searchTerm) ||
          item.id.toLowerCase().includes(searchTerm) ||
          item.roomName.toLowerCase().includes(searchTerm);

        let matchCategory = true;
        if (categoryTerm !== "all") {
          matchCategory = item.roomCategory.toLowerCase().includes(categoryTerm.toLowerCase());
        }

        return matchSearch && matchCategory;
      });

      renderReservationsTable(filtered);
    }

    tableSearchInput.addEventListener("input", applyTableFilter);
    tableCategoryFilter.addEventListener("change", applyTableFilter);

    /**
     * Event Listener Submit Form Reservasi
     */
    reservationForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = getFormData();
      const validationErrors = validateReservationInput(formData);

      if (validationErrors.length > 0) {
        const errorListHtml = "<ul style='margin: 0; padding-left: 20px;'>" +
          validationErrors.map(function (err) { return "<li>" + err + "</li>"; }).join("") +
          "</ul>";
        displayFormAlert("<strong>Mohon perbaiki data berikut:</strong>" + errorListHtml, "danger");
        return;
      }

      // Bersihkan alert error
      displayFormAlert("", "");

      // Hitung Folio Tagihan
      const folioResult = calculateReservationFolio(formData);
      updateFolioDisplay(folioResult);

      // Perbarui kalender 12 hari sesuai kamar yang dipilih
      render12DayScheduleTable(formData.checkInDate, folioResult.baseRate);

      displayFormAlert("Kalkulasi reservasi berhasil diterbitkan. Silakan konfirmasi simpan ke buku tamu.", "success");
    });

    /**
     * Event Listener Tombol Simpan ke Tabel
     */
    btnSaveToTable.addEventListener("click", function () {
      if (!currentFolioCalculation) return;

      // Tambahkan ke array reservationsData
      reservationsData.unshift({
        id: currentFolioCalculation.ticketRef,
        guestName: currentFolioCalculation.guestName,
        guestPhone: currentFolioCalculation.guestPhone,
        roomCode: currentFolioCalculation.roomCode,
        roomName: currentFolioCalculation.roomName,
        roomCategory: currentFolioCalculation.roomCategory,
        checkIn: currentFolioCalculation.checkIn,
        checkOut: currentFolioCalculation.checkOut,
        duration: currentFolioCalculation.duration,
        baseRate: currentFolioCalculation.baseRate,
        subtotalRoom: currentFolioCalculation.subtotalRoom,
        surcharge: currentFolioCalculation.surcharge,
        discountAmount: currentFolioCalculation.discountAmount,
        amenitiesTotal: currentFolioCalculation.amenitiesTotal,
        grandTotal: currentFolioCalculation.grandTotal,
        guaranteeStatus: currentFolioCalculation.guaranteeStatus,
        guaranteeClass: currentFolioCalculation.guaranteeClass
      });

      // Update Tampilan Tabel & Statistik Rata-rata
      renderReservationsTable();
      renderStatisticalCards();

      displayFormAlert("Reservasi <strong>" + currentFolioCalculation.ticketRef + "</strong> berhasil didaftarkan ke Buku Besar Tamu.", "success");
      btnSaveToTable.disabled = true;
    });

    /**
     * Event Listener Reset Form
     */
    btnResetForm.addEventListener("click", function () {
      reservationForm.reset();
      checkInDateInput.value = tomorrow.toISOString().split("T")[0];
      checkOutDateInput.value = dayAfterTomorrow.toISOString().split("T")[0];
      displayFormAlert("", "");
      updateFolioDisplay(null);
    });

    /**
     * Event Listener Cetak Struk / Print Folio
     */
    if (btnPrintFolio) {
      btnPrintFolio.addEventListener("click", function () {
        if (!currentFolioCalculation) return;
        window.print();
      });
    }

    /**
     * Event Listener Ekspor Data Reservasi ke Berkas JSON
     */
    if (btnExportJson) {
      btnExportJson.addEventListener("click", function () {
        const jsonStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(reservationsData, null, 2));
        const dlAnchor = document.createElement("a");
        dlAnchor.setAttribute("href", jsonStr);
        dlAnchor.setAttribute("download", "reservasi_svarga_hotel_241011402572.json");
        document.body.appendChild(dlAnchor);
        dlAnchor.click();
        dlAnchor.remove();
      });
    }

    /**
     * Event Listener Modal Audit Algoritma
     */
    function openModal() {
      auditModal.classList.remove("d-none");
      auditModal.setAttribute("aria-hidden", "false");
    }

    function closeModal() {
      auditModal.classList.add("d-none");
      auditModal.setAttribute("aria-hidden", "true");
    }

    btnOpenAudit.addEventListener("click", openModal);
    btnCloseAudit.addEventListener("click", closeModal);
    btnCloseAuditFooter.addEventListener("click", closeModal);
    auditModal.addEventListener("click", function (e) {
      if (e.target === auditModal) closeModal();
    });

    // Inisialisasi Tampilan Awal Saat Halaman Dimuat
    renderReservationsTable();
    renderStatisticalCards();
    render12DayScheduleTable(tomorrow.toISOString().split("T")[0], 550000); // Default ke Deluxe

  });

})();
