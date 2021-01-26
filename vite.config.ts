import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  alias: [
    {
      find       : '@/',
      replacement: `${__dirname}/src/`
    }
  ],
  plugins: [vue()]
})