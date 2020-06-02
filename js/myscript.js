
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

var winWidth;
function init(){
            winWidth=$(window).width()
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
    $(".loadingAni").delay(1000).fadeOut(400)
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


$(".place_list > li > a").on("click",function(e){
    e.preventDefault()
    var href = $(this).attr("href")
    var src = $(this).attr("data-src")
    var text = $(this).find("h3").text()
    var info = $(this).find("p").text()
    var alt = $(this).find("img").attr("alt")
    $(".popupBox").addClass("on")
    if(winWidth<=799){
        var litop = $(this).parent().offset().top;
        $(".popupBox .inner").css({
            top:litop,
            width:"80%",
            left:"0%",
            transform:"translate(0%)",
            margin:"0 10%"
        })
    }
    $(".popupBox .inner h3").text(text)
    $(".popupBox .inner p").text(info)
    $(".popupBox .inner div a").attr("href",href)
    $(".popupBox .inner div img").attr("src",src).attr("alt",alt).attr("width","100%")
    // $(".popupBox .inner").append(' <button><span class="blind">닫기</span><i class="fas fa-times-circle"></i></button>') 이렇게 js에는 버튼이 안먹힌다.
})
$(".popupBox  button").on("click",function(){
    $(this).parents(".popupBox").removeClass("on")
})