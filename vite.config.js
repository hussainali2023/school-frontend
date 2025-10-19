import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  esbuild: {
    loader:"jsx",
   include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
  optimizeDeps:{
    esbuildOptions: {
      loader: {
        ".js": "jsx"
      }
    }
  }
});
