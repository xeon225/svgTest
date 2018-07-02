import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ScaleLinear_1 from '@/components/ScaleLinear_1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ScaleLinear_1',
      name: 'ScaleLinear_1',
      component: ScaleLinear_1
    }
  ]
})
