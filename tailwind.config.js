const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    content: [],
    theme: {
        extend: {
            colors: {
                primary: defaultTheme.colors.blue
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
    purge: {
        content: [
            `components/**/*.{vue,js}`,
            `layouts/**/*.vue`,
            `pages/**/*.vue`,
            `plugins/**/*.{js,ts}`,
            `nuxt.config.{js,ts}`
        ]
    }
}