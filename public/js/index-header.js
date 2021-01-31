//1,点击电话图标触发事件
//获取触发事件的元素


//点击搜索图片实现弹出搜索框
//1,获取触发事件的元素
//2,绑定事件触发函数
$(".search_img").click(function(){
    var $this = $(this);
    //3,获取要修改的元素
    var $search = $(".top_search");
    var $nav = $(".navigator");
    var $e_icon = $(".e_icon");
    //4,修改元素
    $search.css("display","block");
    $nav.css("display","none");
    $e_icon.css("visibility","hidden");
})
$(".top_close").click(function(){
    //3,获取要修改的元素
    var $search = $(".top_search");
    var $nav = $(".navigator");
    var $e_icon = $(".e_icon");
    //4,修改元素
    $search.css("display","none");
    $nav.css("display","block");
    $e_icon.css("visibility","visible");
})

//点击电话图片实现弹出电话详情框
$(".help").click(function(){
    $(".call_hide_block").css("display","block"); 
})


$(".close_img").click(()=>{
    $(".call_hide_block").css("display","none"); 
})





