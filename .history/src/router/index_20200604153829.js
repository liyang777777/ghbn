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
//  异步加载:  如果我没有访问这个路由  就不会加载这个组件  节约性能
//  配置一个错误页面  所有路径不匹配的时候去加载这个组件(err或者404)
//  一定要配置在所有路径的最后面  是routes这个数组的最后一项
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
    name: 'Detail',
    component: () => import('../views/Detail/detail' )
  },
  {
    path: '*',
    
    component: () => import('../views/Err/err')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
