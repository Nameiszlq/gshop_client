const path = require('path')

function resolve(dir) {
  // return path.join(__dirname, '..', dir)
  return path.join(__dirname, dir)
}

module.exports = {
  // 添加webpack的配置
  configureWebpack: {
    resolve: {
      alias: { // 别名
        'vue$': 'vue/dist/vue.esm.js', // 使用vue库带编译器的es版本
        'components': resolve('src/components'),
      }
    }
  },
  // 代理配置
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',//服务器地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', // 去掉path前面的/api
        },
      },
      '/sp': {
        target: 'https://m.you.163.com',
        changeOrigin: true,
        pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
          '^/sp': ''
        }
      }
    }
  },
  // devServer: {
  //   host: '10.10.30.167', // 原为: hotst: 'localhost' 这是在手机上调试用的
  //   },
  chainWebpack: (config) => {
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      // 这是rem适配的配置  注意： remUnit在这里要根据lib-flexible的规则来配制，如果您的设计稿是750px的，用75就刚刚好。
      .options({
        remUnit: 75
      })
  },
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 75, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            // propBlackList: [], //黑名单
            exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            // selectorBlackList: [], //要忽略并保留为px的选择器
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
          }),
        ]
      }
    }
  }
}