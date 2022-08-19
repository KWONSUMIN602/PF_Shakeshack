
$(document).ready(function () {

    var $thenews = $(".thenews").find("ul");
    var $thenewsWidth = $thenews.children().outerWidth(); 
    var $thenewsHeight = $thenews.children().outerHeight(); 
    var $thenewsLength = $thenews.children().length;
    var rollingId;

    rollingId = setInterval(function () {
        rollingStart();
    }, 2000);

    
    //마우스 오버시 롤링을 멈춘다.
    $thenews.mouseover(function () {
        //중지
        clearInterval(rollingId);
        $(this).css("cursor", "pointer");
    });
    
    //마우스 아웃되면 다시 시작
    $thenews.mouseout(function () {
        rollingId = setInterval(function () {
            rollingStart();
        }, 2000);
        $(this).css("cursor", "default");
    });

    function rollingStart() {
        $thenews.css("height", $thenewsHeight + "px");
        $thenews.animate({
            top: -$thenewsHeight + "px"
        },1500, function () {
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
            $(this).find("li:first").remove();
            $(this).css("left", 0);
        });
    }
});

