// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Ahmad Arief Harwoko — Independent Creative Developer',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio of Ahmad Arief Harwoko, independent creative developer based in Indonesia. Focuses on building high-fidelity websites with immersive motion and interactive experience.' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:title', content: 'Ahmad Arief Harwoko — Independent Creative Developer' },
        { property: 'og:description', content: 'Portfolio of Ahmad Arief Harwoko, independent creative developer based in Indonesia. Focuses on building high-fidelity websites with immersive motion and interactive experience.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Ahmad Arief Harwoko' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Ahmad Arief Harwoko — Independent Creative Developer' },
        { name: 'twitter:description', content: 'Portfolio of Ahmad Arief Harwoko, independent creative developer based in Indonesia.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap' }
      ]
    }
  },

  css: [
    '~/assets/css/global.css'
  ],

  future: {
    compatibilityVersion: 4
  }
})
