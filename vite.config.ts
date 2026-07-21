import { defineConfig } from 'vite'
import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath } from "node:url";

const basePath = process.env.BASE_PATH ?? "";

// https://vite.dev/config/
export default defineConfig({
  base: basePath
    ? `${basePath}/`
    : "/",
  plugins: [reactRouter(),
    tsconfigPaths()
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(
        new URL("./src", import.meta.url),
      ),
    },
  },
})
