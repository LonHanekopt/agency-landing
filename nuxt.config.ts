// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@formkit/auto-animate',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
        Lato: [100, 300, 400, 700],
        Raleway: {
          wght: [100, 400],
          ital: [100]
        },
      }
    }],
    'shadcn-nuxt',
    '@nuxt/icon'
  ]
})