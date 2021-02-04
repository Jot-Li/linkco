//引入express框架
const express = require('express');

//创建路由器对象
const r = express.Router();

//引入数据库连接池模块
const pool = require('../pool.js');

//1,用户注册的路由
r.post('/register',(req,res)=>{
	//1.1获取数据
	let obj = req.body;
	//console.log(obj);
	//验证数据有效性


});
//2,用户登录的路由
r.get('/login',(req,res)=>{
	//2.1获取用户提交的数据
	var _phone = req.query.phone;
	var _upwd = req.query.upwd;
	console.log(_phone,_upwd);
    //2.2验证数据的有效性
	if(!_phone){
		res.send({code:401,msg:'phone required'});
		return;
	}
	if(!_upwd){
		res.send({code:402,msg:'upwd required'});
		return;
	}
	//2.3执行SQL命令
	pool.query('select * from lc_user where phone=? and upwd=?',[_phone,_upwd],(err,result)=>{
		if(err) throw err;
		console.log(result);
        if(result.length===0){
			res.send("0");
        }else{
			res.send("1");
        }
	});
});





//导出路由器对象
module.exports=r;