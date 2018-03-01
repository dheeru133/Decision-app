/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-02-28 21:52:44 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-01 03:06:46
 */

//Entry Point && Output Final bundle file- where to put
const path = require('path');
const actualPath = path.join(__dirname, 'public');

//Module Exports to webpack for bundling
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: actualPath
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: [/node_modules/, /.vscode/]
      },
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.s?css$/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: actualPath
  },
  performance: { hints: false }
};
