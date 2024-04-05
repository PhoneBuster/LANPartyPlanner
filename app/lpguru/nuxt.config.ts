// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss", "nuxt-icon"],
  typescript: {
    typeCheck: true,
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
    },
  },
});
