import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCss from 'vite-plugin-windicss';


const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCss(),
  ],
  alias:{
    '@': path.resolve(__dirname,'./src')
  }
})
