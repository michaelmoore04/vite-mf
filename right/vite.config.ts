import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "right",
      filename: "remoteEntry.js",
      exposes: {
        "./Right": "./src/components/Right.vue",
        "./HomeView": "./src/views/HomeView.vue",
        "./AboutView": "./src/views/AboutView.vue",
      },
      shared: ["vue"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    sourcemap: "inline"
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
