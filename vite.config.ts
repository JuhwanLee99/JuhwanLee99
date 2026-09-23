import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const basePath =
  process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES_BASE
    ? process.env.GITHUB_PAGES_BASE
    : '/';

export default defineConfig({
  plugins: [react()],
  base: basePath,
});
