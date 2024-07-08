import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import frappeui from "frappe-ui/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), frappeui(),],
  build: {
		outDir: "../neamah/public/frontend",
		emptyOutDir: true,
		target: "es2015",
    commonjsOptions: {
      include: [/tailwind.config.js/, /node_modules/],
    }
  },
  optimizeDeps: {
    include: [
      'feather-icons',
      'showdown',
      'tailwind.config.js',
    ],
  },
})
