var express = require("express"),
    router  = express.Router({mergeParams: true});
    var Campground = require("../models/campground");

//=================================================================
//Campground ROUTES
//=================================================================
router.get("/campgrounds", function(req,res){
    //get all campgrounds from db
    Campground.find({},function(err, allCampgroundsDB){
        if (err){
            console.log("Something went wrong" + err);
        }else{
            res.render("campgrounds/index",{campgrounds: allCampgroundsDB, currentUser: req.user});
            
        }
    });
   // res.render("campgrounds",{campgrounds: campgrounds});
    
});

//Create - add new campground to DB
router.post("/campgrounds", isLoggedIn, function(req,res){ //same URL just on a post instead of a get
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {name: name, image: image, description: desc, author: author};
    // Create a campground and save it to the DB was campgrounds.push(newCampground); with array
    Campground.create(newCampground, function(err, createCampgroundDB){
        if(err){
            console.log(err);
        }else{
             // redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});
router.get("/campgrounds/new",isLoggedIn, function(req,res){
    
    //get data from form and add to campgrounds array
    res.render("campgrounds/new")
    // redirect back to campgrounds page
    
    
});


//SHOW - Show info about one item in the database
router.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            console.log(foundCampground)
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
//render that campground
});
function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}
module.exports = router;