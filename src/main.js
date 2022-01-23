import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import request, {
  host
} from './utils/request'

//利用vue的原型实现方法共享
//所有组件都是Vue的实例
Vue.prototype.$request = request;
Vue.prototype.$host = host

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  //5. 把router实例注入到vue实例中
  router,
  store,
  render: h => h(App),
}).$mount('#app')

//设置全局路由守卫
router.beforeEach(function (to, from, next) {
  // console.log('before', to);
  if (to.matched.some(item => item.meta.requiresAuth)) {
    //判断是否登录
    //放行
    if (store.getters.isLogin) {
      next();
      router.app.$request.get('/user/verify', {
        headers: {
          Authorization: store.state.userInfo.authorization
        }
      }).then(({
        data
      }) => {
        // console.log('data', data);
        if (data.code === 401) {
          // token已失效或被篡改
          router.push({
            path: "/login",
            query: {
              targetUrl: to.fullPath
            }
          })
        }
      })
    } else {
      // 没有登录：跳到登录页面
      router.push({
        path: '/login',
        query: {
          targetUrl: to.fullPath
        }
      })
    }
  } else {
    next();
  }
})