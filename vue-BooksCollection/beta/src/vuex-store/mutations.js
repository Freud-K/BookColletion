import * as Type from './mutations-type'
let mutations={
   [Type.COLLECT_BOOK](state,book){
     let store =state.books.find(item=>item.bookId===book.bookId);//find方法找到返回找到的那个成员的索引
         if (store){
       //store.操作找到的那个
           state.books=[...state.books]
         }
     else{
           //操作state要替换或者更改
       state.books.push(book)
         }
   },
   [Type.IMPORT_BOOK](state){
      state.books=JSON.parse(localStorage.getItem('data'))||state.books;//如果没有等于其自身
      state.books=[...state.books];
   },
   [Type.CHANGE_BOOK](state,bookStore){
     state.books=[...bookStore];
   }
};
export default mutations
