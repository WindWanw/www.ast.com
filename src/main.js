import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//路由
import router from './router'

//状态管理
import store from './store'

//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//表单自定义验证
import rules from './common/rules'
Vue.prototype.$rules = rules;

//公共方法
import common from './common';
Vue.prototype.$func = common;

//注册全局过滤器
import filters from './common/filter';
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
