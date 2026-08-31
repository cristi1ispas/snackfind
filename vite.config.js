import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('md-')
        }
      }
    }),
    VitePWA({
      registerType: 'prompt',
      injectRegister: 'auto',
      devOptions: {
        enabled: false
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png.svg}'],
        cleanupOutdatedCaches: true,
      },
      manifest: {
        name: 'Snack Find',
        short_name: 'snackfind',
        description: 'Crowd-sourced catalog for local shops',
        theme_color: '#cdeda3',
        background_color : '#f9faef',
        display: 'standalone',
        orientation: 'portrait',
        /*
        icons: [
          {
            src: 'snackfindIconSmall-192x192.png',
            sizes: '192x192',
            type: 'image/png'   NOTIF ICO
          },
          {
            src: 'snackfindIconNormal-512x512.png',
            sizes: '512x512',
            type: 'image/png'   HOMESCREEN
          },
          {
            src: 'snackfindIconNormal-512x512.png',
            sizes: '512x512',
            type: 'image/png',  HOMESCREEN
            purpose: 'any maskable'
          }
        ]
        */
      }
    })
  ],
})
