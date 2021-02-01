$(".menu-list-img").mouseenter(
  function(){
    var $this=$(this);
    $this.css("display","none");
    $this.next().css("display","inline-block");
  })

$(".menu-list-limg").mouseleave(
  function(){
    var $this = $(this);
    $this.css("display","none");
    $this.prev().css("display","inline-block");
  })