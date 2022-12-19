import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// 自动路由
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), // Vue SFC
    Pages(), // Auto Routing '/pages'
    AutoImport({
      dts: true, // TS support
      imports: ['vue', 'vue-router'],
      resolvers: [],
      dirs: [
        'src/composables'
      ],
      eslintrc: {
        enabled: false
      }
    }),
    Components({
      dts: true, // TS support
    }),
  ],
  resolve: {
  }
})
