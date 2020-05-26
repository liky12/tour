$(window).scroll(function(){
    var sct=$(this).scrollTop();
    if($("html").hasClass("mobile")){
        if(sct>50){
            $(".to_top").fadeIn(500);
        }else{
            $(".to_top").fadeOut(500);
        }
    }else{
        $(".to_top").show();
    }
})
$(".to_top").on("click",function(){
    $("body,html").animate({scrollTop:"0px"},600);
})

// $(".depth1 > li > a").on("mouseover focus", function(){
//     $(this).next().stop().slideDown(400)
//     $(this).parent().siblings().children(".dep2box").stop().slideUp(400)        
// })


function init(){
            var winWidth=$(window).width()
            // console.log(winWidth) 윈도우의 사이즈가 콘솔영역에 나타남
            if( winWidth > 799){
            $("#header").removeClass("on");
            $("html").addClass("mintb").removeClass("mobile");
            $(".to_top").show();
            }else{
            $("html").addClass("mobile").removeClass("mintb");
            $(".to_top").hide();
             }
}

$(window).resize(function(){
    init()
})

$(window).load(function(){
    init()
})



$(".depth1 > li > a").on("mouseover focus", function(){
    if($(this).parents("#header").hasClass("on")){
        $(this).next().fadeOut(0)
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


