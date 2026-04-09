# frontend/src/components/auth

Komponen route guard berbasis status autentikasi.

## Isi
- `publicRoute.tsx`
  - Menampilkan halaman guest jika belum login.
  - Redirect ke `/dashboard` jika sudah login.
- `protectedRoute.tsx`
  - Menampilkan halaman private jika user terautentikasi.
  - Redirect ke `/` jika belum login.
  - Menjalankan `refreshToken` saat inisialisasi.

