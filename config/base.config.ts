const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const isProduction = process.env.NODE_ENV;

module.exports = {
  mode: isProduction ? 'production' : 'development',
  node: {
    __filename: true,
    __dirname: true,
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: ['node_modules', 'src', 'package.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      data: path.resolve(__dirname, '../data'),
    },
  },
  plugins: [new NodemonPlugin()],
};
