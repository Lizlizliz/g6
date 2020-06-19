import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import vueLife from '@/components/vue-life';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/vueLife',
      name: 'vuelife',
      component: vueLife
    }
  ]
})
