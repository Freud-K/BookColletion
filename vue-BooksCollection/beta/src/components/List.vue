<template>
    <div>
      <MHeader>图书列表</MHeader>
      <Loading v-if="this.loading"></Loading>
      <div class="content" ref="list" @scroll="loadMore">
        <ul>
          <!--路由参数 跳转 循环 索引-->
          <router-link  v-for="(book,index) in books" :to="{name:'detail',params:{bid:book.bookId}}" :key="index" tag="li">
            <img v-lazy="book.bookCover" />
            <div>
              <h4>{{book.bookName}}</h4>
              <p>{{book.bookInfo}}</p>
              <b>{{'￥'+book.bookPrice}}</b>
              <div v-if="isCollected(book)" class="btn">
                <button @click.stop="collect(book)" class="btn1">收藏</button>
                <button @click.stop="remove(book.bookId)" class="btn2">不喜欢</button>
              </div>
              <div v-else class="collect">
                <i class="iconfont icon-shoucang"></i>已收藏
              </div>
              <!--阻止冒泡-->
            </div>
          </router-link>
        </ul>
      </div>
      <Dialog v-if="finish">已经到底了！</Dialog>
    </div>
</template>
<script>
    import {pagination,removeBook} from '../api'
    import MHeader from "../base/MHeader.vue"
    import Loading from '../base/Loading.vue'
    import Dialog from '../base/dialog.vue'
    import * as Type from '../vuex-store/mutations-type'
    export default {
        data() {
            return {
              books:[],
              offset:0,
              hasMore:true,
              loading:false,
              IsMoved:false,
              finish:false
            }
        },
      created(){
          this.getData()
      },
      mounted(){
          this.$nextTick(()=>{
            this.MoveLoad();
          }) ;
      },
        methods: {
          finishLoad(){
            this.finish=true;
            setTimeout(()=>{
              this.finish=false;
            },1000)
          },
        isCollected(book){
          return !this.$store.state.books.find(item=>item.bookId===book.bookId);
        },
        collect(book){
          this.$store.commit(Type.COLLECT_BOOK,book);//收藏图书
          localStorage.setItem('data',JSON.stringify(this.$store.state.books))//上传本地
        },
        MoveLoad(){
          let list=this.$refs.list;//获取dom有bug,document.getElementsByClassName('content')[0]
          let top=list.offsetTop;
          let distance= 0;//
          let start=(e)=>{
            if(list.scrollTop!=0)return;
            let start=e.touches[0].pageY;//获取点击位置
            let move=(e)=>{
              this.isMoved=true;
              let current=e.touches[0].pageY;
              distance = current-start;
              if(distance>0){//可限制下来长度
                list.style.top=distance+top+'px';
              }else {
                list.removeEventListener('touchmove',move);
                list.removeEventListener('touchend',end);
              }
            };
            let end = e=>{
              if(!this.isMoved)return;
              this.isMoved=false;
              clearInterval(this.timer2);
              this.timer2=setInterval(()=>{//有点bug
                if (distance<=0){
                  clearInterval(this.timer2);
                  distance=0;
                  list.style.top=top+'px';//解决bug
                  list.removeEventListener('touchmove',move);
                  list.removeEventListener('touchend',end);
                  (()=>{//此处为下拉完成后加载的事件事件
                    this.hasMore=true;
                    this.offset=0;
                    this.books=[];
                    //加载刷新
                    this.getData();
                  })();
                  return
                }
                distance-=2;
                list.style.top= top+distance+'px';
              },1);
            };
            list.addEventListener('touchmove',move);
            list.addEventListener('touchend',end)
          };
          list.addEventListener('touchstart',start,false)
        },
        loadMore(){
          //节流
          clearTimeout(this.timer1);
          this.timer1=setTimeout(()=>{
            let{scrollTop,clientHeight,scrollHeight}=this.$refs.list;
            if (scrollTop+clientHeight+20>scrollHeight){
              this.getData();//触发事件
              if (!this.hasMore){//当没有数据时提示没有了
                this.finishLoad();
              }
            }
          },100)

        },
          async remove(id){
            await removeBook(id);//删除某一项
            this.books=this.books.filter(item=>item.bookId!==id);
          },
          async getData(){
            if (this.hasMore&&!this.loading){//
              this.loading=true;
              let {hasMore,books} =await pagination(this.offset);
              this.books=this.books.concat(books);//this.books=[...this.books,...books];俩数组拼起来
              this.hasMore=hasMore;
              this.loading=false;
              this.offset=this.books.length;
            }

          }
        },
        computed: {

        },
        components: {
          MHeader,Loading,Dialog
        },
        props: {}
    }
</script>
<style scoped lang="less">
  .content{
   ul{
     padding: 10px;
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
         line-height: 20px;
       }
       b{
         color: darkred;
       }
     }
   }
  }
  button{
      width: 60px;
      height: 30px;
      border-radius: 10px;
  }
  .collect{
    color: red;
  }
</style>
