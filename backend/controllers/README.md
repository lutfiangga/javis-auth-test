# backend/controllers

Folder business logic endpoint API.

## Isi
- `AuthController.ts`
  - `login` -> validasi email/password, generate access token (20s) + refresh token (1d), simpan refresh token ke DB, kirim cookie httpOnly.
  - `logout` -> hapus refresh token di DB dan clear cookie.
- `RefreshTokenController.ts`
  - `refreshToken` -> verifikasi refresh token dari cookie, generate access token baru.
- `UserController.ts`
  - `getUsers` -> ambil daftar user (`id`, `name`, `email`).
  - `createUser` -> register user baru + hash password.
  - `getUserById` -> helper by ID (belum dipasang di route aktif).

## Catatan
- Validasi auth utama ada di controller + middleware.
- Password diproses dengan `bcrypt`.

