# API Reference

Base URL: `http://localhost:3000`

## 1) Health Check

### `GET /`
- Deskripsi: endpoint sederhana untuk cek server hidup.
- Auth: tidak perlu.

## 2) Login

### `POST /login`
- Deskripsi: autentikasi user.
- Middleware: `loginLimiter` (maks 5 kali / 15 menit).
- Body:

```json
{
  "email": "test@example.com",
  "password": "password"
}
```

- Response sukses:
  - `data.accessToken` (JWT akses, masa hidup singkat).
  - cookie `refreshToken` (httpOnly).

## 3) Logout

### `DELETE /logout`
- Deskripsi: logout user.
- Auth: cookie `refreshToken`.
- Efek:
  - refresh token di DB dihapus.
  - cookie di-clear.

## 4) Refresh Access Token

### `GET /token`
- Deskripsi: generate access token baru dari refresh token cookie.
- Auth: cookie `refreshToken`.

## 5) Get Users

### `GET /users`
- Deskripsi: ambil daftar user.
- Auth: wajib bearer access token.
- Header:

```http
Authorization: Bearer <access_token>
```

## 6) Register User

### `POST /users`
- Deskripsi: membuat user baru.
- Auth: tidak perlu.
- Body:

```json
{
  "name": "John Doe",
  "email": "test@example.com",
  "password": "password",
  "confPassword": "password"
}
```

