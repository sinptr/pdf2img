const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// TODO: update config for production

module.exports = {
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['node_modules'],
    alias: {
      src: path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/components'),
      'react-dom': '@hot-loader/react-dom',
    },
  },
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '',
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
    port: 3000,
    progress: true,
    hot: true,
    open: true,
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /.*\.worker\.(js|ts)$/,
        use: { loader: 'worker-loader', options: { name: 'static/workers/[hash].worker.js' } },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
