export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  server: {
    host: '0.0.0.0',
    port: '3000'
  },

  generate: {
    fallback: true
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Star Wars - Guillermo López',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: "utf-8" },
      { name: 'viewport', content: 'initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' },
      { hid: "description", name: "description", content: "Not so long ago in a galaxy rather nearby... Guillermo López designed this website." },
      {
        property: 'og:description',
        content:
          'Not so long ago in a galaxy rather nearby... Guillermo López designed this website.'
      },
      { property: 'og:title', content: 'Star Wars - Guillermo López' },
      { property: 'og:image', content: 'https://star-wars.lopermo.com/og_image.jpeg' },
      { property: 'og:locale', content: 'en_US' },
      { "http-equiv": "Content-Security-Policy", content: "upgrade-insecure-requests" },
      { property: 'og:url', content: 'https://star-wars.lopermo.com' }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@assets/global.scss",
    'swiper/swiper.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false },
    { src: '~/plugins/pagination', ssr: false },
    { src: '~/plugins/swiper', mode: 'client' },
    { src: '~/plugins/filters', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://swapi.dev/api/',
    https: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // use extend() method for nuxt
    extend(config, { isServer, isClient }) {
      config.module.rules.push({
        test: /\.vue$/,
        loader: "vue-svg-inline-loader",
        options: { /* ... */ }
      })
    }
  }
}
