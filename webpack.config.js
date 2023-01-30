const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "cheap-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  devServer: {
    static: "./build/",
    historyApiFallback: true,
    hot: true,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      title: "dynamic-loading",
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: "disabled",
    }),
  ],
};
