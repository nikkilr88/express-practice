/* global $ */
/* global items */
/* global localStorage */

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
  
  //CART
  //localStorage.removeItem("cart");
    if(localStorage.getItem("cart") === null) {
        $("#cart").html("Cart is empty.");
    } else {
        var items = JSON.parse(localStorage.getItem("cart"));
        items.forEach(function(item){
            console.log(item);
            $("#cart").append("<div><img src='"+ item.img+"'>"+ item.name +"</div>");
        })
    }
    
    $("#addCart").on("click", function(){
        var name = $(this).parent().find(".name").text();
        var price = $(this).parent().find(".price").text();
        var img = $(this).parent().find(".img").find("img").attr("src");
        
       if(localStorage.getItem("cart") === null){
           var items = [{name: name, price: price, img: img}];
           localStorage.setItem("cart", JSON.stringify(items));
           $("#cart").append("<div>"+ name +"</div>")
       } else {
           var items = JSON.parse(localStorage.getItem("cart"));
           console.log(typeof items)
           items.push({name: name, price: price, img: img});
           localStorage.setItem("cart", JSON.stringify(items));
       }
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