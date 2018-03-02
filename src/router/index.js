import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MyMovies from '@/components/MyMovies'

Vue.use(Router);

export default new Router({
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/my-movies',
      name: 'MyMovies',
      component: MyMovies
    }

  ]
})
