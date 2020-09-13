const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = (target) => ({
  mode: 'development',
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
    ],
  },
  plugins: [
    new LoadablePlugin({
      writeToDisk: true,
      filename: `loadable-stats-${target}.json`,
    })
  ],
})
