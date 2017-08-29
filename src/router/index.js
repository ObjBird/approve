import Vue from 'vue'
import Router from 'vue-router'
import approve from '../components/approve/approve'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'approve',
      component: approve
    }
  ]
})
