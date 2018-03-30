<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Loading v-show="loading"></Loading>
      <Swiper :swiperSlides="sliders"></Swiper>
      <div class="container">
        <h3>热门图书</h3>
        <ul>
          <router-link v-for="(hot,index) in hotBooks" :to="{name:'detail',params:{bid:hot.bookId}} " :key="index" tag="li">
            <img :src="hot.bookCover"/>
            {{hot.bookName}}
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue';
  import Swiper from '../base/Swiper.vue';
  import Loading from '../base/Loading.vue'
  import {getSliders, getHotBook} from '../api/index.js';
  import * as Type from '../vuex-store/mutations-type'

  export default {
    created() {
      this.getLunBo();//获取轮播图
      this.getReMen();//获取热门图书
      this.importBook();//获取本地数据
    },
    mounted() {//滚动条监听事件,使用js原生方法有bug
//      this.$nextTick(
//        this.onScroll()
//      )
    }
    ,
    data() {
      return {
        sliders: [], hotBooks: [], loading: true
      }
    },
    methods: {
      importBook(){
        this.$store.commit(Type.IMPORT_BOOK);
      },
//      onScroll() {
//        document.getElementsByClassName("content")[0].addEventListener('scroll', function () {
//          if (this.scrollHeight - this.scrollTop === this.clientHeight) {
//            console.log(11111111111111);
//          }
//        })
//      },
      async getLunBo() {
        //语法糖
        this.sliders = await getSliders();
        //将数据放到sliders
      },
      async getReMen() {
        this.hotBooks = await getHotBook();
        this.loading = false;
      },
    },
    computed: {},
    components: {
      MHeader, Swiper,Loading
    },
    props: {}
  }
</script>
<style scoped lang="less">
  .container {
    width: 90%;
    margin: 0 auto;
    h3 {
      color: #999;
      padding: 5px 0;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 10px;
      li {
        width: 50%;
        text-align: center;
        font-size: small;
        margin: 5px 0;
        img {
          width: 100%;
        }
      }
    }
  }
</style>
