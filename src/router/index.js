import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')// 首页
const Seek = () => import('@/views/Seek')// 找房
const Counsel = () => import('@/views/Counsel')// 咨询
const My = () => import('@/views/My')// 我的
const Login = () => import('@/views/Login')// 登录

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: Home },
      { path: 'seek', component: Seek },
      { path: 'counsel', component: Counsel },
      { path: 'my', component: My, name: 'my' }
    ]
  },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

export default router
