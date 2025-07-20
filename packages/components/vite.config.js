import { defineConfig } from 'vite'
import { resolve } from 'path'
import reactPlugin from '@vitejs/plugin-react'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, './src/index.ts'),
            name: '@lixiaohupersonal/components',
            formats: ['es'],
            fileName: () => 'index.js'

        },
         rollupOptions: {
            external: ['react', 'react-dom']
        },
        outDir: 'dist'
    },
    
    plugins: [
        reactPlugin()
    ]
})