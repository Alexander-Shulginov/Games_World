import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src/', import.meta.url))
        }
    },
    build: {
        rollupOptions: {
            plugins: [
                visualizer({
                    filename: 'stats.html', // куда сохранить отчёт
                    open: true, // сразу открыть в браузере
                    gzipSize: true,
                    brotliSize: true
                })
            ]
        }
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
