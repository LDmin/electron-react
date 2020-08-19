/**
 * electron web端编译配置
 */
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const pathResolve = (dir = '') => path.join(__dirname, dir) // 指向 src/main

module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  target: 'electron-main',
  entry: {
    'index': pathResolve('./index.ts'),
    'preload': pathResolve('./preload.ts'),
  },
  output: {
    path: pathResolve('./dist'),
    filename: '[name].bundle.js',
  },
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node-modules/
    }, {
      test: /\.ts$/,
      use: [{
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          configFile: '../../tsconfig.json'
        }
      }, ],
      exclude: /node_modules/,
    }]
  },
  plugins: [
    new CopyWebpackPlugin([{
      context: pathResolve('./public'),
      from: '*',
      to: 'assets'
    }]),
  ]
};