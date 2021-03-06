// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'muse-ui-message/dist/muse-ui-message.css'; //弹窗样式
import Vue from 'vue'
import App from './App'
import router from './router'

import LyTab from 'ly-tab'


import MuseUI from 'muse-ui'; // ui 框架
import Message from 'muse-ui-message'; // 弹窗
import 'muse-ui/dist/muse-ui.css';
import theme from 'muse-ui/lib/theme'; // 主题
import '@/assets/iconfont/iconfont.css';
import '@/assets/css/resetMuse.css';
import '@/assets/css/style.css';

// 挂载
Vue.use(MuseUI);
Vue.use(Message);
Vue.use(LyTab)

// 新增主题
theme.add('teal', {
  primary: '#fa595e',
  secondary: '#ff4081',
  success: '#4caf50',
  warning: '#ffeb3b',
}, 'light');
theme.use('teal');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})
