import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/login'
import Register from '../components/register/register'
import Main  from '../components/main/main'

Vue.use(Router)

export  default new Router({
  routes : [
    {
      path:'/',
      redirect:'/login',
    },
    {
      path:'/login',
      component:Login,
    },
    {
      path:'/register',
      component:Register,
    },
    {
      path:'/main',
      component:Main,
    }

  ]

})
