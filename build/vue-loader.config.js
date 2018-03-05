const { cssLoaders } = require('./utils')

module.exports = {
  loaders: cssLoaders({ extract: process.env.NODE_ENV === 'production' }),
  preserveWhitespace: false,
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    })
  ]
}
