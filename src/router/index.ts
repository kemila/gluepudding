/*
 * @Description: 
 * @Author: zhengqi
 * @Date: 2022-01-27 15:49:00
 * @LastEditTime: 2022-02-08 14:25:51
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/view',
    name: 'View',
    component: () => import(/* webpackChunkName: "about" */ '../views/View2.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
