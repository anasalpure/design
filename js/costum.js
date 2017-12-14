
$(function(){
    
   // banner slider
    var  winH=$(window).height(),
         upperbarH=$('.upper-bar').innerHeight(),
         navbarH=$('.navbar').innerHeight();
    $('.banner').height(winH-(upperbarH+navbarH));

});

  
$(document).ready(function(){

  $(".owl-carousel").owlCarousel();

});


var rtl =$('body').prop('dir')=='rtl';
console.log(rtl);
var owl = $('.owl-carousel');
owl.owlCarousel({
    rtl:rtl,
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    nav:true,
    navText: ['<i class="fa fa-chevron-circle-left" aria-hidden="true"></i>','<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>'],
    lazyLoad:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }

});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})