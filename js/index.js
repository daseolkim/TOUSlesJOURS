$("document").ready(function(){
    $(".main-slide-wrapper").slick({
        dir: true,
        dots: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2500
    });
    $(document).ready(function(){
        var time = 2;
        var $bar,
            $slick,
            isPause,
            tick,
            percentTime;
        
        $slick = $('.slider');
        $slick.slick({
        draggable: true,
        adaptiveHeight: false,
        dots: true,
        mobileFirst: true,
        pauseOnDotsHover: true,
        slidesToShow: 5,
        slidesToScroll: 1
        
        });
        
    
        
    });
})