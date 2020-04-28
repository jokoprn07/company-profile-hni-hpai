$(function(){

    // Smooth Scrolling

    $('a[href^="#"]').on('click', function(e){
    $target = $(this.hash);
    $jarak = 30;
    $('html, body').stop().animate({
        'scrollTop' : $target.offset().top - $jarak
    },1500,'easeInOutExpo',
    function(){
        window.location.hash = target;
        }
    )
    });






});
