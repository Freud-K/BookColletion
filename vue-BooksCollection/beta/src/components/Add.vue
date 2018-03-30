<template>
    <div>
      <MHeader>添加</MHeader>
      <div class="content">
        <ul>
          <li>
            <label for="bookName">书的名称</label>
            <input type="text" v-model="book.bookName" id="bookName">
          </li>
          <li>
            <label for="bookPrice">书的价格</label>
            <input type="text" v-model.number="book.bookPrice" id="bookPrice">
          </li>
          <li>
          <label for="bookInfo">书的信息</label>
          <input type="text" v-model="book.bookInfo" id="bookInfo">
        </li>
          <li>
            <label for="bookCover">书的封面</label>
            <input type="text" v-model="book.bookCover" id="bookCover">
          </li>
          <li>
            <button @click="add">添加</button>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue'
  import {addBook}  from '../api'
    export default {
        data() {
            return { book:{}}
        },
        methods: {
          async add(){
            await addBook(this.book);
            this.$router.push('/list');
          }
        },
        computed: {
        },
        components: {
          MHeader
        },
        props: {}
    }
</script>
<style scoped lang="less">
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
</style>
