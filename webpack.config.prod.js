const merge = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const baseConfig = require('./webpack.config.base')

// css
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

//js
const MinifyPlugin = require('babel-minify-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new OptimizeCSSPlugin(),
    new MiniCSSExtractPlugin({
      filename: '[name]-[contenthash].css'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: 'false',
      reportFilename: 'bundle_sizes.html'
    }),
    new MinifyPlugin()
  ]
})
