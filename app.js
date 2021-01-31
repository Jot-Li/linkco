//引入express框架
const express = require('express');

//创建web浏览器
const app = express();

//设置监听端口
app.listen(8080);

//引入body-parser中间件
const bodyParser = require('body-parser');

//引入用户路由器模块
const cRouter = require('./router/customer.js');

//将静态资源托管到public目录下
app.use(express.static('./public'));

//应用body-parse中间件，将post请求的数据解析为对象
app.use(bodyParser.urlencoded({
	extended:false
}));


//把路由器挂在web服务器下
app.use('/customer',cRouter);

