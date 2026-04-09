# Backend API

Backend menyediakan API autentikasi berbasis JWT + refresh token cookie, serta endpoint user.

## Stack
- Express
- Sequelize (MySQL)
- bcrypt
- jsonwebtoken
- cookie-parser
- cors
- express-rate-limit

## Scripts
```bash
npm run dev
npm run start
```

`dev` memakai `nodemon + tsx`.

## Environment Variables

Buat file `.env` di folder `backend`.

```env
PORT=3000
DB_NAME=auth_db
DB_USER=root
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=3306
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:4173
ACCESS_TOKEN_SECRET=your_access_secret
REFRESH_TOKEN_SECRET=your_refresh_secret
```

## Endpoint Utama

- `POST /login` -> login + set `refreshToken` cookie
- `DELETE /logout` -> hapus refresh token dari DB + clear cookie
- `GET /token` -> refresh access token
- `GET /users` -> protected route (bearer token)
- `POST /users` -> register user

## Struktur Folder

- `config` -> inisialisasi koneksi database
- `controllers` -> business logic endpoint
- `middlewares` -> middleware auth/rate-limit
- `models` -> model Sequelize
- `routes` -> definisi route
- `types` -> type helper Express/API
