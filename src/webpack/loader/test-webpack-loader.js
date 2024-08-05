module.exports = function myWebpackLoader(content) {
  console.log("webpackloader 실행됨");
  return content;
};
