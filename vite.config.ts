import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { VitePluginRadar } from "vite-plugin-radar";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginRadar({
      analytics: {
        id: "G-XD4550MV3V",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
