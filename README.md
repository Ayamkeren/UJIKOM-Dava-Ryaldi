# PROJECT : Website Toko Mainan Secara Online

## Deskripsi 
Website ini memungkinkan para pengguna untuk membeli mainan yang lengkap secara online. Pengguna dapat melihat ketersediaan barang, dan harga barang.

# 
RELASI ANTAR ENTITAS 🔗

## 1. Admin (admin):
Admin memiliki akses untuk menambahkan, mengedit, dan menghapus Toys serta mengelola data yang masuk.  
Relasi: One-to-Many dengan Produk, Order.

## 2. Customer (pelanggan):
Setiap pelanggan dapat melakukan pemesanan Toys.  
Relasi: One-to-Many dengan Order.

## 3. Produk (Toys):
Mainan yang tersedia dalam sistem dapat dibeli oleh pelanggan.  
Relasi: One-to-Many dengan Order.

## 4. Order (pesanan):
Setiap pesanan mencatat detail pembelian obat oleh pelanggan.  
Relasi: Many-to-One dengan Customer dan Produk. One-to-One dengan Payment dan Report.

## 5. Payment (Pembayaran):
Setiap pelanggan dapat memilih metode pembayaran yang disediakan.  
Relasi: One-to-One dengan Order.


Struktur tabel laporan mencakup:
- **id** (Primary Key)
- **order_id** (Foreign Key ke tabel Order)
- **total_pendapatan** (Total hasil dari pesanan)
- **jumlah_mainan_terjual**
- **tanggal_transaksi** (Tanggal pesanan diselesaikan)

Dengan tabel ini, admin dapat melihat data penjualan dengan lebih mudah! 🚀

# Dependecies / Teknologi yang digunakan 🖥️

## Backend

1. **npm init -y**
   
   Perintah ini digunakan untuk menginisialisasi proyek dan membuat file package.json.
   
   ```bash
   npm init -y
   ```

2. **express**
   
   Express JS sebagai framework Node.js untuk mengelola request dan response HTTP.
   
   ```bash
   npm i express
   ```

3. **mysql2**
   
   Package untuk melakukan koneksi ke database MySQL.
   
   ```bash
   npm i mysql2
   ```

4. **dotenv**
   
   Dotenv untuk mengatur variabel lingkungan.
   
   ```bash
   npm i dotenv
   ```

5. **sequelize**
   
   ORM yang digunakan untuk mengelola database.
   
   ```bash
   npm i sequelize
   ```

6. **nodemon**
   
   Untuk menjalankan server secara otomatis ketika ada perubahan pada kode.
   
   ```bash
   npm install nodemon
   ```

   Jalankan server dengan perintah:
   
   ```bash
   nodemon server.js
   ```

## Frontend

1. **React JS**
   
   Digunakan sebagai framework frontend untuk membangun antarmuka pengguna.
   
   ```bash
   npx create-react-app frontend
   ```

2. **axios**
   
   Digunakan untuk melakukan HTTP request ke backend.
   
   ```bash
   npm i axios
   ```

3. **tailwindcss**
   
   Framework CSS untuk styling yang cepat dan responsif.
   
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

   Inisialisasi Tailwind CSS:
   
   ```bash
   npx tailwindcss init -p
   ```

Aplikasi akan berjalan pada port yang ditentukan di file .env. 🚀