import Vue from 'vue'
import Router from 'vue-router'
import routerApi from 'public/js/router-api'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: routerApi.login, component: (resolve) => require(['@/views/login.vue'], resolve) },
      { path: routerApi.userinfo, component: (resolve) => require(['@/views/userinfo.vue'], resolve) },
      { path: routerApi.index, component: (resolve) => require(['@/views/index.vue'], resolve) },
      { path: '/', redirect: routerApi.index }
    ]
  })
}
