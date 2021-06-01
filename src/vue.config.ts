/*
 * @Description:
 * @Author: rongcheng
 * @@后台人员: xxx
 * @Date: 2021-05-25 17:22:18
 * @LastEditors: rongcheng
 * @LastEditTime: 2021-05-25 17:25:22
 */
const path = require("path");

function resolve(dir: String) {
  return path.join(__dirname, dir);
}
module.exports = {
  outputDir: "project", // 打包名字
  plicePath: process.env.NODE_ENV === "prodution" ? "/" : "/",
  devServer: {
    port: 9000
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        "@": resolve("src"),
        "@c": resolve("src/components"), // 组件目录
        "@u": resolve("src/utils") // 工具函数
      }
    }
  }
};
