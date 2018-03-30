import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
//组件懒加载，见注释
import Home from '../components/Home.vue';//第一 导入组件
import Collect from '../components/Collect.vue';
import Detail from '../components/Detail.vue';
import Add from '../components/Add.vue';
import List from '../components/List.vue';

export default new Router({
  //mode:'history',
  routes: [
    {path: '/', redirect: '/home'},//$route.meta 路由元信息
    {path: '/home/',name:'home',
      component: Home,//component:()=>import('../components/Home.vue')
      meta: {keepAlive: true,title:'首页'}},//
    // /detail/1 {bid:1} 必须有 路径参数
    {path: '/detail/:bid',
      component: Detail,//component:()=>import('../components/Detail.vue')
      name: 'detail',meta:{title:'详情页'}},
    {path: '/collect/',name:'collect',
      component: Collect,
      meta:{title:'收藏页'}//component:()=>import('../components/Collect.vue')
    },
    {path: '/add',
      component: Add,
      meta:{title:'添加页'}//component:()=>import('../components/Add.vue')
    },
    {path: '/list',
      component: List,//component:()=>import('../components/List.vue')
      meta: {keepAlive: true,title:'列表页'}},// 会触发bug
  ]
})
