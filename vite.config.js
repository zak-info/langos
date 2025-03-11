import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Allows external access
    port: 5173, // Ensure it's the correct port
    strictPort: true,
    hmr: {
      clientPort: 5173,
    },
    allowedHosts: ['langos.chananee.com'], // Allow your domain
  },
  plugins: [react()],
})
