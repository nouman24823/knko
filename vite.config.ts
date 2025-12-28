import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // react plugin with babel-react-compiler
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),

    // tailwindcss plugin
    tailwindcss(),
  ],

  // path aliases
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
