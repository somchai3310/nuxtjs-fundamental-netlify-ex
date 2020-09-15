
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content',
    '@nuxtjs/axios',
    '@nuxtjs/auth',

  ],
  content: {},
  axios: {
    // baseURL: 'http://178.128.211.51:3004/image',
    // baseURL: 'https://picsum.photos',
    baseURL: 'http://localhost:12345/api',
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            method: 'post',
            url: 'login',
            propertyName: 'token'
          },
          user: {
            method: 'get',
            url: 'me',
            propertyName: 'user'
          },
          logout: false,
        }
      },
    },
    facebook: {
      endpoints: {
        userInfo: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday'
      },
      clientId: '608474356725313',
      scope: ['public_profile', 'email', 'user_birthday']
    },
    redirect: {
      login: '/login'
    }
  },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
