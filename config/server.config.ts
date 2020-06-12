const path = require('path');

const PORT = '3000';
const HOST = 'http://localhost';

const isProduction = process.env.NODE_ENV;

module.exports = {
  entry: [path.resolve(__dirname, '../src/index.ts')],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'server.js',
  },
};
