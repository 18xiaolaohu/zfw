const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '租房网'
        return args
      })
  },
  // vant 主体定制
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${path.join(__dirname, 'src/styles/theme.less')}";`
          }
        }
      }
    }
  }
})
