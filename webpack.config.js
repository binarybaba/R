const path = require('path');

const config = {
  context: __dirname,
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  mode: 'development',
  devServer: {
    publicPath: '/public/',
  },
  module: {
    rules: [{
      enforce: 'pre',
      loader: 'eslint-loader',
      test: /\.jsx?$/,
      exclude: '/node_modules',
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader',
    }],
  },
};
module.exports = config;