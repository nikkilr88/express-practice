/* global $ */
/* global items */

$(document).ready(function(){
   //START CAROUSEL
  //Pause carousel on small devices
  if($(window).width() <= 600){
    $('.carousel').carousel({
      pause: true,
      interval: false
    });
  } 
 
  //LIMIT ITEM DESCRIPTION LENGTH
  $("main").find(".item .description").text(function(_, text) {
            return $.trim(text).substring(0, 100);
          }).append("...");
 
  //Close show box
  $(".showBox .fa-times").on("click", function(){
  	$(".showBox").hide("fade");
  	$("body").css("overflow","auto");
  });
  
  //SORT ITEMS
  $("#types").on("change", function(){
    var type = $(this).val();
    
    $("#items .item").each(function(){
       if($(this).data("type") === type){
           $(this).show();
       } else if(type === "all"){
           $(this).show();
       } else {
           $(this).hide();
       }
    });

  });
  
});

 //SHOW BOX
 function getIndex(items, index){

      $(".showBox .name").html(items[index].name);
    	$(".showBox .img").html("<img src='"+ items[index].image + "'>");
    	$(".showBox .description").html("<p>" + items[index].description + "</p>");
    	$(".showBox .status").html(items[index].status);
    	$(".showBox .price").html("$" + items[index].price);
    	
    	//Set status color
    	if(items[index].status == "OUT OF STOCK") {
    	  $(".showBox .status").css("color","red");
    	} else {
    	  $(".showBox .status").css("color","green");
    	}
    	
    	//Display box
    	$(".showBox").show("fade");
    	$("body").css("overflow","hidden");
  
  }  