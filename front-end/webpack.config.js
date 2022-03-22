const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

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
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        },
        {
          test: /\.png/,
          type: 'asset/resource',
        },
        {
          test: /\.jpg/,
          type: 'asset/resource',
        },
        {
          test: /\.svg/,
          type: 'asset/resource',
        },
        {
          test: /\.txt/,
          type: 'asset/source',
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
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
