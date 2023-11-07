//path
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

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
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/tab1.html", to: "tab1.html" },
        { from: "src/tab2.html", to: "tab2.html" },
        { from: "src/tab3.html", to: "tab3.html" },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "images",
          to: "images",
        },
      ],
    }),
  ],
};
