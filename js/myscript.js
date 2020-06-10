$(window).scroll(function(){
    var sct = $(this).scrollTop();
   if ( $("html").hasClass("mobile") ) {
            if ( sct>50 ) { 
                    $(".to_top").show()
            } else {
                    $(".to_top").hide()
            }
   } else {
           $(".to_top").show()
   }
   
   if ( sct > 1000 ) {
           $(".appbbs_box").addClass("on")
   } else {
           $(".appbbs_box").removeClass("on")
   }


})

$(".to_top").on("click", function(){
    $("body, html").animate({scrollTop:"0px"}, 600)
})

var winWidth;
function init() {
    winWidth = $(window).width()
    if ( winWidth > 799 ) {
            $("#header").removeClass("on")
            $("html").addClass("minTb").removeClass("mobile")
            $(".to_top").show()
    } else {
            $("html").addClass("mobile").removeClass("minTb")
    }
}


$(window).resize(function(){
    init()
})

$(window).load(function(){
    $(".loadingAni").delay(1000).fadeOut(500)
    init()
})


$(".depth1 > li > a").on("mouseover  focus", function(){
            if ( $(this).parents("#header").hasClass("on") ) {
                    $(this).next().fadeOut(0)
            } else { 
                    $(this).next().stop().fadeIn(200)
                    $(this).parent().siblings().children(".dep2box")
                    .stop().fadeOut(200)
            }
})
$(".depth1 > li").on("mouseleave", function(){
    $(this).children(".dep2box").stop().fadeOut(200)
})
$(".depth1 >li:last   .depth2 > li:last > a").on("blur", function(){
$(this).parents(".dep2box").stop().fadeOut(200)
})


$("#header  .openMOgnb").on("click", function(){
   if ( !$(this).parents("#header").hasClass("on") ) {
            $(this).parents("#header").addClass("on")
   }
})

$("#header  .closeMOgnb").on("click", function(){
  $(this).parents("#header").removeClass("on")
})


var lieq;   // 전역변수
$(".place_list > li > a").on("click", function(e){
    e.preventDefault();
    lieq = $(this).parent().index()
    var href = $(this).attr("href")
    var src = $(this).attr("data-src")
    var text = $(this).find("h3").text()
    var info = $(this).find("p").text()
    var alt = $(this).find("img").attr("alt")
    $(".popupBox").addClass("on")
    if (winWidth <= 799 ) {
            var litop = $(this).parent().offset().top;
            $(".popupBox  .inner").css({
                    top:litop,
                    width:"80%",
                    left:"0%",
                    transform:"translate(0%)",
                    margin:"0  10%"
            })
    }
    $(".popupBox   .inner  h3").text(text)
    $(".popupBox   .inner   p").text(info)
    $(".popupBox   .inner   div  a").attr("href", href)
    $(".popupBox   .inner   div  img").attr("src", src).attr("alt", alt).attr("width", "100%")
})

$(".popupBox  button.close").on("click", function(){
    $(this).parents(".popupBox").removeClass("on")
})

$(".popupBox   button.next").on("click", function(){
   ++lieq;     //   0, 1, 2, 0, 
   if ( lieq == $(".place_list >li").length ) {
           lieq = 0;
   }
   var href = $(".place_list > li").eq(lieq).find("a").attr("href")
    var src = $(".place_list > li").eq(lieq).find("a").attr("data-src")
    var text = $(".place_list > li").eq(lieq).find("a").find("h3").text()
    var info = $(".place_list > li").eq(lieq).find("a").find("p").text()
    var alt = $(".place_list > li").eq(lieq).find("a").find("img").attr("alt")
   $(".popupBox   .inner  h3").text(text)
   $(".popupBox   .inner   p").text(info)
   $(".popupBox   .inner   div  a").attr("href", href)
   $(".popupBox   .inner   div  img").attr("src", src).attr("alt", alt).attr("width", "100%")
})

$(".popupBox   button.prev").on("click", function(){
    --lieq;     //   2, 1, 0, 2, 1, 0
    if ( lieq < 0 ) {
            lieq = 2;
    }
    var href = $(".place_list > li").eq(lieq).find("a").attr("href")
     var src = $(".place_list > li").eq(lieq).find("a").attr("data-src")
     var text = $(".place_list > li").eq(lieq).find("a").find("h3").text()
     var info = $(".place_list > li").eq(lieq).find("a").find("p").text()
     var alt = $(".place_list > li").eq(lieq).find("a").find("img").attr("alt")
    $(".popupBox   .inner  h3").text(text)
    $(".popupBox   .inner   p").text(info)
    $(".popupBox   .inner   div  a").attr("href", href)
    $(".popupBox   .inner   div  img").attr("src", src).attr("alt", alt).attr("width", "100%")
})





$(".visualRoll").slick({
    autoplay:true,  // 자동재생
    autoplaySpeed:3000, // 간격시간
    dots:true, // 동그라미버튼
    speed:600, // 바뀌는시간(생략가능)
    slidesToShow:1, // 보여질슬라이드수(생략가능)
    slidesToScroll:1, // 이동슬라이드수(생략가능)
    pauseOnHover:true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover:true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus:false,  // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase:'linear', // 속도함수(생략가능)
    draggable:true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade:false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows:true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prevArrow  marrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="nextArrow  marrow"><i class="fas fa-angle-right"></i></button>',
})

// $(".plpa").toggle(
//         function(){
//                 $(".visualRoll").slick("slickPause")
//                 $(this).find("i").removeClass("fa-pause").addClass("fa-play")
//         },
//         function(){
//                 $(".visualRoll").slick("slickPlay")
//                 $(this).find("i").removeClass("fa-play").addClass("fa-pause")
//         }
// )

$(".main_rolling_pc  .plpa").on("click", function(){
    if (  $(this).find("i").hasClass("fa-pause")  ) {
            $(".visualRoll").slick("slickPause")
            $(this).find("i").removeClass("fa-pause").addClass("fa-play")
    } else {
            $(".visualRoll").slick("slickPlay")
            $(this).find("i").removeClass("fa-play").addClass("fa-pause")
    }
})

$(".multi_visual").slick({
    autoplay:true,  // 자동재생
    autoplaySpeed:3000, // 간격시간
    dots:false, // 동그라미버튼
    speed:600, // 바뀌는시간(생략가능)
    centerMode:true,
    centerPadding:"80px",
    slidesToShow:3, // 보여질슬라이드수(생략가능)
    slidesToScroll:1, // 이동슬라이드수(생략가능)
    pauseOnHover:true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover:true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus:false,  // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase:'linear', // 속도함수(생략가능)
    draggable:true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade:false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows:true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prevArrow  marrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="nextArrow  marrow"><i class="fas fa-angle-right"></i></button>',
    responsive:[{
            breakpoint: 800,
            settings:{
                    centerMode:true,
                    centerPadding:"100px",
                    slidesToShow:1, // 보여질슬라이드수(생략가능)
            }
    }]
})