// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
//全局样式插件
import 'mint-ui/lib/style.css'
import '@/styles/normalize.css'
// import '@/styles/index.css'
//自定义插件plugin
import Plugin from './plugin'
import '@/plugin/flexible/flexible.js'
Vue.use(Plugin)
Vue.use(Mint);
//兼容性问题
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
