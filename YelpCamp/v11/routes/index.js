var express = require("express"),
    router  = express.Router(),
    passport= require("passport"),
    User    = require("../models/user");
    
router.get("/", function(req,res){
    res.render("landing")
    
});

// Authorization ROUTES

router.get("/register", function(req, res){
    res.render(("register"));
});
//signup logic
router.post("/register",function(req,res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err,user){
        if(err){
            
            req.flash("error", err.message);
            return res.redirect("/register");
        }
        passport.authenticate("local")(req,res,function(){
            req.flash("success", "Welcome to YelpCamp " + user.username);
            res.redirect("/campgrounds");
        });
    });
});
// Show Login Form
router.get("/login", function(req, res) {
    res.render("login");
});
// Handling login logic
router.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), function(req,res){
    
});


router.get("/logout",function(req,res){
    req.logout();
    req.flash("success", "Logged You Out!");
    res.redirect("/campgrounds");
});

module.exports = router;