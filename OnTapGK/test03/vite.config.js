import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // 1. Cho phép dùng các hàm như describe, it, expect mà không cần import
    globals: true,
    // 2. Chỉ định môi trường chạy test là trình duyệt giả lập
    environment: 'jsdom',
    // 3. File setup để nạp các matcher (như toBeInTheDocument)
    setupFiles: './src/setupTests.js',
  },
})
