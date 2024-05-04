// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    [
      'dayjs-nuxt', {
        locales: ['en', 'id'],
        defaultLocale: 'id',
        defaultTimezone: 'Asia/Jakarta',
        plugins: ['relativeTime', 'utc', 'timezone'],
      }
    ],
    'nuxt-icon',
    '@vueuse/motion/nuxt',
    'nuxt-swiper',
    'nuxt-icon',
    '@nuxt/image',
    [
      '@nuxtjs/google-fonts', {
        families: {
          'Plus Jakarta Sans': true,
          'JetBrains Mono': true,
          'Playfair Display': true,
        },
        display: 'swap',
        download: true,
        base64: true,
      }
    ]
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },

  css: [
    '~/assets/scss/core.scss',
  ],

  vite: {
    build: {
      cssCodeSplit: false,
    },
  }
});
