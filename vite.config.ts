import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",       // Listens on all network interfaces
    port: 5173,            // Explicit Vite port
    proxy: {
      // Proxy API requests to your Hono backend running on 5174
      "/api": {
        target: "http://127.0.0.1:5174",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
