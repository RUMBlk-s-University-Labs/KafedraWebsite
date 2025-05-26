import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../client/dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        news: resolve(__dirname, 'news.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        contacts: resolve(__dirname, 'contacts.html'),
      }
    }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
})