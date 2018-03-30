<template>
    <div class="header">
      <slot></slot>
      <i class="iconfont icon-fanhui-yuanshijituantubiao" v-if="back" @click="goBack"></i>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
          goBack(){
            this.$router.go(-1);
          }
        },
        computed: {},
        components: {},
        props: {
          back: {
            type: Boolean,
            default:false

          }
        }
    }
</script>
<style scoped lang="less">
  .header{
    position: fixed;
    top:0px;
    left: 0px;
    width: 100%;
    background: yellowgreen;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    i{
        position: absolute;
      left: 10px;
      font-size: 25px;
    }
  }
</style>
