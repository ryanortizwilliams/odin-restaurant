//path
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        //add css rules
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ico|png|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "images/logo.png",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      favicon: "images/logo.png",
    }),
  ],
};
