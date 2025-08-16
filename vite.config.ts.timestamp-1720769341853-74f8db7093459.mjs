// vite.config.ts
import { defineConfig } from "file:///F:/my-project/utils/node_modules/.pnpm/vite@4.5.3/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/my-project/utils/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@4.5.3_vue@3.4.31/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///F:/my-project/utils/node_modules/.pnpm/vite-plugin-dts@3.9.1_typescript@5.5.3_vite@4.5.3/node_modules/vite-plugin-dts/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "F:\\my-project\\utils";
var vite_config_default = defineConfig({
  plugins: [vue(), dts({ rollupTypes: true })],
  build: {
    outDir: "dist",
    lib: {
      //指定组件编译入口文件
      entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "index",
      fileName: "index"
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxteS1wcm9qZWN0XFxcXHV0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxteS1wcm9qZWN0XFxcXHV0aWxzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9teS1wcm9qZWN0L3V0aWxzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cGx1Z2luczogW3Z1ZSgpLCBkdHMoeyByb2xsdXBUeXBlczogdHJ1ZSB9KV0sXG5cdGJ1aWxkOiB7XG5cdFx0b3V0RGlyOiAnZGlzdCcsXG5cdFx0bGliOiB7XG5cdFx0XHQvL1x1NjMwN1x1NUI5QVx1N0VDNFx1NEVGNlx1N0YxNlx1OEJEMVx1NTE2NVx1NTNFM1x1NjU4N1x1NEVGNlxuXHRcdFx0ZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHMnKSxcblx0XHRcdG5hbWU6ICdpbmRleCcsXG5cdFx0XHRmaWxlTmFtZTogJ2luZGV4J1xuXHRcdH0sXG5cdFx0cm9sbHVwT3B0aW9uczoge1xuXHRcdFx0Ly8gXHU3ODZFXHU0RkREXHU1OTE2XHU5MEU4XHU1MzE2XHU1OTA0XHU3NDA2XHU5MEEzXHU0RTlCXHU0RjYwXHU0RTBEXHU2MEYzXHU2MjUzXHU1MzA1XHU4RkRCXHU1RTkzXHU3Njg0XHU0RjlEXHU4RDU2XG5cdFx0XHRleHRlcm5hbDogWyd2dWUnXSxcblx0XHRcdG91dHB1dDoge1xuXHRcdFx0XHQvLyBcdTU3MjggVU1EIFx1Njc4NFx1NUVGQVx1NkEyMVx1NUYwRlx1NEUwQlx1NEUzQVx1OEZEOVx1NEU5Qlx1NTkxNlx1OTBFOFx1NTMxNlx1NzY4NFx1NEY5RFx1OEQ1Nlx1NjNEMFx1NEY5Qlx1NEUwMFx1NEUyQVx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRlxuXHRcdFx0XHRnbG9iYWxzOiB7XG5cdFx0XHRcdFx0dnVlOiAnVnVlJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpUCxTQUFTLG9CQUFvQjtBQUM5USxPQUFPLFNBQVM7QUFDaEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUhqQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksRUFBRSxhQUFhLEtBQUssQ0FBQyxDQUFDO0FBQUEsRUFDM0MsT0FBTztBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsS0FBSztBQUFBO0FBQUEsTUFFSixPQUFPLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDN0MsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1g7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBLE1BRWQsVUFBVSxDQUFDLEtBQUs7QUFBQSxNQUNoQixRQUFRO0FBQUE7QUFBQSxRQUVQLFNBQVM7QUFBQSxVQUNSLEtBQUs7QUFBQSxRQUNOO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
