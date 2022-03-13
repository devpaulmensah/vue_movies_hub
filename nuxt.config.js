import tailwindTypography from '@tailwindcss/typography'

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'VueMoviesHub',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'title', content: 'Vue Movies Hub' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { property: 'og:site_name', content: 'Vue Movies Hub' },
            { name: 'description', content: '_template_description_' },
            { property: 'og:type', content: '_template_og_type_' },
            { property: 'og:title', content: '_template_title' },
            { property: 'og:description', content: '_template_og_description_' },
            { property: 'og:image', content: '_template_og_image_' }
        ],
        link: [
            { rel: 'icon shortcut', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
        ],
        script: []
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/main.css'
    ],

    js: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/moment',
        '@nuxt/image'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/dotenv'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: 'https://localhost:44349/api/v1',
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    tailwindcss: {
        config: {
            plugins: [tailwindTypography]
        }
    },

    env: {
        MOVIES_BASE_URL: 'https://api.themoviedb.org/3',
        API_KEY: '06e0613074567b1b8a49b5c66165b5bb'
    },

    publicRuntimeConfig: {
        moviesBaseUrl: 'https://api.themoviedb.org/3',
        apiKey: '06e0613074567b1b8a49b5c66165b5bb'
    },
    privateRuntimeConfig: {
        apiKey: '06e0613074567b1b8a49b5c66165b5bb'
    },

    image: {
        domains: ['http://image.tmdb.org', 'https://res.cloudinary.com']
    }
}