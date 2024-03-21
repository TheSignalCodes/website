const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

ENTRY_PATH = path.resolve(__dirname, "src/index");
DIST_PATH = path.resolve(__dirname, "dist");
PUBLIC_PATH = path.resolve(__dirname, "public");

module.exports = {
  mode: "development",
  entry: {
    main: ENTRY_PATH,
  },
  output: {
    path: DIST_PATH,
    filename: "[name].[contenthash].js",
    assetModuleFilename: "[name]-[contenthash][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|svg|ico|webp|gif|otf)$/,
        type: "asset/resource",
      },
      { test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new CopyPlugin({
      patterns: [{ from: PUBLIC_PATH, to: DIST_PATH }],
    }),
  ],
  devtool: "source-map",
  devServer: {
    watchFiles: ["./src/*"],
    static: DIST_PATH,
    compress: true,
    hot: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
