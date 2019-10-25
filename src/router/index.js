import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import List from '.@/components/List'
// import Header from '.@/components/Header'
// import Command from '@./components/Command'
// import Shop from '.@/components/Shop'

//路由懒加载
const Home = () => import('@/components/Home')
const List = () => import('@/components/List')

const Command = () => import('@/components/Command')
const Shop = () => import('@/components/Shop')
const single = () => import('@/components/single')
const Login = () => import('@/components/Login')
const NotFound = () => import('@/components/NotFound')
const select1 = () => import('@/components/ChildrenCommand/select1')
const select2 = () => import('@/components/ChildrenCommand/select2')
const select3 = () => import('@/components/ChildrenCommand/select3')
const select4 = () => import('@/components/ChildrenCommand/select4')
Vue.use(Router)  





export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },

    {
      path: '/command',
      
      name: 'Command',
      component: Command,
      redirect:"/command/select1",  
      children: [
        {
          path: 'select1',
          component: select1
        },
        {
          path: 'select2',
          component: select2
        },
        {
          path: 'select3',
          component: select3
        },
        {
          path: 'select4',
          component: select4
        },



      ]
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/single/:id',
      name: 'single',
      component: single
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
