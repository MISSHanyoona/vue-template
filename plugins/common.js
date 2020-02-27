import Vue from 'vue'
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV == 'production') { // 生产环境
    Vue.prototype._toHome = 'http://www.jinrilvsi.com/' // 前台首页
    Vue.prototype._domain = 'jinrilvsi.com'
    // demo.jinrilvsi.com
    
} else if (process.env.NODE_ENV == 'test') { // 测试环境
    Vue.prototype._toHome = 'http://192.168.0.152:8060/' // 前台首页
    Vue.prototype._user = 'http://customer.buyer.benlai58.com'    

} else { // 开发环境
    Vue.prototype._toHome = 'http://localhost:3000/' //前台首页
    Vue.prototype._user = 'http://customer.buyer.benlai58.com'
}
Vue.prototype._customerUrl = 'http://customer.jinrilvsi.com/#/' //工作台
// Vue.prototype._customerUrl = 'http://localhost:8086/#/overview' //工作台
Vue.prototype._userUrl = 'http://user.jinrilvsi.com/#/'  //用户中心
Vue.prototype._yijiUrl = 'http://www.yiji365.com/#/';      //蚁集网前台首页
Vue.prototype._imgBase = 'http://dl.jinrilvsi.com/'
Vue.prototype._ruleUrl = 'http://www.jinrilvsi.com/'//pdf打开地址
