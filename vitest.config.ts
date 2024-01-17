import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html']
    },
    setupFiles: './test/setup.ts',
    includeSource: [
      './app/_components/**/*.{tsx}',
      './app/_utils/**/*.{ts}',
      './app/**/*.{ts}'
    ],
    exclude: ['e2e', 'node_modules']
  },
  resolve: {
    alias: [{ find: '@/app', replacement: resolve(__dirname, './app') }]
  }
})
