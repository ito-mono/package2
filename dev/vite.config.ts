import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'index',
      fileName: 'index',
      formats: ['es'],
    },
    outDir: '../dist',
    emptyOutDir: true,
  },
});
