import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import regist from '@/view/index/regist'
import registSuccess from '@/view/index/registSuccess'
import auditResults from '@/view/index/auditResults'

import shangpin from '@/view/shangpin/shangpin'
import shangpinList from '@/view/shangpin/shangpinList'

import geren from '@/view/geren/geren'


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
        showFooterAcitve: '0',
        showHeader: true,
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
    // 商品
    {
      path: '/shangpin',
      name: 'shangpin',
      component: shangpin,
      meta: {
        index: 1,
        showFooter: true,
        showFooterAcitve: '1',
        showHeader: true
      }
    },
    {
      path: '/shangpin/shangpinList',
      name: 'shangpinList',
      component: shangpinList,
      meta: {
        index: 2,
        showFooter: true,
        showFooterAcitve: '1',
        showHeader: true
      }
    },
    // 个人
    {
      path: '/geren',
      name: 'geren',
      component: geren,
      meta: {
        index: 1,
        showFooter: true,
        showFooterAcitve: '2',
        showHeader: false
      }
    },
  ]
})
