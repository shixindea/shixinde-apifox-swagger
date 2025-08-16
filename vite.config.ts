import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		dts({
			include: ['src/**/*'],
			outDir: 'dist',
			insertTypesEntry: true
		})
	],
	build: {
		outDir: 'dist',
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			formats: ['es', 'cjs'],
			fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`
		},
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: [
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
			]
		}
	}
})
