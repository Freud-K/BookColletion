# BookColletion
vue
# vue练习项目
## 简介
这是一个移动web应用
### 项目所用
- vue-cli
- webpack
- vue
- vue-router
- vuex
- axios
- vue-awesome-swiper插件
### 一、发布版
- 运行release-version目录下的server.js
``
node server.js
``
- 访问localhost:3000即可
### 二、测试版
#### 运行方法
- 在beta目录下
  ``
  npm install
  ``
  和
  ``
  npm run dev
  ``
- 运行mock目录下server.js
- 访问localhost:8080即可
#### 文件介绍

- mock 模拟数据
- src 源代码
  - api axios接口
  - components 页面组件
  - base 基础组件
  - router 路由表
  - vuex-store vuex
### 大致功能
- Home
  - 推荐书目
- List
  - 书目列表 滚动条到底加载 手指下拉刷新
  - 添加收藏 删除图书(直接删掉服务器上的数据，备份数据reviveBook.json)
- Collect
  - 收藏夹 收藏内容为本地存储
- Add
  - 向服务器添加新书目
- Detail
  - 与每一页的书路由链接 可更改书籍信息


## 未解决的问题
- 列表页样式有bug，图片会变形。
- 滚动条到底触发事件。使用dom操作绑定事件会有不响应bug，
触发条件是在其他页刷新，回到调用页。
使用vue的$refs绑定事件就没有这个bug。
- 发布版中在首页刷新偶尔vue会报404的错误，但是页面正常加载。
