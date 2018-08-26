import Vue from 'vue'
import Router from 'vue-router'
import ConfigManager from '@/components/ConfigManager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ConfigManager',
      component: ConfigManager
    }
  ]
})
