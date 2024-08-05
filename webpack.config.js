// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require("path");
const Webpack = require("webpack");

const banner = `빌드 날짜: ${new Date().toLocaleString()}`;

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new Webpack.BannerPlugin({ banner })],
  module: {
    rules: [
      {
        test: /\.js$/, // .js 확장자로 끝나는 모든 파일
        use: [path.resolve("./src/webpack/loader/test-webpack-loader")], // 방금 만든 로더를 적용한다
      },
    ],
  },
  devtool: "inline-source-map",
};
