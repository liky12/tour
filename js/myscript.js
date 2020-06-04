
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

$(".visualRoll").slick({
    autoplay:true,//기본값 false
    autoplaySpeed:4000,//기본값3000 슬라이드 시간
    dots:true,//기본값 false 슬라이드 번호 버튼
    speed:400, //슬라이드 이동 시간
    slideToShow:1,//첫화면에 보여지는 슬라이드 수
    slideToScroll:1,//넘어가는 슬라이드 수
    pauseOnHover:false,//  슬라이드 멈춤 여부
    pauseOnDotsHover:true,//슬라이드 버튼 위에 마우스오버시 멈춤
    pauseOnFocus:false,//동그라미 버븐클릭시 자동실행 멈춤여부
    cssEase:"linear",//슬라이드 가속도
    draggable:true,//마우스 드래그시 움직임 여부
    fade:false,//넘어가는 방향(오->왼), true:제자리아웃온 효과
    arrows:true,//기본값true,슬라이드 방향 버튼
    prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
})

// $(".plpa").toggle(
//     function(){
//         $(".visualRoll").slick("slickPause")
//         $(this).find("i").removeClass("fa-pause").addClass("fa-play")
//     },
//     function(){
//         $(".visualRoll").slick("slickPlay")
//         $(this).find("i").removeClass("fa-play").addClass("fa-pause")
//     }
// )  

$(".plpa").on("click",function(){
    if($(this).find("i").hasClass("fa-pause")){
        $(".visualRoll").slick("slickPause")
        $(this).find("i").removeClass("fa-pause").addClass("fa-play")
    }else{ 
        $(".visualRoll").slick("slickPlay")
        $(this).find("i").removeClass("fa-play").addClass("fa-pause")
    }
})

$(".multi_visual").slick({
    autoplay:true,//기본값 false
    autoplaySpeed:2000,//기본값3000 슬라이드 시간
    dots:true,//기본값 false 슬라이드 번호 버튼
    speed:400, //슬라이드 이동 시간
    slidesToShow: 4,//첫화면에 보여지는 슬라이드 수
    slidesToScroll: 1,//넘어가는 슬라이드 수
    pauseOnHover:false,//  슬라이드 멈춤 여부
    pauseOnDotsHover:true,//슬라이드 버튼 위에 마우스오버시 멈춤
    pauseOnFocus:false,//동그라미 버븐클릭시 자동실행 멈춤여부
    cssEase:"linear",//슬라이드 가속도
    draggable:true,//마우스 드래그시 움직임 여부
    fade:false,//넘어가는 방향(오->왼), true:제자리아웃온 효과
    arrows:true,//기본값true,슬라이드 방향 버튼
    prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
})