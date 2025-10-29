import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/portfolio-react-tw/",

  plugins: [
    react(),
    tailwindcss(),
  ],

  plugins: [
    react({
      babel: {
        plugins: [
          "babel-plugin-react-compiler"
        ],
      },
    }),
    tailwindcss(),
  ],
})