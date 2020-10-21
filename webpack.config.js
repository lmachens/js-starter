const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist", "static"),
    publicPath: "/static",
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: path.resolve(__dirname, "dist", "index.html"),
    }),
  ],
};
