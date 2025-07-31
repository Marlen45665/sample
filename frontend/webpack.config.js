const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (env = {}) => {
  return {
    mode: env.mode ?? 'development',

    entry: path.resolve(__dirname, 'src', 'index.tsx'),

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new webpack.ProgressPlugin(),
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
        },
      ],
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },

    devtool: 'inline-source-map',

    devServer: {
      port: env.port ?? 3000,
      open: true,
      allowedHosts: 'all',
      hot: true,
      historyApiFallback: true,
    },
  };
};
