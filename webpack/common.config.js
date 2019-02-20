// webpack plugins this is a list of rules we want to app to follow
const SplitChunksPlugin = require('webpack/lib/optimize/SplitChunksPlugin');

module.exports = {
  entry: {
    app: ['./src/bootstrap.js'], //  this is telling the application to start by looking at this file
    vendor: './src/vendor.js', //this brings in the polyfils
  },

  resolve: {
    extensions: ['.js', '.scss'], //this is saying the type of files we will allow

    modules: ['node_modules'], //pointing to where our list of dependencies are
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      {
        type: 'javascript/auto',
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          publicPath: '/',
        },
      },

      {
        test: /\.(mp4|webm)$/,
        loader: 'url?limit=10000',
      },
    ],
  },

  plugins: [
    new SplitChunksPlugin({
      name: ['app', 'vendor'],
      minChunks: Infinity,
    }),
  ],
};
