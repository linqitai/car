// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8082,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/xywl':{
        // target:'http://192.168.18.220:8061', // 修庆
        // target:'http://192.168.18.218:8061',
        // target:'http://192.168.18.177:8030', // 子涵
        target:'https://wx.chinaxywl.com', // 线上正式
        // target:'http://192.168.18.178:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/xywl': ''
        }
      },
      '/rz_manage':{
        // target:'http://192.168.18.220:8061', // 修庆
        // target:'http://192.168.18.218:8061',
        // target:'http://192.168.18.177:8030', // 子涵
        target:'http://www.zsbigdata.com.cn', // 线上正式
        // target:'http://192.168.18.178:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/rz_manage': '/rz_manage'
        },
      }
    },
    // 114.55.32.138:80 http://fq.51puhui.cn/zyd/m/zzg/home.json
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
