import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/hazeberg-consulting/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        careers: 'careers.html'
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
