import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const _import = require('./import-' + process.env.NODE_ENV)

const globalRoutes = [
  {
    path: '/404',
    component: _import('common/404'),
    name: '404',
    meta: {
      title: '404未找到'
    }
  }, {
    path: '/login',
    component: _import('common/login'),
    name: 'login',
    meta: {
      title: '登录'
    }
  }]

// 主入口路由(需嵌套上左右整体布局)
const mainRoutes = [{
  path: '/home',
  name: 'home',
  component: _import('common/home'),
  meta: {
    title: '首页'
  }
}]

const router = new Router({
  mode: 'history',
  routes: globalRoutes.concat(mainRoutes)
})


export default router


// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'App',
//       component: App
//     }
//   ]
// })
