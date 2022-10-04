/**
 * Created by Tomasz Gabrysiak @ Infermedica on 02/02/2017.
 */

const path = require('path');

const Dotenv = require('dotenv-webpack');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  plugins: [
    new Dotenv({
      systemvars: true
    })
  ],
  devServer: {
    allowedHosts: 'auto',
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        query: {
          plugins: ['@babel/transform-runtime'],
          presets: ['@babel/preset-env']
        }
      }, {
        test: /\.css$/,
        use: ['style-loader', {loader: 'css-loader'}]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff&name=[path][name].[ext]',
        options: {
            name: "[name].[ext]",
            outputPath: "fonts/", 
            publicPath: "../fonts/"
            }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=[path][name].[ext]',
        options: {
            name: "[name].[ext]",
            outputPath: "fonts/", 
            publicPath: "../fonts/"
            }
      }
      }
    ]
  }
};
