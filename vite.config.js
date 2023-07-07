import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import resolve from "@rollup/plugin-node-resolve";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-router-test/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(/react-router-test/, "index.html"),
        404: resolve(/react-router-test/, "public/404.html"),
      },
    },
  },
});
