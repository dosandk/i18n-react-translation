const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    port: 9001,
    hot: true,
    compress: true,
    publicPath: '/',
    contentBase: path.resolve(__dirname, '../dist'),
    historyApiFallback: true,
    proxy: {
      '/i18n-server': {
        target: `http://localhost:${process.env.I18N_SERVER_PORT}`,
        secure: false,
        pathRewrite: {'^/i18n-server' : ''},
        logLevel: 'debug'
      }
    }
  }
});
