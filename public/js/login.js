//ajax实现登录
$(".button2").click(()=>{
    // 获取电话号与密码
    let _phone = $(":input:text").val();
    let _upwd = $(":input:password").val();
    // let phone_reg = new RegExp("^1[3-9]\\d{9}$");
    // let phone_res = phone_reg.test(_phone);
    // let upwd_reg = new RegExp("[0-9A-Za-z]{6,10}");
    // let upwd_res = upwd_reg.test(_upwd);
    // ajax
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            let r = xhr.responseText;
            console.log(r);
            if(r==1){
                window.location.href="/index.html";
            }else{
                $(".err_pwd").css("display","block");
            }
        }
    }
    xhr.open("get",`/customer/login?phone=${_phone}&upwd=${_upwd}`,true);
    //定义请求参数
    // let params = `phone=${_phone}&upwd=${_upwd}`;
    //设置请求头
    // xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send();
})

//手机号与密码验证
$(":text").blur(()=>{
    let _phone = $(":input:text").val();
    let phone_reg = new RegExp("^1[3-9]\\d{9}$");
    let phone_res = phone_reg.test(_phone);
    if(phone_res==false){
        $(".err_phone").css("display","block");
    }else{
        $(".err_phone").css("display","none");
    }
})

$(":password").blur(()=>{
    let _upwd = $(":input:password").val();
    // let upwd_reg = new RegExp("[0-9A-Za-z]{6,10}");
    // let upwd_res = upwd_reg.test(_upwd);
    if(!_upwd){
        $(".input_pwd").css("display","block");
    }else{
        $(".input_pwd").css("display","none");
    }
})

//label标签内容上移
$(".phone_inp").focus(()=>{
    $(".phone_label").addClass("rise");
})
// $(".phone_inp").blur(()=>{
//     $(".phone_label").removeClass("rise");
// })

$(".vcode_inp").focus(()=>{
    $(".vcode_label").addClass("rise");
})
// $(".vcode_inp").blur(()=>{
//     $(".vcode_label").removeClass("rise");
// })

$(".pwd_inp").focus(()=>{
    $(".pwd_label").addClass("rise");
})
// $(".pwd_inp").blur(()=>{
//     $(".pwd_label").removeClass("rise");
// })

//点击获取验证码按钮，弹出验证滑块
$(".button1").click(()=>{
    $(".slide_block").css("display","block");
})

//点击实现不同的方式登录
$(".login_pwd").click(()=>{
    $(".vcode_block").css("display","none");
    $(".pwd_block").css("display","block");
    $(".login_pwd").css("display","none");
    $(".quick_login").css("display","block");
})

$(".quick_login").click(()=>{
    $(".vcode_block").css("display","block");
    $(".pwd_block").css("display","none");
    $(".login_pwd").css("display","block");
    $(".quick_login").css("display","none");
})