import { defineConfig } from './src'

export default defineConfig({
    tsconfigRootDir: import.meta.dirname,
    react: true,
    nextjs: true,
    tailwindEntryPoint: './src/styles/globals.css',
    ignores: ['dist/**', 'node_modules/**']
})