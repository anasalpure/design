
$(function(){

   // banner slider
    var  winH=$(window).height(),
         upperbarH=$('.upper-bar').innerHeight(),
         navbarH=$('.navbar').innerHeight();
    $('.banner').height(winH-(upperbarH+navbarH));

});

  
