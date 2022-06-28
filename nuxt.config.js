export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'FiranseFood | Nigeria',
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: 'utf-8' },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" },
      { hid: 'description', name: 'description', content: 'Send food to your loved ones now, from anywhere, anytime! .Gift food to your loved ones and have access to your favourite meal, dishes, snacks or dessert all the time.' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: "author", name: "author", content: "FiranseFood" },
      { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
      { hid: "twitter:title", name: "twitter:title", content: "Sharing love with food" },
      { hid: "twitter:description", name: "twitter:description", content: "Send food to your loved ones now, from anywhere, anytime! .Gift food to your loved ones and have access to your favourite meal, dishes, snacks or dessert all the time." },
      { hid: "twitter:url", name: "twitter:url", content: `www.firansefood.com` },
      { hid: "twitter:image:src", name: "twitter:image:src", content: `https://www.firansefood.com/_nuxt/img/firansee.135169f.png` },
      { hid: "twitter:site", name: "twitter:site", content: "@firansefood" },
      { hid: "twitter:creator", name: "twitter:creator", content: "@firansefood" },
      { hid: "og:site_name", property: "og:site_name", content: "FiranseFood." },
      { hid: "og:title", property: "og:title", content: "Sharing love with food" },
      { hid: "og:description", property: "og:description", content: "Send food to your loved ones now, from anywhere, anytime! .Gift food to your loved ones and have access to your favourite meal, dishes, snacks or dessert all the time." },
      { hid: "og:url", property: "og:url", content: `www.firansefood.com` },
      { hid: "og:image", property: "og:image", content: `https://www.firansefood.com/_nuxt/img/firansee.135169f.png` },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: "preconnect", href: "https://fonts.googleapis.com" },
      // { rel: "preconnect", href: "https://fonts.gstatic.com" },
      // { href: "https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap", rel: "stylesheet" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/toast',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: 'https://api.firansefood.com/api'
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
    meta: {
      title: "Send Food To Your Loved Once | FiranseFood"
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      // dark: true,
      themes: {
        light: {
          primary: '#FFA800',
        }
      }
    }
  },
  toast: {
    position: 'top-right',
    duration: 3000,
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  env: {
    MAP_API_KEY: "AIzaSyAkRCYqN9HQnj0Z5OIzCQ3E4sirgP246aw",
    FLUTTER_WAVE_SECRETE_KEY: "FLWSECK_TEST-de54ccfe7881e43fd9a90568b3d3ce87-X",
    BASE_URL: 'https://api.firansefood.com/api',
    MEDIUM_API: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nobertokoye',
  },
  server: {
    port: process.env.PORT || 3000,
    host: "0.0.0.0",
    timing: false
  }
}
