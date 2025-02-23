import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    // https://github.com/tailwindlabs/tailwindcss/issues/13133
    // tailwindcss(),
    react(),
  ],
  server: {
    port: 3000,
  },
});
