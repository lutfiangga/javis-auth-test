# Setup Guide

Panduan setup local development.

## Prasyarat
- Node.js + Your Favourite Package Manager
- MySQL aktif di local

## 1) Setup Backend

```bash
cd backend
bun install
```

copy `.env.example` to `.env`:

```env
PORT=3000
DB_NAME=auth_db
DB_USER=root
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=3306
ACCESS_TOKEN_SECRET=your_access_secret
REFRESH_TOKEN_SECRET=your_refresh_secret
NODE_ENV=development
```

Jalankan backend:

```bash
bun run dev
```

Alternative using PM2
```bash
pm2 start ecosystem.config.cjs
```

## 2) Setup Frontend

```bash
cd frontend
bun install
```

Buat `frontend/.env`:

```env
VITE_API_URL=http://localhost:3000
```

Jalankan frontend:

```bash
bun run dev
```

Alternative using PM2
```bash
pm2 start ecosystem.config.cjs
```

## 3) Akses Aplikasi

- Frontend: `http://localhost:5173` or `http://localhost:4173`
- Backend: `http://localhost:3000`

