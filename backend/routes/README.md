# backend/routes

Folder definisi route Express.

## Isi
- `index.ts`
  - `GET /` -> health response sederhana
  - `POST /login` -> login + rate limiter
  - `DELETE /logout` -> logout
  - `GET /token` -> refresh access token
  - `router.use("/users", UserRoutes)` -> mounting route user
- `UserRoutes.ts`
  - `GET /users` -> protected (`verifyToken`)
  - `POST /users` -> register user

## Catatan
- Base path route saat ini langsung di root app (`app.use(router)`).

