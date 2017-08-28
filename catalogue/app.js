var express = require("express");
var app = express();
var mongoose = require("mongoose");
var Item = require("./models/item");
var seedDB = require("./seeds.js");

mongoose.connect("mongodb://localhost/catalogue", {useMongoClient: true});

//APP CONFIG
app.use(express.static(__dirname+"/public"));
app.set("view engine", "ejs");
seedDB();

//ROUTES
app.get("/", function(req, res){
   Item.find({}, function(err, items){
      if(err){
         console.log(err);
      } else {
         res.render("index", {Items: items});
      }
   })
    
});

app.get("/about", function(req, res){
   res.render("about");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Sever started..."); 
});