# Auth App

Monorepo aplikasi autentikasi fullstack.

## Preview
Lihat folder [`images`](./images) untuk preview.

## Tech Stack

### Frontend
- React + Vite
- Tailwind CSS
- shadcn/ui
- jwt-decode
- axios
- zustand
- react-router-dom
- @tanstack/react-table
- react-icons

### Backend
- Express
- bcrypt
- cors
- jsonwebtoken
- cookie-parser
- sequelize
- express-rate-limit

## Struktur Utama

- `frontend` -> aplikasi React (UI, route, state, auth flow di client)
- `backend` -> API Express (auth, token refresh, user endpoint, DB access)
- `docs` -> dokumentasi setup, API, auth flow, dan struktur project

## Quick Start

You can use your favourite package manager
but my prefered is bun

### 1) Backend
```bash
cd backend
bun install
bun run dev
```

### 2) Frontend
```bash
cd frontend
bun install
bun run dev
```

### 3) Alternative
```bash
cd backend && pm2 start ecosystem.config.cjs

cd frontend && pm2 start ecosystem.config.cjs
```

Frontend default di `http://localhost:5173` or `http://localhost:4173`.

## Environment Variables

### Backend (`backend/.env`)
```env
PORT=3000
DB_NAME=db_name
DB_USER=db_user
DB_PASSWORD=db_password
DB_HOST=db_host
DB_PORT=db_port
ACCESS_TOKEN_SECRET=your_access_secret
REFRESH_TOKEN_SECRET=your_refresh_secret
```

### Frontend (`frontend/.env`)
```env
VITE_API_URL=http://localhost:3000
```

## Dokumentasi Lengkap

Lihat folder [`docs`](./docs) untuk dokumentasi detail.
