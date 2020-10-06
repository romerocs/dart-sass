const path = require("path")
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserJSPlugin = require("terser-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
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
              sourceMap: false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: false
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: false
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
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        map: {
          inline: true
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/html/index.ejs")
    })
  ],
  output: {
    filename: "js/[name].js"
  },
  mode: "production",
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})]
  },
  performance: {
    hints: "warning"
  }
}