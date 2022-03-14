const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    port: 8080,
    proxy: {
      'api/': {
        target: 'http://localhost:3030',
        changeOrigin: true,
        // pathRewrite: { '^/api': '' },
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
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
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
  ],
};
