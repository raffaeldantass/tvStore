const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env', "@babel/preset-react"] }
        }
      },
      {
        test: /\.html$/
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: null
    })
  ],
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.js'
  }
};