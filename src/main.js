import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './route/index'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(ElementUI);
Vue.use(mavonEditor)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
