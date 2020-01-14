const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = () => {
  console.log('Building vendor files for \x1b[33m%s\x1b[0m', process.env.NODE_ENV)

  const isDevBuild = !(process.env.NODE_ENV && process.env.NODE_ENV === 'production')
  const extractCSS = new MiniCssExtractPlugin({
    filename: 'vendor.css'
  })

  return [{
    mode: (isDevBuild ? 'development' : 'production'),
    stats: { modules: false },
    resolve: {
      extensions: ['.js']
    },
    module: {
      rules: [
        { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000' },
        { test: /\.css(\?|$)/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
        { test: /\.(scss|sass)$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
      ]
    },
    entry: {
      vendor: ['bulma/bulma.sass', 'event-source-polyfill', 'vue', 'vuex', 'axios', 'vue-router']
    },
    output: {
      path: path.join(__dirname, '../../wwwroot', 'dist'),
      publicPath: '../../dist/',
      filename: '[name].js',
      library: '[name]_[hash]'
    },
    plugins: [
      extractCSS,
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true
        }
      }),
      new webpack.ProvidePlugin({
        // $: 'jquery',
        // jQuery: 'jquery',
      }),
      new webpack.DllPlugin({
        path: path.join(__dirname, '../../wwwroot', 'dist', '[name]-manifest.json'),
        name: '[name]_[hash]'
      })
    ]
  }]
}
