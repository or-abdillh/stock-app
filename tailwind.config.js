// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx'
  ],
  theme: {},
  variants: {
     extend: {
      backgroundColor: ['active'],
      opacity: ['active']
    }
  },
  plugins: [],
}