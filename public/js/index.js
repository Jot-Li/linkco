//导航栏下拉隐藏模块事件
$(".lk").hover(
    function(){
        $(".h-lk").css("display","block");
    },
    function(){
        $(".h-lk").css("display","none");
    }
)

$(".car").hover(
    function(){
        $(".h-car").css("display","block");
    },
    function(){
        $(".h-car").css("display","none");
    }
)

$(".buy").hover(
    function(){
        $(".h-buy").css("display","block");
    },
    function(){
        $(".h-buy").css("display","none");
    }
)

$(".service").hover(
    function(){
        $(".h-service").css("display","block");
    },
    function(){
        $(".h-service").css("display","none");
    }
)

//隐藏的菜单事件
$(".menu-click").click(function(){
    $(".big_block").css("display","block");
})