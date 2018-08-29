const merge = require('webpack-merge');
const base = require('./base.config');
const webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    contentBase: 'public/',
    port: '8000',
    historyApiFallback: true,
    hot: true,
    open: true
  },
  watch:true,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({openAnalyzer: false})
  ]
});