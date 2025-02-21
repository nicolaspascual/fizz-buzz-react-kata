import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // ✅ Use jsdom for DOM support
    setupFiles: "./src/tests/setup.js", // ✅ Optional: global setup
    exclude: [...configDefaults.exclude, "e2e/*"], // Ignore E2E tests if any
    globals: true, // Make globals (like `expect`) available globally
  },
})


