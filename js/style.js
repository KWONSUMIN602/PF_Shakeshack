$(function () {

    //*fast-nav 스크롤할 때 설정

    $(window).scroll(function () {

        if ($(this).scrollTop() > 150) {
            $("#up-btn").stop().fadeIn().css({
                "display": "block"
            });
            $("#main_fast_nav p").css({
                "color": "#828282"
            });

        } else {
            $("#up-btn").stop().fadeOut().css({
                "display": "none"
            });
            $("#main_fast_nav p").css({
                "color": "#fff"
            });

        };


    });


    //*fast-nav 위로 올리는 버튼 

    $("#up-btn").on("click", function () {
        $("html").stop().animate({
            scrollTop: 0
        }, 400);
        $("html").focus();
        return false;
    });


    //*모바일 버전 메뉴 설정 

    $("#hamburger-btn").on("click", function () {
        $("#mobile-btn").stop(500).slideToggle(300);
    });

    //*brand story 아이콘 클릭 했을 때

    $("#burger").on("click", function () {
        $("#ingredient").show();
        $("#green").hide();
        $("#born").hide();
        $("#neighbor").hide();
    });
    $("#recycle").on("click", function () {
        $("#ingredient").hide();
        $("#green").show();
        $("#born").hide();
        $("#neighbor").hide();
    });
    $("#home").on("click", function () {
        $("#ingredient").hide();
        $("#green").hide();
        $("#born").show();
        $("#neighbor").hide();
    });
    $("#handshake").on("click", function () {
        $("#ingredient").hide();
        $("#green").hide();
        $("#born").hide();
        $("#neighbor").show();
    });

    $(".menu").on("click", function () {
        $(this).addClass("btnactivate");
        $(this).siblings().removeClass("btnactivate");
    });



    //*menu 페이지 카테고리 체크박스 설정

    $(".chk").on("click", function () {
        var checked = true;

        $(".chk").each(function () {
            checked = checked && $(this).is(":checked");
        });

        $("#product_all").prop("checked", checked);

        //카테고리 요소들 체크시-내용
        if ($("#product_burger").is(":checked")) {
            $(".burger").show();
        } else {
            $(".burger").hide();
        }
        
        if ($("#product_chickenburger").is(":checked")) {
            $(".chickenburger").show();
        } else {
            $(".chickenburger").hide();
        }
        
        if ($("#product_flattopdog").is(":checked")) {
            $(".flattopdog").show();
        } else {
            $(".flattopdog").hide();
        }
        
        if ($("#product_side").is(":checked")) {
            $(".sides").show();
        } else {
            $(".sides").hide();
        }
        
         if ($("#product_custard").is(":checked")) {
            $(".custard").show();
        } else {
            $(".custard").hide();
        }
        
         if ($("#product_concretes").is(":checked")) {
            $(".concretes").show();
        } else {
            $(".concretes").hide();
        }
        
         if ($("#product_drinks").is(":checked")) {
            $(".drinks").show();
        } else {
            $(".drinks").hide();
        }
        
        if ($("#product_beer_wine").is(":checked")) {
            $(".beer_wine").show();
        } else {
            $(".beer_wine").hide();
        }
        
        if ($("#product_breakfast").is(":checked")) {
            $(".breakfast").show();
        } else {
            $(".breakfast").hide();
        }
        
        if ($("#product_woof").is(":checked")) {
            $(".woof").show();
        } else {
            $(".woof").hide();
        }
    });
    var checked = true;
    $("#product_all").on("click", function () {

        $(".chk").prop("checked", false);

        //전체상품보기 선택시-내용
        if ($(this).is(":checked")) {
            $(".detail").show();

        } else {
            $(".detail").hide();

        }
    });
});
