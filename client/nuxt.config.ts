// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "EDM-Cam",
      htmlAttrs: {
        lang: "id",
      },
    },
  },
  css: ["~/assets/scss/main.scss", "~/assets/css/main.css"],
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/fonts", "@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700], //thin, reg, med, semib, bold
      Gudea: [400, 700],
    },
    display: "swap",
  },
});
