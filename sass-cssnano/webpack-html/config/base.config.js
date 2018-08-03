const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: './js/index.js'
  },
  plugins: [
    new MiniCssExtractPlugin,
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader' },
          {
            /* for ~slick-carousel/slick/slick-theme.scss */
            loader: 'resolve-url-loader' },
          {
            /* for resolve-url-loader:
                source maps must be enabled on any preceding loader */
            loader: 'sass-loader?sourceMap' }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      { /* for ~slick-carousel/slick/slick-theme.scss */
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      }
    ]
  }
}
