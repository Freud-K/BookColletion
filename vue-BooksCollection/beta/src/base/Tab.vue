<template>
    <div class="nav">
      <router-link to="/home"><i class="iconfont icon-shouye"></i><span>首页</span></router-link>
      <router-link to="/list"><i class="iconfont icon-liebiao"></i><span>列表</span></router-link>
      <router-link to="/collect"><i class="iconfont icon-shoucang"></i><span>收藏</span></router-link>
      <router-link to="/add"><i class="iconfont icon-icon--"></i><span>添加</span></router-link>
    </div>
</template>
<!--
display:flex
flex-direction:row/column
justify-content:center 垂直居中
align-item：center 横向居中
flex：1 每份占1
router-link-exact-active router-link-active
-->
<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        computed: {},
        components: {},
        props: {}
    }
</script>
<style lang="less">
 .nav{
   position: fixed;
   left: 0px;
   bottom: 0px;
   width: 100%;
   height: 50px;
   display: flex;
   a{
     display: flex;
     color:yellowgreen;
     flex-direction: column;
     flex: 1;
     align-items: center;
     justify-content: center;
   }
   a.router-link-exact-active{
     color: burlywood;
   }
 }
</style>
