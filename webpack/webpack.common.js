const webpack = require('webpack');
const path = require('path');
const jsLoaders = require('./loaders/js-loaders');
const fileLoaders = require('./loaders/file-loaders');
const cssLoaders = require('./loaders/css-loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  entry: [path.join(__dirname, '../src/index.tsx')],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '/src': path.join(__dirname, '../src')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: fileLoaders
      },
      {
        test: /\.(js|jsx|tsx|ts)?$/,
        enforce: 'pre',
        use: jsLoaders,
        exclude: [/(node_modules)/]
      },
      {
        test: /\.scss$/,
        use: cssLoaders,
        exclude: [/(node_modules)/]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('index.html')
    })
  ]
};
