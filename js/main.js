$(document).ready(function() {

    $(".wrap .menu button").on("click", function() {
        $("nav").css("left", "0");
    });
    $("nav .btn .close").on("click", function() {
        $("nav").css("left", "-100%");
    });


    $(".gnb .menu").mouseover(function(){
        $(this).find('a').css({
            "background-color": "black",
            "color": "white"
        });
        $(this).find(".submenu").stop().show().css({
            "background-color": "black",
            "color": "white"
        });
    });
    $(".gnb .menu").mouseout(function(){
        $(this).find('a').css({
            "background-color": "",
            "color": ""
        });
        $(this).find(".submenu").stop().hide().css({
            "background-color": "",
            "color": ""
        });
    });

    var swiper = new Swiper(".mainSwiper", {
         autoplay: {
             delay: 3000
         },
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
    });

    const images = [
        "./images/navwomen@2x-100.jpg",
        "./images/navmen@2x-100.jpg",
        "./images/navkids@2x-100.jpg",
        "./images/navbaby@2x-100.jpg",
        "./images/navsports@2x-100.jpg",
        "./images/navhome@2x-100.jpg",
        "./images/navhm@2x-100.jpg"
    ]

    $(".gnb .menu").on("mouseenter", function() {
        const i = $(this).index();
        $(".navimg img").attr("src",images[i]);
    });
    $(".gnb").on("mouseleave", function() {
        $(".navimg img").attr("src", "");
    });

    $("main .wrap .btn button").on("click", function() {
        const i = $(this).index();
        
        $("main .wrap .mainimg").hide();

        // 화면 크기에 따라 레이아웃 방식 선택 후 보이기
        if (window.matchMedia("(min-width: 1200px)").matches) {
            // 1200px 이상일 때는 grid 레이아웃 적용
            $("main .wrap .mainimg").eq(i).css("display", "grid").show();
        } else {
            // 1200px 미만일 때는 flex 레이아웃 적용
            $("main .wrap .mainimg").eq(i).css("display", "flex").show();
        }
    });
      $("main .wrap .mainimg").hide();
      $("main .wrap .mainimg").first().show();
});
