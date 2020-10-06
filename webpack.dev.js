const path = require("path")
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "."),
  entry: {
    "dart-sass-test": ["./src/js/index.js", "./src/sass/index.scss"]
  },
  module: {
    rules: [{
        test: /.(js|jsx)$/,
        exclude: /(node_modules|bower_components|html)/,
        use: [{
          loader: "babel-loader"
        }]
      },
      {
        test: /.(sa|sc|c)ss$/,
        include: path.resolve(__dirname, "src/sass"),
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/html/index.ejs")
    })
  ],
  output: {
    filename: "js/[name].js"
  },
  mode: "development",
  devServer: {
    contentBase: "./",
    hot: true,
    clientLogLevel: "none",
    writeToDisk: true,
    port: 3000
  },
  devtool: "source-map"
}