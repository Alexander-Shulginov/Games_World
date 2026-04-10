/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src/', import.meta.url))
        }
    },
    test: {
        environment: 'jsdom',
    },
    build: {
        rollupOptions: {
            plugins: [
                visualizer({
                    filename: 'stats.html', // куда сохранить отчёт
                    open: false, // сразу открыть в браузере
                    gzipSize: true,
                    brotliSize: true
                })
            ],
            output: {
                manualChunks(id) {
                    if (id.includes('@fancyapps/ui')) {
                        return 'fancyapps'
                    }
                }
            },
        },
        sourcemap: 'hidden',
    },
    server: {
        proxy: {
            '/api': {
                target: 'https://api.rawg.io/api',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
