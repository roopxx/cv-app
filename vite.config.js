import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
    rollupOptions: {
      output: {
        entryFileNames: "assets/js/index.js",
        assetFileNames: "assets/css/style.css",
      },
    },
  },
});
