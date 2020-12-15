const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: ['./src/index.js'],
    watch: true,
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin()
    ]
  };
  
  