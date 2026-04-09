# frontend/src/lib/stores

Zustand stores untuk state global frontend.

## Isi
- `useAuthStore.tsx`
  - Menyimpan token, nama user, initials.
  - Menyediakan `refreshToken()` dan `logout()`.
- `useShowAuthPages.tsx`
  - State mode auth: `login` atau `register`.
- `useShowPassword.tsx`
  - State visibility untuk field password per key.

