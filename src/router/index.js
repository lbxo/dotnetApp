import Vue from 'vue'
import Router from 'vue-router'
import SopList from '@/components/SopList'
import CreateSop from '@/components/CreateSop'
import ShowSop from '@/components/ShowSop'
import EditSop from '@/components/EditSop'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SopList',
      component: SopList
    },
    {
      path: '/add-book',
      name: 'CreateSop',
      component: CreateSop
    },
    {
      path: '/show-book/:id',
      name: 'ShowSop',
      component: ShowSop
    },
    {
      path: '/edit-book/:id',
      name: 'EditSop',
      component: EditSop
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})