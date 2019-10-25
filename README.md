# project

> A Vue.js project

![Image text](https://https://github.com/378406712/user-System/blob/master/img/login.png)
![Image text](https://https://github.com/378406712/user-System/blob/master/img/index.png)
![Image text](https://https://github.com/378406712/user-System/blob/master/img/details.png)
![Image text](https://https://github.com/378406712/user-System/blob/master/img/devidePages.png)
![Image text](https://https://github.com/378406712/user-System/blob/master/img/shop.png)
![Image text](https://https://github.com/378406712/user-System/blob/master/img/command1.png)
![Image text](https://https://github.com/378406712/user-System/blob/master/img/command2.png)
![Image text](https://https://github.com/378406712/user-System/blob/master/img/command3.png)
![Image text](https://https://github.com/378406712/user-System/blob/master/img/command4.png)

##Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

1. vue配合vuex和本地存储可以减少HTTP请求，进行优化

2. 本地储存：sessionStorage、localStorage和cookie之间的异同

   共同点：都是保存在浏览器端，且同源的。

   区别：cookie数据始终在同源的http请求中携带(即使不需要)，即cookie在浏览器和服务器间

   ​			来回传递

   ​			cookie数据不能超过4KB,同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如短字符等

   ​			而sessionStorage和localStorage虽然也有存储大小的限制，一般为5M

   ​			数据有效期也不同，sessionStorage：仅在当前浏览器窗口关闭前有效，不能持久保存

   ​			localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；

   ​			cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭

3. 本地存储的方法

   - setItem(key,val) 设置值
   - getItem(key) 获取值
   - key(index) 获取key
   - removeItem（key）删除值
   - clear() 清空所有储存
