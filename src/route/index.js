import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/login'
import Register from '../components/register/register'
import SignIn from '../components/singIn/signIn'
import BlogMain from '../components/blog-main/blog-main'
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
      component:BlogMain,
    }
  ]

})
