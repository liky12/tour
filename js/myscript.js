// $(".depth1 > li > a").on("mouseover focus", function(){
//     $(this).next().stop().slideDown(400)
//     $(this).parent().siblings().children(".dep2box").stop().slideUp(400)        
// })

var flag = true;
$(window).resize(function(){
    // var winWidth=$(this).innerWidth()
    // console.log(winWidth) 윈도우의 사이즈가 콘솔영역에 나타남
    var winWidth=$(this).width()
    if( winWidth > 799 &&  flag){
        $("#header").removeClass("on")
        flag = false;
    }
})


$(".depth1 > li > a").on("mouseover focus", function(){
    if($(this).parents("#header").hasClass("on")){
        $(this).next().css({display:"none"})
    } else{  
        $(this).next().stop().fadeIn(400)
        $(this).parent().siblings().children(".dep2box").stop().fadeOut(400)
    }
})

$(".depth1 > li ").on("mouseleave" , function(){
    $(this).children(".dep2box").stop().fadeOut(400)
})

$(".depth1 >li:last   .depth2 > li:last >a").on("blur" , function(){
    $(this).parents(".dep2box").stop().fadeOut(400)
})

$("#header .openMOgnb").on("click", function(){
    // $(this).parents("#header").addClass("on")
    // toggleClass("on") 하면 열었다 닫았다 할 수 있다.
    if(!$(this).parents("#header").hasClass("on")){
        $(this).parents("#header").addClass("on")
    }
})
$("#header .closeMOgnb").on("click", function(){
    $(this).parents("#header").removeClass("on")
})