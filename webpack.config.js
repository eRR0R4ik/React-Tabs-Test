'use strict';

const path = require('path');
const pathIndexJsx = path.resolve('./src/index.jsx');
const outputPath = path.resolve(__dirname, './dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintFormatter = require('react-dev-utils/eslintFormatter');


module.exports = {
  mode: 'development',
  entry: [
    pathIndexJsx
  ],
  output: {
    path: outputPath,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, './src')
        ],
        exclude: /node_modules/,
        use: [
          'babel-loader?cacheDirectory',
          {
            options: {
              formatter: EslintFormatter,
              eslintPath: require.resolve('eslint'),
              cache: true
            },
            loader: 'eslint-loader',
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, './src/assets/'),
        use: 'url-loader?limit=10000&name=assets/[name]-[hash].[ext]'
      }
    ],
  },
  devtool: 'source-map',
  stats: 'errors-only',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/assets/index.html'),
      filename: 'index.html',
      path: outputPath
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 8080,
    historyApiFallback: true,
    inline: true,
    open: true,
    host: '0.0.0.0'
  }
}