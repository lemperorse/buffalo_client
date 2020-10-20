import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BaseRoot from '../views/root/Base';

import BaseUser from '../views/user/Base';
import { userRouter } from './user'
import BaseAdmin from '../views/admin/Base';
import { adminRouter } from './admin'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: BaseRoot,
    children: [
      {
        path: '/',
        name: 'login',
        component: () => import('@/views/root/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/views/root/Register.vue')
      },
      {
        path: '/forgotpassword',
        name: 'forgotpassword',
        component: () => import('@/views/root/Forgotpassword.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/root/Contact.vue')
      },
      {
        path: '/logout',
        name: 'logout',
        component: () => import('@/views/root/Logout.vue')
      }
    ]
  },
  {
    path: "/user/",
    component: BaseUser,
    children: userRouter
  },
  {
    path: "/admin/",
    component: BaseAdmin,
    children: adminRouter
  },

]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
