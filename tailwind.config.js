module.exports = {
  mode: 'jit',
  content: [
    './src/components/**/*.jsx',
    './src/pages/**/*.jsx'
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
