var express = require("express");
var router = express.Router();
var Blog = require("../models/Blog");

//Redirect to /blogs
router.get("/", function(req, res){
   res.redirect("/blogs");
});

//Blog Index
router.get("/blogs", function(req, res){
    Blog.find().sort({_id: -1}).find({}, function(err, blogs){
        if(err){
            console.log(err);
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

module.exports = router;