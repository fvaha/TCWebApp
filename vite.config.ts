import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Accept connections from all interfaces (useful in Docker or LAN)
    port: 5173,      // Dev server port
    proxy: {
      // Proxy API requests during development to backend
      "/api": {
        target: "http://192.168.1.5:5174",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
