var express = require("express");
var router = express.Router();
var Blog = require("../models/Blog");

//Edit form
router.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, blog){
        if(err){
            console.log(err);
        } else {
            res.render("edit", {blog: blog});
        }
    });
});

//Update
router.put("/blogs/:id", function(req, res){
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, blog){
        if(err){
            console.log(err);
        } else {
            res.redirect("/blogs/"+ req.params.id);
        }
    });
});

module.exports = router;