$(".main-skills").on({
    mouseenter: function(){
      $(this).css("background-color", "var(--yellow)");
    }, 
    mouseleave: function(){
      $(this).css("background-color", "var(--light-grey");
    }, 
    click: function(){
      $(this).css("display", "none");
    } 
  });

$(".main-skills").on({
    click: function(){
        $(".main-grid").css("grid-template-rows", "1fr 1fr 0fr 0.5fr 0.1fr");
    } 
  });

  $(".main-skills").on({
    click: function(){
        $("#reopen").css("display", "block");
    } 
  });

  $(".main-tools").on({
    mouseenter: function(){
      $(this).css("background-color", "var(--yellow)");
    }, 
    mouseleave: function(){
      $(this).css("background-color", "var(--light-grey");
    }, 
    click: function(){
      $(this).css("display", "none");
    } 
  });

$(".main-tools").on({
    click: function(){
        $(".main-grid").css("grid-template-rows", "1fr 1fr 0fr 0fr 0.1fr");
    } 
  });

  $(".main-tools").on({
    click: function(){
        $("#reopen").css("display", "block");
    } 
  });