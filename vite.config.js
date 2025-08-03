import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.ttf'], // Add this line
  server: {
    fs: {
      allow: ['..'] // Allows accessing parent directories if needed
    }
  }
})