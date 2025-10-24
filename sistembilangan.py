# ================================================
# PROGRAM KONVERSI BILANGAN
# Biner ↔ Desimal ↔ Oktal ↔ Hexadesimal
# ================================================

def konversi_biner():
    biner = input("Masukkan bilangan biner: ")
    try:
        desimal = int(biner, 2)
        hexa = hex(desimal).upper()
        print("\n=== HASIL KONVERSI ===")
        print("Biner       :", biner)
        print("Desimal     :", desimal)
        print("Hexadesimal :", hexa)
    except ValueError:
        print("❌ Input bukan bilangan biner yang valid!")

def konversi_oktal():
    oktal = input("Masukkan bilangan oktal: ")
    try:
        desimal = int(oktal, 8)
        biner = bin(desimal)
        hexa = hex(desimal).upper()
        print("\n=== HASIL KONVERSI ===")
        print("Oktal       :", oktal)
        print("Desimal     :", desimal)
        print("Biner       :", biner)
        print("Hexadesimal :", hexa)
    except ValueError:
        print("❌ Input bukan bilangan oktal yang valid!")

def konversi_hexadesimal():
    hexa = input("Masukkan bilangan hexadesimal: ")
    try:
        desimal = int(hexa, 16)
        biner = bin(desimal)
        oktal = oct(desimal)
        print("\n=== HASIL KONVERSI ===")
        print("Hexadesimal :", hexa.upper())
        print("Desimal     :", desimal)
        print("Biner       :", biner)
        print("Oktal       :", oktal)
    except ValueError:
        print("❌ Input bukan bilangan hexadesimal yang valid!")

# ================================================
# MENU UTAMA
# ================================================
while True:
    print("\n===============================")
    print("   PROGRAM KONVERSI BILANGAN   ")
    print("===============================")
    print("1. Konversi Biner ke Desimal & Hexadesimal")
    print("2. Konversi Oktal ke Desimal, Biner & Hexadesimal")
    print("3. Konversi Hexadesimal ke Desimal, Biner & Oktal")
    print("4. Keluar")
    print("===============================")

    pilihan = input("Pilih menu (1-4): ")

    if pilihan == "1":
        konversi_biner()
    elif pilihan == "2":
        konversi_oktal()
    elif pilihan == "3":
        konversi_hexadesimal()
    elif pilihan == "4":
        print("Terima kasih! Program selesai.")
        break
    else:
        print("❌ Pilihan tidak valid! Silakan pilih 1-4.")
