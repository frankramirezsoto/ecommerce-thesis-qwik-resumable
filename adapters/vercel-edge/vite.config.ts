import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { join } from 'path';

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite()],
    build: {
      ssr: true,
      rollupOptions: {
        input: ['src/entry.vercel-edge.tsx', '@qwik-city-plan'],
      },
      outDir: join('dist', 'server'),
    },
  };
});