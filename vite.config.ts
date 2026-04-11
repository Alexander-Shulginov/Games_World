/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'
import { visualizer } from 'rollup-plugin-visualizer'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [
        vue(),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
            symbolId: 'icon-[dir]-[name]',
        }),
    ],
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
                    filename: 'stats.html',
                    open: false,
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
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ['legacy-js-api']
            }
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
