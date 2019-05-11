// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Home from '@/views/common/Home'
import router from './router'
import '@/assets/css/index.css'

Vue.config.productionTip = false
import '@/element-ui'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Home },
  template: '<Home/>'
})
