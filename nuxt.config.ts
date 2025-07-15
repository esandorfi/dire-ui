// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui-pro",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
  ],

  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-11-27",

  fonts: {
    // Désactiver le téléchargement automatique
    experimental: {
      processCSSVariables: true,
    },
  },

  runtimeConfig: {
    public: {
      formspreeEndpoint: process.env.FORMSPREE_ENDPOINT,
    },
  },
});
