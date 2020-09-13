const path = require('path');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  entry: path.resolve(__dirname, '../src/client/index.jsx'),
  output: {
    filename: "client.js",
    path: path.resolve(__dirname, '../dist/web'),
  },
}


module.exports = merge(baseConfig('client'), config)
