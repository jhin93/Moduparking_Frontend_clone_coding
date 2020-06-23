const ansiRegex = require('ansi-regex')
module.exports = {
  lintOnSave: false,
  publicPath: 'dist/',
  assetsDir: process.env.BASE_URL,
  transpileDependencies: [ansiRegex]
}
