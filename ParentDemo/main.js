import Vue from 'vue'
import App from './App'
import ajax from './ajax.js'
Vue.use(ajax)

Vue.config.productionTip = false

Vue.prototype.$api = "http://wx.cdlzzh.cn";

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
