/// <reference types='vitest/config' />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// oxlint-disable-next-line no-default-export -- Default export required
export default defineConfig({
    build: {
        outDir: './dist',
    },
    plugins: [react()],
    resolve: {
        tsconfigPaths: true,
    },
    server: {
        port: 2080,
    },
    test: {
        environment: 'jsdom',
        typecheck: {
            enabled: true,
            ignoreSourceErrors: true,
        },
    },
})
