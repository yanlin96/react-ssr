const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.base");
const nodeExternals = require("webpack-node-externals");

const serverConfig = {
  //这个告诉webpack，这个文件是服务器端文件
  target: "node",
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  //这里就不会打包node_modules里的文件了
  externals: [nodeExternals()],
};

module.exports = merge(config, serverConfig);
