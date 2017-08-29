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
        var total = 0;
        items.forEach(function(item, index){
            console.log(item);
            total += Number(item.price);
            $("#cart").append("<div class='cartItem'><img src='"+ item.img+"'><div>"+ item.name + "</div><div>$" + item.price +"</div><div><button data-index='"+index+"' class='removeCartItem'>Remove</button></div></div>");
        });
        $("#total").text(total);
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
    
    $(".removeCartItem").on("click", function(){
       var items = JSON.parse(localStorage.getItem("cart"));
       var index = $(this).data("index");
      
       items.splice(index, 1);
       localStorage.setItem("cart", JSON.stringify(items));
       $(this).parent().parent().remove();
    });
  
});

 //SHOW BOX
 function getIndex(items, index){

      $(".showBox .name").html(items[index].name);
    	$(".showBox .img").html("<img src='"+ items[index].image + "'>");
    	$(".showBox .description").html("<p>" + items[index].description + "</p>");
    	$(".showBox .status").html(items[index].status);
    	$(".showBox .price").html(items[index].price);
    	
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