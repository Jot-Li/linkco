function login(){
    // 获取电话号与密码
    let _phone = phone.value;
    let _upwd = upwd.value;
    // ajax
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && status==200){
            let r = xhr.responseText;
            if(r>0){
                alert(`登录成功`);
            }else{
                alert(`登陆失败`);
            }
        }
    }
    xhr.open("get",`/customer/login/${_phone}&${_upwd}`,true);
    //定义请求参数
    // let params = `phone=${_phone}&upwd=${_upwd}`;
    //设置请求头
    // xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send();
}

//label标签内容上移
$(".phone_inp").focus(()=>{
    $(".phone_label").addClass("rise");
})
$(".phone_inp").blur(()=>{
    $(".phone_label").removeClass("rise");
})

$(".vcode_inp").focus(()=>{
    $(".vcode_label").addClass("rise");
})
$(".vcode_inp").blur(()=>{
    $(".vcode_label").removeClass("rise");
})

$(".pwd_inp").focus(()=>{
    $(".pwd_label").addClass("rise");
})
$(".pwd_inp").blur(()=>{
    $(".pwd_label").removeClass("rise");
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