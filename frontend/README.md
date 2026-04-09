# Frontend

Frontend aplikasi autentikasi berbasis React + Vite.

## Stack
- React
- Vite
- Tailwind CSS
- shadcn/ui
- axios
- zustand
- jwt-decode
- react-router-dom
- @tanstack/react-table
- react-icons

## Scripts
```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Environment Variable

Buat file `.env` di folder `frontend`.

```env
VITE_API_URL=http://localhost:3000
```

## Routing

- `/` -> login/register (`PublicRoute`)
- `/dashboard` -> halaman dashboard (`ProtectedRoute`)
- `/users` -> list user (`ProtectedRoute`)
- `/about` -> README in-app (`ProtectedRoute`)
- `*` -> error page

## Arsitektur Singkat

- `src/main.tsx`:
  - bootstrap React app
  - set `axios.defaults.withCredentials = true`
- `src/lib/stores/useAuthStore.tsx`:
  - state auth global (token, profile, auth status)
  - refresh token flow
- `src/components/auth/*`:
  - route guard public/protected
