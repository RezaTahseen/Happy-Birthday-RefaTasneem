$("img").click(function(){
    $(".envelope").addClass("open");
    $("img").fadeOut();
  });
  
  $(".cake").click(function(){
    $(".cake").css("display","none");
    $("img").fadeIn();
    $(".envelope").fadeIn();
    setTimeout(function(){
      location.reload();
  }, 30000);
  });

  
  