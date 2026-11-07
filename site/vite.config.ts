import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { bundledNoticesPlugin } from "./tools/bundled-notices.mjs";

export default defineConfig({
  plugins: [bundledNoticesPlugin(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "127.0.0.1",
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        specimen: fileURLToPath(new URL("./specimen.html", import.meta.url)),
      },
    },
  },
});
