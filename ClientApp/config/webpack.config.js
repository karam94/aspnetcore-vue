const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const bundleOutputDir = '../../wwwroot/dist'
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = () => {
  console.log('Building for \x1b[33m%s\x1b[0m', process.env.NODE_ENV)

  const isDevBuild = !(process.env.NODE_ENV && process.env.NODE_ENV === 'production')
  console.log('isDevBuild? ' + isDevBuild)
  const extractCSS = new MiniCssExtractPlugin({
    filename: 'site.css'
  })

  return [{
    mode: (isDevBuild ? 'development' : 'production'),
    stats: { modules: false },
    entry: { 'main': './ClientApp/boot-app.js' },
    resolve: {
      extensions: ['.js', '.vue'],
      alias: isDevBuild ? {
        'vue$': 'vue/dist/vue',
        'components': path.resolve(__dirname, '../components'),
        'views': path.resolve(__dirname, '../views'),
        'utils': path.resolve(__dirname, '../utils'),
        'api': path.resolve(__dirname, '../store/api')
      } : {
        'components': path.resolve(__dirname, '../components'),
        'views': path.resolve(__dirname, '../views'),
        'utils': path.resolve(__dirname, '../utils'),
        'api': path.resolve(__dirname, '../store/api')
      }
    },
    output: {
      path: path.join(__dirname, bundleOutputDir),
      filename: '[name].js',
      publicPath: '/dist/'
    },
    module: {
      rules: [
        { test: /\.vue$/, include: [path.resolve(__dirname, '../')], use: 'vue-loader' },
        { test: /\.js$/, include: [path.resolve(__dirname, '../')], use: 'babel-loader' },
        { test: /\.css$/, use: isDevBuild ? ['style-loader', 'css-loader'] : [MiniCssExtractPlugin.loader, 'css-loader'] },
        { test: /\.(scss|sass)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('../../wwwroot/dist/vendor-manifest.json')
      })
    ].concat(isDevBuild ? [
      // Plugins that apply in development builds only
      new webpack.SourceMapDevToolPlugin({
        filename: '[file].map', // Remove this line if you prefer inline source maps
        moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
      })
    ] : [
      // Plugins that apply in production builds only
      extractCSS,
      // Compress extracted CSS.
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true
        }
      })
    ])
  }]
}
