<template>
    <div class="dialog">
      <slot></slot>
    </div>
</template>
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
<style scoped>
  .dialog{
    width: 140px;
    height: 40px;
    background: #f2f2f2;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    line-height:40px;
    overflow:hidden;
    text-align: center;
    color: red;
  }
</style>
