# backend/models

Folder model Sequelize.

## Isi
- `UserModel.ts`
  - Nama tabel: `user` (`freezeTableName: true`)
  - Field:
    - `id` (INTEGER, PK, auto increment)
    - `name` (STRING)
    - `email` (STRING)
    - `password` (STRING)
    - `refreshToken` (TEXT)

## Catatan
- Model disinkronkan saat server start (`Users.sync()` di `index.ts`).

