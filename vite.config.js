import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const isGitHubPages = process.env.VITE_APP_HOSTING === 'ghpages';

export default defineConfig({


  base: isGitHubPages
    ? "/portfolio-react-tw/"
    : "/",
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