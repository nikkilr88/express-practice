var express = require("express");
var router = express.Router();
var Blog = require("../models/Blog");

//New 
router.get("/blogs/new", function(req, res){
    res.render("new");
});

//Create
router.post("/blogs", function(req, res){
    Blog.create(req.body.blog, function(err, blog){
        if(err){
            console.log(err);
        } else {
            res.redirect("/blogs");
        }
    });
});

module.exports = router;