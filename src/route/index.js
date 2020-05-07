import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/login'
import Register from '../components/register/register'
import SignIn from '../components/singIn/signIn'
import BlogMain from '../components/blog-main/blog-main'
import BlogHome from '../components/blog-home/blog-home'
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
      children: [
        {
          path:'/main/home',
          component:BlogHome
        }
      ],
    }
  ]

})
