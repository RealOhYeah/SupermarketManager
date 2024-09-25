/*
 * @Description: 
 * @Author: Rabbiter
 * @Date: 2023-09-07 20:58:35
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// 获取当前时间戳
const timeStamp = new Date().getTime()

module.exports={
  devServer:{
    host:"localhost",
    // host:"192.168.88.132", 
    port: 9292,
    proxy: {
      "/api": {
        // target: "http://192.168.88.132:9291",
        target: "http://localhost:9291",
        pathRewrite: {
          "^/api": "/",
        },
        // ws:true
      },
    },
  },
  // 打包后的文件输出路径
  outputDir: 'dist',
  configureWebpack: config => {
    Object.assign(config,{
      entry: {
         app: '/src/main.js'
      },
      // 输出重构 打包编译后的js文件名称，添加时间戳
      output: {
        ...config.output,
        filename: `js/[name].[hash].${timeStamp}.js`,
        chunkFilename: `js/[name].[hash].${timeStamp}.js`,
      }
    });
  },
  css: {
    // 输出重构 打包编译后的css文件名称，添加时间戳
    extract: {
      filename: `css/[name].[hash].${timeStamp}.css`,
      chunkFilename: `css/[name].[hash].${timeStamp}.css`,
    }
  }
 
}

