// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
import 'swiper/dist/css/swiper.css';
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=101945704,1599501728&fm=27&gp=0.jpg',
  loading: 'http://uelibrary.com/ue_lib/Uploads/article/20160523/1463977446558234.jpg',
  attempt: 1
});
import store from './vuex-store'
//每个路由的共有逻辑，全局
 router.beforeEach(function(to,from,next){//忘记参数console.log一下
 document.title = to.meta.title;
next()//可传参数next（{path：}）
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  components: { App },
  template: '<App/>'
});
