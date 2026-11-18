import os
import time
from playwright.sync_api import sync_playwright

output_dir = r"c:\Users\DELL\Downloads\tugas-kuliah\Tugas-Kuliah-Pemrograman-Web-1_Pertemuan-16"
html_path = os.path.join(output_dir, "index.html")
chrome_exe = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=chrome_exe, headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    
    # 1. Buka Halaman
    page.goto(f"file:///{html_path.replace(os.sep, '/')}")
    page.wait_for_timeout(1000)
    
    # Screenshot Tampilan Awal Keseluruhan
    page.screenshot(path=os.path.join(output_dir, "screenshot_overview.png"), full_page=True)
    print("Screenshot Overview tersimpan.")
    
    # 2. Isi Formulir Reservasi untuk Pengujian Interaktif
    page.fill("#guestName", "Raden Mas Dananjaya")
    page.fill("#guestPhone", "081288990011")
    page.select_option("#roomType", "JS") # Junior Suite Private Balcony (Rp 1.500.000)
    page.fill("#guestCount", "2")
    
    # Centang Sarapan & Spa dengan force=True
    page.check("input[name='amenity'][value='breakfast']", force=True)
    page.check("input[name='amenity'][value='spa']", force=True)
    
    # Kode Promo & Member
    page.fill("#promoCode", "SVARGA2026")
    page.check("#isMember", force=True)
    page.select_option("#depositScheme", "installment")
    
    # Klik Submit Hitung
    page.click("#btnSubmitReservation")
    page.wait_for_timeout(1000)
    
    # Screenshot Formulir & Struk Terhitung
    page.screenshot(path=os.path.join(output_dir, "screenshot_calculated_folio.png"), full_page=False)
    print("Screenshot Calculated Folio tersimpan.")
    
    # Klik Konfirmasi Simpan ke Tabel Data Tamu
    page.click("#btnSaveToTable")
    page.wait_for_timeout(1000)
    
    # Scroll ke tabel & screenshot tabel data tamu
    page.locator("#reservationsTable").scroll_into_view_if_needed()
    page.wait_for_timeout(500)
    page.screenshot(path=os.path.join(output_dir, "screenshot_table_and_stats.png"), full_page=False)
    print("Screenshot Table and Stats tersimpan.")
    
    # Scroll ke tabel jadwal 12 hari
    page.locator("#dailyScheduleTable").scroll_into_view_if_needed()
    page.wait_for_timeout(500)
    page.screenshot(path=os.path.join(output_dir, "screenshot_schedule_12days.png"), full_page=False)
    print("Screenshot Schedule 12 Days tersimpan.")
    
    # Buka Modal Audit Algoritma NIM
    page.click("#btnOpenAudit")
    page.wait_for_timeout(500)
    page.screenshot(path=os.path.join(output_dir, "screenshot_modal_audit.png"), full_page=False)
    print("Screenshot Modal Audit tersimpan.")
    
    browser.close()

print("Seluruh screenshot visual berhasil diambil secara sempurna!")
