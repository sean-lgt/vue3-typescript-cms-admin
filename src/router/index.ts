import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import localCache from '@/utils/cache'
import { LOCAL_CACHE_KEY } from '@/utils/const'

//   createWebHistory,
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () =>
      import(/* webpackChunkName: "main" */ '@/views/main/main.vue')
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

// 全局路由拦截
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache(LOCAL_CACHE_KEY.TOKEN) //登录token
    if (!token) {
      // 没有登录token则返回登录页
      return '/login'
    }
  }
})

export default router
