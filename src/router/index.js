import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import paihang from '@/view/paihang'

import login from '@/view/login/login'
import regist from '@/view/regist/newRegist'
import auditResults from '@/view/regist/auditResults' //审核状态
import registSuccess from '@/view/regist/registSuccess'
import hetongqianshu from '@/view/regist/hetongqianshu' //合同签署

import merchantEntry from '@/view/MerchantEntry/index' 

import shangpin from '@/view/shangpin/shangpin'
import dianpu from '@/view/shangpin/dianpu'
import shangpinIntro from '@/view/shangpin/shangpinIntro'
import shangpinList from '@/view/shangpin/shangpinList'

import geren from '@/view/geren/geren'
import myData from '@/view/geren/myData'
import myEval from '@/view/geren/myEval'
import contract from '@/view/geren/contract' // 合同内容
import contractBlue from '@/view/geren/contractBlue' // 合同内容
import shopDiagnosis from '@/view/geren/ShopDiagnosis' // 合同内容
import ShopDiagnosisBlue from '@/view/geren/ShopDiagnosisBlue' // 合同内容


Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      name:'login',
      component: login,
      meta: {
        index: 1,
        showFooter: false,
        showHeader: false,
      }
    },
    {
      path: '/index',
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
      path: '/paihang',
      name: 'paihang',
      component: paihang,
      meta: {
        index: 0,
        showFooter: false,
        showFooterAcitve: '0',
        showHeader: false,
      }
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist,
      meta: {
        index: 1,
        showFooter: false,
        showHeader: false
      }
    },
    {
      path: '/merchantEntry',
      name: 'merchantEntry',
      component: merchantEntry,
      meta: {
        index: 1,
        showFooter: false,
        showHeader: false
      }
    },
    {
      path: '/registSuccess',
      name: 'registSuccess',
      component: registSuccess,
      meta: {
        index: 2,
        showFooter: false,
        showHeader: false
      }
    },
    {
      path: '/auditResults',
      name: 'auditResults',
      component: auditResults,
      meta: {
        index: 2,
        showFooter: false,
        showHeader: false
      }
    },
    {
      path: '/hetongqianshu', //合同签署
      name: 'hetongqianshu',
      component: hetongqianshu,
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
      path: '/dianpu',
      name: 'dianpu',
      component: dianpu,
      meta: {
        index: 1,
        showFooter: false,
        showFooterAcitve: '1',
        showHeader: false
      }
    },
    {
      path: '/shangpinIntro',
      name: 'shangpinIntro',
      component: shangpinIntro,
      meta: {
        index: 2,
        showFooter: false,
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
    {
      path: '/geren/myData',
      name: 'myData',
      component: myData,
      meta: {
        index: 1,
        showFooter: false,
        showFooterAcitve: '2',
        showHeader: false
      }
    },
    {
      path: '/geren/myEval',
      name: 'myEval',
      component: myEval,
      meta: {
        index: 1,
        showFooter: false,
        showFooterAcitve: '2',
        showHeader: false
      }
    },
    {
      path: '/geren/contract',
      name: 'contract',
      component: contract,
      meta: {
        index: 1,
        showFooter: false,
        showFooterAcitve: '2',
        showHeader: false
      }
    },
    {
      path: '/geren/contractblue',
      name: 'contractBlue',
      component: contractBlue,
      meta: {
        index: 1,
        showFooter: false,
        showFooterAcitve: '2',
        showHeader: false
      }
    },
    {
      path: '/geren/shopDiagnosis',
      name: 'shopDiagnosis',
      component: shopDiagnosis,
      meta: {
        index: 1,
        showFooter: false,
        showFooterAcitve: '2',
        showHeader: false
      }
    },
    {
      path: '/geren/shopdiagnosisblue',
      name: 'ShopDiagnosisBlue',
      component: ShopDiagnosisBlue,
      meta: {
        index: 1,
        showFooter: false,
        showFooterAcitve: '2',
        showHeader: false
      }
    },
    
  ]
})
