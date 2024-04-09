// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss", "nuxt-icon"],
  typescript: {
    typeCheck: false,
  },
  css: ["@splidejs/splide/css/skyblue"],
  nitro: {
    storage: {
      db: {
        driver: "fs",
        base: "/home/node/data/games",
      },
      tickets: {
        driver: "fs",
        base: "/home/node/data/tickets",
      },
      user: {
        driver: "fs",
        base: "/home/node/data/user",
      },
      votes: {
        driver: "fs",
        base: "/home/node/data/votes",
      },
    },
  },
  vite: {
    resolve: {
      alias: {
        "@Image": "/home/node/lpguru/public/images",
      },
    },
  },
});
