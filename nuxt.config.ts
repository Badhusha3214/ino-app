// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/ionic', '@nuxtjs/tailwindcss', "shadcn-nuxt"],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  ionic: {
    css: {
      utilities: true
    }
  }
})