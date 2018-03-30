<template>
  <div id="app">
    <!--页面级缓存-->
     <transition name="fadeIn">
       <keep-alive>
         <router-view v-if="$route.meta.keepAlive"></router-view>
       </keep-alive>
     </transition>
    <transition name="fadeIn"><router-view v-if="!$route.meta.keepAlive"></router-view></transition>
    <Tab></Tab>
  </div>
</template>

<script>
  //router-view导入路由
  import Tab from './base/Tab.vue'
  export default {
    name: 'App',
    components:{
      Tab
    }
  }
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input, button {
    appearance: none;
  }
  .content{
    position: fixed;
    width: 100%;
    top: 40px;
    bottom: 50px;
    overflow: auto;
  }
  .fadeIn-enter{
    opacity: 0;
  }
  .fadeIn-enter-active{
    transition: all 0.5s linear;
  }
  .fadeIn-leave-active{
    transition: all 0.5s linear;
    opacity: 0;
  }
</style>
