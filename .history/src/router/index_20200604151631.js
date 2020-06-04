import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
// routes 是用来配置路由的 
// 基础部分有3个: path: 路径  name: 路由的名字  component: 组件
// /代表根路径  通常是首页
// path name component 都是自己定义的
//  通常情况下 这三个都是一样的(除首页之外)
//  除了首页和公共组件之外  其余的组件都是通过异步加载的方式引入
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/detail',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
