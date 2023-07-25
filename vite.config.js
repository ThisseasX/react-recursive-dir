import { defineConfig } from 'vite';

export default defineConfig({
  base: '/react-recursive-dir',
  resolve: {
    alias: {
      components: '/src/components',
    },
  },
});
