import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/xocolate-website/',
})
