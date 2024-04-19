// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: {
    global: true,
    dirs: ["~/components"],
  },
  router: {
    options: { scrollBehaviorType: "auto", end: true },
  },
  modules: ["@nuxt/content", "@vueuse/nuxt"],
  css: ["~/assets/css/main.css"],
  content: {
    experimental: {
      search: {
        indexed: true,
      },
    },
    highlight: {
      theme: {
        default: "catppuccin-mocha",
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devServer: {
    host: "0.0.0.0",
  },
});
