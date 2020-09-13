const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { getStyleLoaders } = require('./utils');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

module.exports = (target) => ({
  mode: 'development',
  output: {
    publicPath: `http://localhost:3000/`,
    // publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ],
              plugins: [
                '@loadable/babel-plugin',
              ],
            },
          },
        ],
      },
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: getStyleLoaders({
          importLoaders: 1,
          sourceMap: false,
        }),
      },
      {
        test: cssModuleRegex,
        use: getStyleLoaders( {
          importLoaders: 1,
          sourceMap: false,
          modules: {
            localIdentName: '[path][name]__[local]',
          },
        }),
      },
      {
        test: lessRegex,
        exclude: lessModuleRegex,
        use: getStyleLoaders(
            {
              importLoaders: 2,
              sourceMap: false,
            },
            'less-loader',
            {
              // javascriptEnabled: true,
            },
        ),
      },
      {
        test: lessModuleRegex,
        use: getStyleLoaders(
            {
              importLoaders: 2,
              sourceMap: false,
              modules: {
                localIdentName: '[path][name]__[local]',
              },
            },
            'less-loader',
        ),
      },
    ],
  },
  plugins: [
    new LoadablePlugin({
      writeToDisk: true,
      filename: `loadable-stats-${target}.json`,
    }),
    new MiniCssExtractPlugin({
      filename: target === 'server' ? 'node/css/[name].[contenthash:8].css' : 'css/[name].[contenthash:8].css',
      chunkFilename: target === 'server' ? 'node/css/[name].[contenthash:8].chunk.css' : 'css/[name].[contenthash:8].chunk.css',
      // ignoreOrder: true,
    }),
  ],
})
