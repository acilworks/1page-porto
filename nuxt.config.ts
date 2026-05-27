// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Ahmad Arief Harwoko — Full-Stack Developer Portfolio',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        {
          name: 'description',
          content: 'Portfolio of Ahmad Arief Harwoko, a full-stack developer from Indonesia with experience in web development, networking, fiber optic systems, LMS platforms, and digital product development.'
        },

        {
          name: 'keywords',
          content: 'Ahmad Arief Harwoko, Ahmad Arief, full-stack developer Indonesia, web developer Indonesia, portfolio developer, Laravel developer, Nuxt developer, fiber optic engineer, network engineer, LMS developer, Kibardjaya'
        },

        { name: 'author', content: 'Ahmad Arief Harwoko' },
        { name: 'robots', content: 'index, follow' },
        { name: 'format-detection', content: 'telephone=no' },

        { property: 'og:title', content: 'Ahmad Arief Harwoko — Full-Stack Developer Portfolio' },
        {
          property: 'og:description',
          content: 'Full-stack developer portfolio featuring websites, LMS platforms, digital products, and projects built with functionality, interaction, and purpose.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Ahmad Arief Harwoko Portfolio' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:image', content: '/og-image-ac.png' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Ahmad Arief Harwoko — Full-Stack Developer Portfolio' },
        {
          name: 'twitter:description',
          content: 'Portfolio of Ahmad Arief Harwoko, a full-stack developer from Indonesia building websites, LMS platforms, and digital products.'
        },
        { name: 'twitter:image', content: '/og-image-ac.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/ac.png' },
        { rel: 'canonical', href: 'https://acworks.vercel.app' },

        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap'
        }
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
