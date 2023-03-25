/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    port: 3000,
  },
  preview: {
    port: 5000,
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setupTests.ts",
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    minify: true,
  },
});
