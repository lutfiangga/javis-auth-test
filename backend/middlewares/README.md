# backend/middlewares

Folder middleware API.

## Isi
- `verifyToken.ts`
  - Membaca header `Authorization: Bearer <token>`.
  - Verifikasi JWT access token.
  - Menyimpan `email` payload ke `req.email`.
- `loginLimiter.ts`
  - Rate limit endpoint login.
  - Konfigurasi: `max 5` request per `15 menit`.

## Catatan
- `verifyToken` dipakai untuk route protected (`GET /users`).
- `loginLimiter` dipasang pada `POST /login`.

