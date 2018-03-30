<template>
  <div class="detail">
    <MHeader :back="true">书籍详情</MHeader>
    <ul>
      <li>
        <label for="bookName">书名</label>
        <input type="text" v-model="book.bookName" id="bookName" readonly>
      </li>
      <li>
        <label for="bookPrice">价格</label>
        <input type="text" v-model.number="book.bookPrice" id="bookPrice" readonly>
      </li>
      <li>
        <label for="bookInfo">信息</label>
        <input type="text" v-model="book.bookInfo" id="bookInfo">
      </li>
      <li>
        <button @click="update">确认修改</button>
      </li>

    </ul>
  </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue';
  import {findOneBook, updateBook} from '../api'//查找 修改接口
  export default {
    data() {
      return {
        book: {}
      }
    },
    created() {//页面加载根据bid发送求
      this.getData();
    },
    watch: {
      $route() {//只要路径变化 重新获取
        this.getData();
      }
    },
    methods: {
      async update() {//点击修改图书
        await updateBook(this.bid, this.book);
        this.$router.push('/list');//修改完成后跳转页面
      },
      async getData() {//通过bid找到某一项
        this.book = await findOneBook(this.bid);
        //如果是空对象 需要跳转回列表页
        if (Object.keys(this.book).length === 0) {
          this.$router.push('/list')
        }
      }
    },
    computed: {
      bid() {
        return this.$route.params.bid
      }
    },
    components: {
      MHeader
    },
    props: {}
  }
</script>
<style scoped lang="less">
  .detail {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    z-index: 100;
    ul {
      margin: 60px 10px 0 10px;
      li {
        label {
          display: block;
          font-size: 20px;
        }
        input {
          margin-top: 10px;
          height: 25px;
          width: 100%;
        }
        button {
          margin-top: 10px;
          display: block;
          width: 75px;
          height: 30px;
          background: yellowgreen;
          color: #fff;
        }
      }
    }
  }
</style>
