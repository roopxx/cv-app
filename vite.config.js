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
        assetFileNames: (assetFile) => {
          const fileInfo = assetFile.name.split(".");
          const extType = fileInfo[fileInfo.length - 1];
          if (/\.(png|jpeg|gif|svg|ico|mp3)$/.test(assetFile.name)) {
            return `assets/media/[name].${extType}`;
          }
          if (/\.(css|sass)$/.test(assetFile.name)) {
            return `assets/css/[name].${extType}`;
          }
        },
      },
    },
  },
});
