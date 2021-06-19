const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode =
  process.env.NODE_ENV === 'production' ? process.env.NODE_ENV : 'development';

// fixes browserslist live reloading bug
const target = process.env.NODE_ENV === 'production' ? 'browserslist' : 'web';

module.exports = {
  mode,
  target,

  plugins: [new MiniCssExtractPlugin()],

  module: {
    rules: [
      {
        // babel is already setup to handle jsx so we just need to add the optional "x"
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.(s[ac]|c)ss$/i,
        // Webpack reads&processes right-to-left from arrays
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  resolve: {
    // when you import something, you can omit these extensions
    extensions: ['.js', '.jsx'],
  },

  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
