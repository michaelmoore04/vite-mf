import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "app",
      remotes: {
        info: "http://localhost:5175/dist/assets/remoteEntry.js",
        left: "http://localhost:5174/dist/assets/remoteEntry.js",
        right: "http://localhost:5173/dist/assets/remoteEntry.js",
      },
      shared: ["vue"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
