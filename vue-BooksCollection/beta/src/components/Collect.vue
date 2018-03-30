<template>
    <div>
      <MHeader>收藏夹</MHeader>
      <ul class="content">
        <router-link v-for="(book,index) in this.$store.state.books" :to="{name:'detail',params:{bid:book.bookId}}" :key="index" tag="li">
          <img :src="book.bookCover"/>
          <div><h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <button @click.stop="dislike(book)">取消收藏</button>
          </div>
        </router-link>
      </ul>
    </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue'
  import * as Type from '../vuex-store/mutations-type'
    export default {
       created(){
         this.storeBook=JSON.parse(localStorage.getItem('data'));
       },//还没写完
        data() {
            return {
              storeBook:[]
            }
        },
      watch:{//watch默认只监控一层
      storeBook:{
    handler(){//默认写成函数 就相当于写了handler
      //localStorage默认存的是字符串
      this.$store.commit(Type.CHANGE_BOOK,this.storeBook);
      localStorage.setItem('data',JSON.stringify(this.storeBook))
    },deep:true
  }
  },
        methods: {
         dislike(book){//取消收藏
             this.storeBook=this.storeBook.filter(item=>item.bookId!==book.bookId)
         }
      },
        computed: {},
        components: {
          MHeader
        },
        props: {}
    }
</script>
<style scoped lang="less">
  .content{

    padding: 10px;
    button{
      width: 60px;
      height: 30px;
      border-radius: 10px;
      position: relative;
      left: 150px;
      color: red;
    }
  li{
    display: flex;
    padding-bottom: 5px;
    padding-top: 5px;
    border-bottom: 1px solid #f1f1f1;
  img{
    width: 120px;
    height: 120px;
  }
  h4{
    font-size: 20px;
    line-height: 25px;
  }
  p{
    color: green;
    line-height: 30px;
  }
  b{
    color: darkred;
  }
  }
  }


</style>
