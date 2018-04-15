import Vue from 'vue'
import App from './App'
// import '../static/css/weui.css'
var Fly = require("flyio/dist/npm/wx")
Vue.config.productionTip = false
App.mpType = 'app'
var fly = new Fly
Vue.prototype.$http = fly
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: 'pages/index/main',
        iconPath: 'static/images/home.png',
        selectedIconPath: 'static/images/home-actived.png',
        text: '首页'
      }, {
        pagePath: 'pages/counter/main',
        iconPath: 'static/images/note.png',
        selectedIconPath: 'static/images/note-actived.png',
        text: '日志'
      }]
    },
    networkTimeout: {
      request: 10000,
      downloadFile: 10000
    },
    debug: true
  }
}
