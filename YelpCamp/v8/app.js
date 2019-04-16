var     express     =   require("express"),
        app         =   express(),
        bodyParser  =   require("body-parser"),
        mongoose    =   require("mongoose"),
        passport    =   require("passport"),
        localStrategy=   require("passport-local"),
        User        =   require("./models/user"),
        Campground  =   require("./models/campground"),
        Comment     =   require("./models/comment"),
        seedDB      =   require("./models/seeds");
        
var commentRoutes   =   require("./routes/comments"),
    campgroundRoutes=   require("./routes/campground"),
    authRoutes      =   require("./routes/index");
   
mongoose.connect("mongodb://localhost/yelp_camp_v8");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
// seedDB();
//Passport Configuration
app.use(require("express-session")({
    secret: "Zach is F'in awesome",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

app.use(authRoutes);
app.use(campgroundRoutes);
app.use(commentRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has Started!!!");
}) 


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
    