import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'stats.html', // le fichier de sortie
      open: true, // ouvre automatiquement le rapport dans le navigateur
      gzipSize: true, // affiche aussi la taille gzippée
      brotliSize: true, // affiche aussi la taille avec Brotli
    }),
  ],
})
