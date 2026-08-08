import { defineConfig } from 'vite';
import { copyFileSync } from 'fs';
import { resolve } from 'path';

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  plugins: [
    {
      name: 'copy-openbridge-css',
      closeBundle() {
        copyFileSync(
          resolve(__dirname, 'node_modules/@oicl/openbridge-webcomponents/dist/openbridge.css'),
          resolve(__dirname, 'dist/openbridge.css')
        );
      },
    },
  ],
  build: {
    lib: {
      entry: 'src/inscada-bundle.ts',
      formats: ['es'],
      fileName: () => 'inscada-openbridge.min.js',
    },
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: true,
    target: 'es2020',
    rollupOptions: {
      treeshake: { moduleSideEffects: true },
      // Bundle everything into one file — no externals
      output: {
        inlineDynamicImports: true,
        // Attribution travels WITH the file (it is served app-wide AND per-space via custom-HTML).
        banner:
          '/*! OpenBridge Web Components v1.0.0 — Copyright 2024 OICL (Ocean Industries Concept Lab) — ' +
          'Apache-2.0 — https://www.openbridge.no | Bundled Noto Sans font — SIL OFL 1.1. ' +
          'Full third-party license texts: /libs/openbridge/LICENSE.txt */',
      },
    },
  },
});
