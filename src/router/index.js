import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BaseRoot from '../views/root/Base';

import BaseUser from '../views/user/Base';
import {userRouter}from './user'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: BaseRoot,
    children: [ {
      path: '/',
      name: 'aaa', 
      component: () => import('@/views/About.vue')
    }]
  },
  {
    path: "/user/",
    component: BaseUser,
    children: userRouter
  },
   
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
