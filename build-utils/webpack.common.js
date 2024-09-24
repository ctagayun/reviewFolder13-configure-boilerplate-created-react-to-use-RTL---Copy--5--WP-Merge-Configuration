const path = require('path'); //added
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'), //added
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hello Webpack bundled JavaScript Project',
      template: path.resolve(__dirname, '..', './src/index.html'), //added
    })
  ],
  output: {
    path: path.resolve(__dirname, '..', './dist'), //added
    filename: 'bundle.js'
  },
  devServer: {
    static: path.resolve(__dirname, '..', './dist'), //added
  },
};

//  Note that some file paths have changed in contrast to the previous Webpack 
//configuration, because we have this file in a dedicated folder now. Also 
//note that there are no Webpack modes and no source maps anymore
// These two options will become environment (e.g. development, production) 
//specific in their dedicated Webpack configuration files.