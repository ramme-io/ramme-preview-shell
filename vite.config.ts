import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // ✅ CRITICAL: Allow Vite to serve files outside the current project folder
  server: {
    fs: {
      allow: [
        // Allow serving files from the project root
        '.',
        // Allow serving files from the sibling UI library
        '../../ramme-ui', 
      ],
    },
  },
});