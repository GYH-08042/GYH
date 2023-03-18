import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'//手动导入elementplus

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    ElementPlus()
  ],
  server: {
    host: '192.168.1.3',//设置IP
    port: 9999,//设置端口
    strictPort: true,//若端口被占用不自动寻找下一个可用端口
  }
})
