# Authentication Flow

Dokumentasi alur auth frontend-backend.

## Ringkasan
- Access token: JWT short-lived (`20s`).
- Refresh token: JWT (`1d`) disimpan di cookie `httpOnly` + DB.

## Login Flow
1. User submit login di frontend.
2. Frontend `POST /login`.
3. Backend validasi password dengan `bcrypt.compare`.
4. Backend generate access token + refresh token.
5. Backend simpan refresh token ke kolom `refreshToken` user.
6. Backend set cookie `refreshToken` (httpOnly).
7. Frontend menerima access token dan lanjut ke halaman protected.

## Protected Route Flow
1. Frontend menaruh access token di Zustand (`useAuthStore`).
2. Saat akses route private, `ProtectedRoute` cek status auth.
3. Request data protected kirim header `Authorization: Bearer <token>`.
4. Backend `verifyToken` memvalidasi token.

## Refresh Flow
1. Jika perlu inisialisasi ulang sesi, frontend memanggil `GET /token`.
2. Backend membaca cookie `refreshToken`.
3. Jika valid, backend kirim access token baru.
4. Frontend update state auth store.

## Logout Flow
1. Frontend memanggil `DELETE /logout`.
2. Backend hapus refresh token dari DB.
3. Backend clear cookie `refreshToken`.
4. Frontend reset state auth dan redirect ke halaman login.

