var express = require("express");
var app = express();
var Items = require("./inventory.js");

//APP CONFIG
app.use(express.static(__dirname+"/public"));
app.set("view engine", "ejs");


//ROUTES
app.get("/", function(req, res){
   res.render("index", {Items: Items}); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Sever started..."); 
});