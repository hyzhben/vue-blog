import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/login'
import Register from '../components/register/register'
import SignIn from '../components/singIn/signIn'
import Main from '../components/main/main'
Vue.use(Router)

export  default new Router({
  routes : [
    {
      path:'/',
      redirect:'/signIn/login',
    },
    {
      path:'/signIn',
      component:SignIn,
      children:[
        {
          path:'/signIn/login',
          component:Login,
        },
        {
          path:'/signIn/register',
          component:Register,
        }
      ]
    },
    {
      path:'/main',
      component:Main,
    }
  ]

})
