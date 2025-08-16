import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	build: {
		outDir: 'dist',
		rollupOptions: {
			// 多入口构建
			input: {
				index: path.resolve(__dirname, 'src/index.ts'),
				cli: path.resolve(__dirname, 'src/cli.js')
			},
			// 确保外部化处理那些你不想打包进库的依赖
			external: [
				'vue',
				'commander',
				'openapi-typescript',
				'fs-extra',
				'tiny-invariant',
				'undici',
				'node:fs',
				'node:path',
				'node:stream',
				'node:url',
				'node:perf_hooks'
			],
			output: {
				format: 'es',
				entryFileNames: '[name].js'
			}
		}
	}
})
