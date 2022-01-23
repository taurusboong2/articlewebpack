const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'none',
  entry: ['./src/article.js', './src/article_create.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: MiniCssExtractPlugin.loader}, 
          'css-loader'
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
};