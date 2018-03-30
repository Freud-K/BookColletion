let http = require('http');
let fs = require('fs');
let url = require('url');
//获取swiper /sliders
let sliders = require('./sliders');

function read(cb) {
  fs.readFile('./book.json', 'utf8', function (err, data) {
    if (err || data.length == 0) {
      cb([]);//如果有错误 或者文件没长度 就是空数据
    } else {
      cb(JSON.parse(data))//将读出的内容转化成对象
    }
  })
}

function write(data, cb) {//写入内容
  fs.writeFile('./book.json', JSON.stringify(data), cb)
}

http.createServer((req, res) => {
  //解决跨域问题
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1');
  if (req.method == "OPTIONS") return res.end();
  /*让options请求快速返回*/

  let {pathname, query} = url.parse(req.url, true);//true 把query转对象
  if (pathname === '/sliders') {
    res.setHeader('Content-Type', 'application/json;charset=utf8');
    return res.end(JSON.stringify(sliders));
  }
  if (pathname === '/hot') {
    read(
      function (books) {
        let ram=Math.floor(Math.random()*(books.length-6));
        let hot = books.slice(ram,ram+6);
        res.setHeader('Content-Type', 'application/json;charset=utf8');
        setTimeout(()=>{
              res.end(JSON.stringify(hot));
        },500)

      });

    return
  }
  if (pathname === '/book') {//对书的增删改查
    let id = parseInt(query.id);//取出的是字符串
    switch (req.method) {//?id=1
      case 'GET':
        if (id >= 0) {//查询一个
          read(function (books) {
            let book = books.find(item => item.bookId === id);
            if (!book) book = {};//没找到则是undefined
            res.setHeader('Content-Type', 'application/json;charset=utf8');
            res.end(JSON.stringify(book))
          })
        } else {//获取所有图书
          read(function (books) {
            res.setHeader('Content-Type', 'application/json;charset=utf8');
            res.end(JSON.stringify(books.reverse()))
          })
        }
        break;
      case 'POST':
        let str='';
        req.on('data',function (chunk) {
             str+=chunk
        });
        req.on('end',function () {
           let book = JSON.parse(str);
          read(function (books) {
               book.bookId= books.length? books.length+1:1;
               books.push(book);
               write(books,function () {
                   res.end(JSON.stringify(book));
               })
          })
        });
        break;
      case 'PUT':
        if (id) {//获取了当前要修改的id
          let str = "";
          req.on('data', chunk =>{
            str += chunk;
          });
          req.on('end',()=>{
            let book= JSON.parse(str);
             read(function (books) {
                   books=books.map(item=>{
                     if(item.bookId===id){
                       return book
                     }
                     return item;
                   });
                   write(books,function () {
                       res.end(JSON.stringify(book));
                   })
             });
          })
        }
        break;
      case 'DELETE':
        read(function (books) {
          books = books.filter(item => item.bookId !== id);
          write(books, function () {
            res.end(JSON.stringify({}));//删除返回空对象
          });

        });
        break;
    }
    return
  }
  if(pathname ==='/page'){
    let offset= parseInt(query.offset )||0;
          read(function (books) {
            let hasMore= true;//定义为全局变量？
            if (books.length<=offset+5){//
              hasMore=false;
            }
             books=books.reverse().slice(offset,offset+5);//数据倒序+5每页五个
            res.setHeader('Content-Type', 'application/json;charset=utf8');
            setTimeout(()=>{
              res.end(JSON.stringify({hasMore,books}));
            },500)//给钱就优化
          });
    return
  }
  //  读取一个路径
  fs.stat('.'+pathname,function (err,stats) {
    if(err){
      res.statusCode=404;
      res.end('NOT FOUND')
    }else {
      if(stats.isDirectory()){
        let p=require('path').join('.'+pathname,'./index.html');
        fs.createReadStream(p).pipe(res)
      }else {
        fs.createReadStream('.'+pathname).pipe(res);
      }
    }
  })
}).listen(3000);
