var express = require("express");
var router = express.Router();
var Blog = require("../models/Blog");

//Show
router.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, blog){
        if(err){
            console.log(err);
        } else {
            res.render("show", {blog: blog});
        }
    });
});

module.exports = router;