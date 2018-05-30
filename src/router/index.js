import Vue from 'vue'
import Router from 'vue-router'
import Topics from '@/views/Topics'
import Index from '@/views/Index'
import DsMain from '@/components/dsMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/tab',
      name: 'main',
      component: DsMain,
      children: [
        {
          path: 'all',
          component: Topics,
          name: '全部',
          meta: {
            tab: 'all'
          }
        },
        {
          path: 'topics',
          component: Topics,
          name: '主题',
          meta: {
            tab: 'ask'
          }
        },
        {
          path: 'ask',
          component: Topics,
          name: '主题',
          meta: {
            tab: 'ask'
          }
        },
        {
          path: 'job',
          component: Topics,
          name: '找坑',
          meta: {
            tab: 'job'
          }
        },
        {
          path: 'good',
          component: Topics,
          name: '精华',
          meta: {
            tab: 'good'
          }
        }
      ]
    }
  ]
})
