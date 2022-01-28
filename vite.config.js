import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { chromeExtension } from 'rollup-plugin-chrome-extension'
import { emptyDir } from 'rollup-plugin-empty-dir'
import zip from 'rollup-plugin-zip'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    build: {
        rollupOptions: {
            input: 'src/manifest.json',
        },
    },
    plugins: [
        vue(),
        chromeExtension(),
        emptyDir(),
        isProd && zip({ dir: 'releases' }),
    ],
})
