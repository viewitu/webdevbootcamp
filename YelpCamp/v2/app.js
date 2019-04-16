var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/yelpcamp");




//Schema Setup

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: "Granite Hill",
//     image: "https://cdn.pixabay.com/photo/2015/09/02/13/14/highlands-918954__340.jpg",
//     description: "Huge granite hill, No Bathrooms, No Water, Just Beautiful Granite "
// }, function(err, campground){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("New Campground: " + campground);
//     }
// });



    // {name: "Mountain Goats Rest", image: "https://farm1.staticflickr.com/82/225912054_690e32830d.jpg"},
    
    
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.render("landing")
    
});
app.get("/campgrounds", function(req,res){
    //get all campgrounds from db
    Campground.find({},function(err, allCampgroundsDB){
        if (err){
            console.log("Something went wrong" + err);
        }else{
            res.render("index",{campgrounds: allCampgroundsDB});
            
        }
    });
   // res.render("campgrounds",{campgrounds: campgrounds});
    
});
app.post("/campgrounds", function(req,res){ //same URL just on a post instead of a get
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
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
app.get("/campgrounds/new", function(req,res){
    
    //get data from form and add to campgrounds array
    res.render("new")
    // redirect back to campgrounds page
    
    
});


//SHOW - Show info about one item in the database
app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            res.render("show", {campground: foundCampground});
        }
    });
    



//render that campground
    
    
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has Started!!!")
}) ;