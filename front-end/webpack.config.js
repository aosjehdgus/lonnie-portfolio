const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = env => {
  const { DEV } = env;
  console.log('DEV : >>', DEV);

  if (DEV) {
    dotenv.config({ path: './dev.env' });
  } else {
    dotenv.config({ path: './.env' });
  }
  console.log('process.env.PUBLIC_URL : >> ', process.env.PUBLIC_URL);

  return {
    entry: {
      index: './src/index.js',
    },
    resolve: {
      extensions: ['.mjs', '.js', '.jsx', '.css'],
      // modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      // alias: {
      //   '@': path.resolve(__dirname, 'src'),
      // },
    },
    devtool: 'eval-cheap-source-map',
    devServer: {
      port: 8080,
      proxy: {
        '/api': {
          target: 'http://localhost:3030',
          changeOrigin: true,
          pathRewrite: { '^/api': '' },
        },
      },
      hot: true,
      open: true,
      compress: true,
      historyApiFallback: true,
      client: {
        progress: true,
        overlay: true,
      },
      static: {
        publicPath: '/dist/',
      },
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'images/[hash][ext][query]',
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // 콘솔 로그를 제거한다
            },
          },
        }),
      ],
      splitChunks: {
        chunks: 'all',
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: '/node_modules/',
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        /* 뒤에서부터 실행되므로, css-loader로 처리한 뒤 그 결과물을 style-loader로 한번 더 처리한다. */
        {
          test: /\.svg/,
          type: 'asset/resource',
        },
        {
          test: /\.txt/,
          type: 'asset/source',
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './asset/lp.png',
      }),
      new BundleAnalyzerPlugin(),
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }),
      new webpack.DefinePlugin({
        'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL),
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ],
  };
};
