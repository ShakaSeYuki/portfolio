import path from 'path';
import { rename } from 'fs/promises';
import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * ビルド成果物の index.react.html を index.html にリネームするプラグイン
 * ルートURL（/）でReact版が表示されるようにする
 */
const renameReactHtml = (): Plugin => ({
  name: 'rename-react-html',
  closeBundle: async () => {
    await rename(
      path.resolve(__dirname, 'dist/index.react.html'),
      path.resolve(__dirname, 'dist/index.html')
    );
  },
});

export default defineConfig({
  plugins: [react(), renameReactHtml()],
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.react.html'
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    port: 3000,
    open: 'index.react.html'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/variables.scss" as *;\n'
      }
    }
  },
  define: {
    __PWA_VERSION__: JSON.stringify(process.env.npm_package_version || '1.0.0')
  }
});