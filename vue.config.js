const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // 添加 publicPath 配置项
  publicPath: '/buyaozaikemiaowole/',

  // 如果你使用了 Vue Router 的 history 模式，还可以加上 devServer fallback
  devServer: {
    historyApiFallback: true
  }
})

