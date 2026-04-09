# backend/config

Folder konfigurasi backend.

## Isi
- `Database.ts` -> membuat instance `Sequelize` ke MySQL menggunakan env:
  - `DB_NAME`
  - `DB_USER`
  - `DB_PASSWORD`
  - `DB_HOST`
  - `DB_PORT`

## Catatan
- `logging` database dimatikan (`false`).
- Instance diexport sebagai `db` untuk dipakai model/controller.

