import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-shop-demo/', // ✅ 修改为你的部署路径，如用于 GitHub Pages
  plugins: [react()],
  server: {
    port: 5173,
  },
});
