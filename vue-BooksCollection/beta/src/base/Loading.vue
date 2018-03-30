<template>
  <div class="box">
    <div class="loader">
      <div class="loading-2">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
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
  .box{
    width: 100%;
    padding: 3%;
    box-sizing: border-box;
    overflow: hidden;
    position: fixed;
    top: 300px;
    left: 295px;
    transform: translate3d(-50%,-50%,0);
  }
  .loader{
    width: 30%;
    float: left;
    margin-left: 3%;
    height: 200px;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
  }
  @-webkit-keyframes loading-2{
    0%{
      transform: scale(1);
    }
    50%{
      transform: scale(0.4);
    }
    100%{
      transform: scale(1);
    }
  }
  .loading-2 i{
    display: inline-block;
    width: 4px;
    height: 35px;
    margin: 0 2px;
    background: yellowgreen;
    border-radius: 2px;
    -webkit-animation: loading-2 1s ease-in 0.1s infinite;
  }
  .loading-2 i:nth-child(1){
    -webkit-animation: loading-2 1s ease-in 0.1s infinite;
  }
  .loading-2 i:nth-child(2){
    -webkit-animation: loading-2 1s ease-in 0.2s infinite;
  }
  .loading-2 i:nth-child(3){
    -webkit-animation: loading-2 1s ease-in 0.3s infinite;
  }
  .loading-2 i:nth-child(4){
    -webkit-animation: loading-2 1s ease-in 0.4s infinite;
  }
  .loading-2 i:nth-child(5){
    -webkit-animation: loading-2 1s ease-in 0.5s infinite;
  }
</style>
