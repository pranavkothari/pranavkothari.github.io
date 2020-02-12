// Hi there this is js file
$(document).scroll(function (){
    var y = $(this).scrollTop();
    if (y > 300) {
        $(".footer-top").fadeIn();
    }
    else {
        $(".footer-top").fadeOut();
    }
});

$(document).ready(function(){
    $('.footer-top').click(function(){
        scrollTo(0,0);
    });
});
