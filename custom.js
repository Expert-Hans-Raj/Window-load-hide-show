$(window).on('load', function () {
  setTimeout(function(){ 
    var menUrl = $(".get_men").attr("href");  
    var womenUrl = $(".get_women").attr("href");
    var pageURL = $(location).attr("href");
    //alert(menUrl+"  "+womenUrl+"  "+pageURL );
    $(".menu-item").eq(1).addClass("all");
    $(".menu-item").eq(2).addClass("formen");
    $(".menu-item").eq(3).addClass("forwomen");
    if(pageURL === menUrl )
    {
      $(".all").css("display", "none");
      $(".formen").css("display","block");
      $(".forwomen").css("display","none");
    } else if(pageURL === womenUrl) {
      $(".all").css("display", "none");
      $(".formen").css("display","none");
      $(".forwomen").css("display","block");
    } else{
      $(".all").css("display", "block");
      $(".formen").css("display","none");
      $(".forwomen").css("display","none");
    }


  }, 100);
});
