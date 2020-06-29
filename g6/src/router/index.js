import Vue from 'vue'
import Router from 'vue-router'
import demoSingle from '@/components/demoSingle.vue'
import demoMore from '@/components/demoMore.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demoSingle',
      name: 'demoSingle',
      component: demoSingle
    },
    {
      path: '/',
      name: 'demoMore',
      component: demoMore
    },
  ]
})
