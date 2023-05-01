const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'index.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][hash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|ttf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      //favicon: './src/favicon.ico',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
};

module.exports = baseConfig;
