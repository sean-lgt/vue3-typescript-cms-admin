import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
//   createWebHistory,
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
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

export default router
