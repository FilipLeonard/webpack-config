const path = require('path');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// const mode =
//   process.env.NODE_ENV === 'production' ? process.env.NODE_ENV : 'development';

// // fixes browserslist live reloading bug
// const target = process.env.NODE_ENV === 'production' ? 'browserslist' : 'web';

let mode = 'development';
let target = 'web';
const plugins = [
  // removes output path before every build
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
];

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
} else {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode,
  target,

  // react fast refresh setup needs this
  entry: './src/index.js',

  output: {
    // not necessary but clean-webpack-plugin uses this
    path: path.resolve(__dirname, 'dist'),
    // any asset that comes out goes into this folder having this naming
    assetModuleFilename: 'images/[hash][ext][query]',
  },

  plugins,

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
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
            },
          },
          // MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        // outputs all the files
        // type: 'asset/resource',
        // inline assets into js, in base64 format
        // type: 'asset/inline',
        // webpack decides whether inline or output into folder, based on image size (default max size is 8kb)
        type: 'asset',
        // overwrite the default size
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024,
        //   },
        // },
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
