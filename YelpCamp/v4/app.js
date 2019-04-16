var     express     =   require("express"),
        app         =   express(),
        bodyParser  =   require("body-parser"),
        mongoose    =   require("mongoose"),
        Campground  =   require("./models/campground"),
        Comment     =   require("./models/comment"),
        seedDB      =   require("./models/seeds");
        
seedDB();
mongoose.connect("mongodb://localhost/yelpcamp_v4");

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
            res.render("campgrounds/index",{campgrounds: allCampgroundsDB});
            
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
    res.render("campgrounds/new")
    // redirect back to campgrounds page
    
    
});


//SHOW - Show info about one item in the database
app.get("/campgrounds/:id", function(req, res){
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

//===========================
// COMMENTS ROUTES
//===========================


app.get("/campgrounds/:id/comments/new",function(req, res) {
    //find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        }else{
            res.render("comments/new",{campground: campground});
        }
    })
    
});

app.post("/campgrounds/:id/comments", function(req,res){
    //lookup campground using ID
    Campground.findById(req.params.id,function(err,campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        }else{
            //create new comment
            //console.log(req.body.comment)
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                }else{
                    //connect new comment to campground
                    campground.comments.push(comment);
                    campground.save();
                    //redirect to campground show page
                    res.redirect("/campgrounds/" + campground._id);
                }
            })
            
        }
    })
    
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has Started!!!")
}) ;


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
    
    
