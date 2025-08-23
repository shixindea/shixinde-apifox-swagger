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
			entry: {
				index: path.resolve(__dirname, 'src/index.ts'),
				'types-template': path.resolve(__dirname, 'src/types-template.ts')
			},
			formats: ['es', 'cjs'],
			fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'js' : 'cjs'}`
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
