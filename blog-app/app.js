var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose");
    
var indexRoutes = require("./routes/index"),
    createRoutes = require("./routes/create"),
    showRoute = require("./routes/show"),
    destroyRoute = require("./routes/destroy"),
    updateRoutes = require("./routes/update");
 
//App Config   
mongoose.connect("mongodb://localhost/blog-app", {useMongoClient: true});
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));

//Require Routes
app.use(indexRoutes);
app.use(createRoutes);
app.use(showRoute);
app.use(destroyRoute);
app.use(updateRoutes);

//Start Server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started!");
});