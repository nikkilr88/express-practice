var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    User = require("./models/user"),
    localStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");
    
mongoose.connect("mongodb://localhost/secret-page", {useMongoClient: true});

//App config
app.use(require("express-session")({
    secret: "Shh, this is a secret",
    resave: false,
    saveUninitialized: false
}));


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Routes
app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret");
});

//Auth Routes

//Show form
app.get("/register", function(req, res){
   res.render("register", {err: undefined}); 
});

//Handle signup
app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register", {err: err});
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/secret");
           console.log(user);
        });
    });
});

//Show login form
app.get("/login", function(req, res){
   res.render("login"); 
});

//Handle login
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: '/login'
}), function(req, res){
});

//Logout
app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

//Start server
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server started..."); 
});