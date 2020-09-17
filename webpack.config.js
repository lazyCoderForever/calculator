const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  module: {
    rules: [{ 
    test: /\.tss?$/,
    exclude: /node_modules/,
    loaders: ['babel-loader'],
    //loaders: ['babel-loader','eslint-loader'],
    exclude: [path.resolve(__dirname, 'node_modules')]
  },
  {
    test: /\.js?$/,
    exclude: /node_modules/,
    loaders: ['eslint-loader'],
    exclude: [path.resolve(__dirname, 'node_modules')]
  },
  {
    test: /\.css?$/,
    use: ['style-loader', 'css-loader']
  },
  {
    test: /\.(ttf|woff|eot)/,
    loader: 'file-loader',
    options: {
      outputPath: 'fonts',
    }
  },
]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
