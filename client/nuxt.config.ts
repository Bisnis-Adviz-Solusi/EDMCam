// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      title: "EDM-Cam",
      htmlAttrs: {
        lang: "id",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/EDMLogo.svg" }],
    },
  },
  css: ["./app/assets/main.scss"],
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/icon", "@nuxt/fonts"],
});
