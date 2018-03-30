import axios from 'axios';

axios.defaults.baseURL= 'http://localhost:3000';
//增加默认的请求路径
//获取轮播图数据,返回promise对象
axios.interceptors.response.use((res)=>res.data);//axios拦截器
export let getSliders=()=>{
return axios.get('/sliders')
};
//获取热门图书接口
export let getHotBook=()=>{
  return axios.get('/hot')
};

//获取全部图书
export let getBooks =()=>{
  return axios.get('/book')
};
//删除某一本图书
export let removeBook = (id)=>{
  return axios.delete(`/book?id=${id}`);
};

//获取某一本书
export  let findOneBook=(id)=>axios.get(`/book?id=${id}`);

//修改
export  let updateBook=(id,data)=>axios.put(`/book?id=${id}`,data);

//添加
export  let addBook=(data)=>axios.post(`/book`,data);
//下拉加载
export  let  pagination=(offset)=>axios.get(`/page?offset=${offset}`);
