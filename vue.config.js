const ansiRegx = require('ansi-regex')
module.exports = {
  configureWebpack: {
    entry: ['babel-polyfill', './src/main.js']
  },
  transpileDependencies: [ansiRegx, 'LazyLoad', 'vuetify']
}
