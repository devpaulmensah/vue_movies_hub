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
            { hid: 'description', name: 'description', content: 'Get access to top-rated, popular and upcoming movies and watch trailers and many more. All for free!' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'title', content: 'Movies Hub' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { property: 'og:site_name', content: 'Movies Hub' },
            { name: 'description', content: 'Get access to top-rated, popular and upcoming movies and watch trailers and many more. All for free!' },
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: 'Movies Hub' },
            { property: 'og:description', content: 'Get access to top-rated, popular and upcoming movies and watch trailers and many more. All for free!' },
            // { property: 'og:image', content: '_template_og_image_' }
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
        '@nuxtjs/dotenv',
        '@nuxtjs/auth-next'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: 'https://localhost:44349/api/v1',
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
    },

    auth: {
        redirect: {
            login: "/sign-in",
            logout: "/",
            callback: "/",
            home: '/profile'
        },
        strategies: {
            local: {
                token: {
                    property: "token",
                    global: true,
                    required: true,
                    type: "Bearer"
                },
                user: {
                    property: "data",
                    autoFetch: true
                },
                endpoints: {
                    logout: { url: '/', method: 'get' },
                    user: { url: "/user/profile/", method: "get" }
                }
            }
        }
    },

    pwa: {
        manifest: {
            lang: 'en',
            name: 'Movies Hub',
            short_name: 'Movies Hub'
        },
        meta: {
            name: 'Movies Hub',
            author: 'Paul Mensah'
        },
        icon: {
            sizes: [512]
        }
    },
}