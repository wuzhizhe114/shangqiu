import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import regist from '@/view/index/regist'
import registSuccess from '@/view/index/registSuccess'
import auditResults from '@/view/index/auditResults'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        index: 0,
        showFooter: true,
        showHeader: true
      }
    },
    {
      path: '/index/regist',
      name: 'regist',
      component: regist,
      meta: {
        index: 1,
        showFooter: false,
        showHeader: false
      }
    },
    {
      path: '/index/registSuccess',
      name: 'registSuccess',
      component: registSuccess,
      meta: {
        index: 2,
        showFooter: false,
        showHeader: false
      }
    },
    {
      path: '/index/auditResults',
      name: 'auditResults',
      component: auditResults,
      meta: {
        index: 2,
        showFooter: false,
        showHeader: false
      }
    },
  ]
})
