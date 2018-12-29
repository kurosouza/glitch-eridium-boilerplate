const path = require("path");

const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: './index.html'
})

const port = process.env.PORT;

const baseConfig = {
  devServer: {
    port: 8567,
    contentBase: path.resolve('./public'),
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: `http://localhost:${port}`,
        secure: false
      }
    },
  },
  resolve: {
    extensions: ['.js','.json']
  },
  entry: {
    main: "./app/index.js"
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve('./public'),
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  
  module: {
    rules: [      
      /*
      {
        test: /\.css$/, 
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      */

      {
        test: /\.css$/,
        loader:["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-2']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
            'file-loader',            
            {
              loader: 'image-webpack-loader',
              options: {
                disable: true,
              },
            },          
        ]
      }
    ]
  },
  plugins: [
   // new ExtractTextPlugin({filename: "style.css", allChunks: true}),
    htmlWebpackPlugin
  ]
}

const env = process.env || 'development';

if(env !== 'production') {
  baseConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = baseConfig;