require('dotenv').config()

module.exports = {
  ssr: false,
  telemetry: false,
  server: {
    host: process.env.BASE_URL || '0.0.0.0',
    port: process.env.PORT || 8085
  },
  head: {
    title: 'Accessibility Report',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Report Viewer for WCAG Scans'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  loading: { color: '#21222e' },
  loadingIndicator: {
    name: 'three-bounce',
    color: '#21222e',
    background: '#f2f2f2'
  },
  css: ['~/assets/theme.scss'],
  plugins: [
    '~/plugins/apex-chart.js',
    '~/plugins/smooth-scroll.js'
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  publicRuntimeConfig: {
    axios: { browserBaseURL: process.env.BROWSER_URL }
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    config: {}
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          autoprefixer: {}
        }
      }
    }
  }
}
