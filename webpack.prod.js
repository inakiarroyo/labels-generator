const fs = require('fs');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('./webpack.config.js');

// const nodeModules = fs.readdirSync('node_modules').filter((x) => x !== '.bin');

module.exports = merge(config, {
  mode: 'production',
  devtool: 'source-map',
  // externals: nodeModules,
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { modules: true, sourceMap: true, localIdentName: '[local]_[hash:base64:8]' } },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
});
