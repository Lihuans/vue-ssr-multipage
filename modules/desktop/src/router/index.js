import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/logins', component: (resolve) => require(['@/views/login.vue'], resolve) },
      { path: '/userinfos', component: (resolve) => require(['@/views/userinfo.vue'], resolve) },
      { path: '/index', component: (resolve) => require(['@/views/index.vue'], resolve) },
      { path: '/', redirect: '/index' }
    ]
  })
}
