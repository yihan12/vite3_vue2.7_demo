import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    /* 添加alias规则 */
    alias: [
      {
        find: '@/',
        replacement: '/src/'
      }
    ],
    /* 暂时先加.vue, .js, .json */
    extensions: [".vue", ".js", ".json"],
  },
  return:{
    base:'/'
  },
  build: {
    rollupOptions: {
      output: { //静态资源分类打包
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        }
      }
  }
})
