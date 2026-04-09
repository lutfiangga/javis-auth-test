import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function getHostnamesFromUrls(urls: string[]) {
  return urls
    .map((url) => {
      try {
        return new URL(url).hostname
      } catch {
        return null
      }
    })
    .filter((host): host is string => Boolean(host))
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const apiUrls = [
    env.VITE_API_URL,
  ].filter(Boolean)

  const allowedHosts = [
    'localhost',
    'javis.testzone.web.id',
    'javis-auth.vercel.app',
    ...getHostnamesFromUrls(apiUrls),
  ]

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 5173,
      host: true,
      strictPort: true,
      allowedHosts,
      hmr: {
        port: 5173,
      },
    },
    preview: {
      allowedHosts,
    },
  }
})