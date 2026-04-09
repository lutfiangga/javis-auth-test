# backend/types

Folder type helper untuk backend.

## Isi
- `api.ts` -> tipe response umum (`ApiSuccess`, `ApiError`).
- `express.d.ts` -> extend `Express.Request` dengan properti `email`.
- `express.ts` -> alias tipe `Req`, `Res`, `Next` dari Express.

## Catatan
- `verifyToken` mengisi `req.email`, sehingga augmentasi type dibutuhkan.

