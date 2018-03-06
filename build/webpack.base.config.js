const path = require('path')
const webpack = require('webpack')
const { styleLoaders } = require('./utils')
const vueConfig = require('./vue-loader.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

const moduleRules = [
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: vueConfig
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  },
  {
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: '[name].[ext]?[hash]'
    }
  },
  {
    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=10000&mimetype=application/font-woff&prefix=fonts'
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader:
      'url-loader?limit=10000&mimetype=application/octet-stream&prefix=fonts'
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader:
      'url-loader?limit=10000&mimetype=application/vnd.ms-fontobject&prefix=fonts'
  }
]

module.exports = {
  devtool: isProd ? false : '#cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      public: path.resolve(__dirname, '../public'),
      '@api': path.resolve(__dirname, '../src/client/api'),
      '@store': path.resolve(__dirname, '../src/client/store')
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: moduleRules.concat(
      styleLoaders({ sourceMap: !isProd, extract: isProd })
    )
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins: isProd
    ? [
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new ExtractTextPlugin({
          filename: 'common.[chunkhash].css'
        })
      ]
    : [new FriendlyErrorsPlugin()]
}
