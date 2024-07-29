import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { hash } from "./src/utils/functions.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.svg"],
  logLevel: "info",
  rollupOptions: {
    output: {
      entryFileNames: `[name]` + hash + `.js`,
      chunkFileNames: `[name]` + hash + `.js`,
      assetFileNames: `[name]` + hash + `.[ext]`,
    },
  },
});
