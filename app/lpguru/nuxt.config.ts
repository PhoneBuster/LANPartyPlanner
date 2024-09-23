// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', 'nuxt-icon'],

  typescript: {
      typeCheck: false,
  },

  css: ['@splidejs/splide/css/skyblue'],

  nitro: {
      storage: {
          db: {
              driver: 'fs',
              base: '/home/node/data/games',
          },
          tickets: {
              driver: 'fs',
              base: '/home/node/data/tickets',
          },
          user: {
              driver: 'fs',
              base: '/home/node/data/user',
          },
          votes: {
              driver: 'fs',
              base: '/home/node/data/votes',
          },
          config: {
              driver: 'fs',
              base: '/home/node/data/config',
          },
      },
  },

  vite: {
      resolve: {
          alias: {
              '@Image': '/home/node/lpguru/public/images',
          },
      },
  },

  tailwindcss: {
      config: {
          theme: {
              extend: {
                  boxShadow: {
                      cm: '12px 12px 24px -6px rgb(0,0,0)',
                  },
              },
          },
      },
  },

  compatibilityDate: '2024-09-23',
});