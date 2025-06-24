import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.',          // <-- explicitly the project root
  plugins: [react()],
  build: {
    outDir: 'dist',   // <-- default, but explicit is safer
  }
})
