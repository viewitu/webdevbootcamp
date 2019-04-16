var express                 =       require("express"),
    app                     =       express(),
    passport                =       require("passport"),
    mongoose                =       require("mongoose"),
    User                    =       require("./models/user"),
    bodyParser              =       require("body-parser"),
    LocalStrategy           =       require("passport-local"),
    passportLocalMongoose   =       require("passport-local-mongoose");
    
app.use(require("express-session")({
    secret: "Zach is F'ing awesome",
    resave: false,
    saveUninitialized: false
}));
 
    
mongoose.connect("mongodb://localhost/auth_demo_app");

app.set("view engine", "ejs");
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//===========================================================
//Routes Below here
//===========================================================
app.get ("/", function(req,res){
    res.render("home");
    
});

app.get('/secret',isLoggedIn, function(req,res){
    
    res.render('secret')
});

app.get('/register', function(req,res){
    res.render("register");
});

app.post('/register', function(req, res){
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password,function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res,function(){
            res.redirect("/secret");
        });
    });
    
});

// Login ROUTES
// render Login Form
app.get("/login", function(req,res){
    res.render('login');
});
// login logic
app.post('/login', passport.authenticate("local",{ 
    successRedirect: "/secret",
    failureRedirect: "/login"
}),function(req, res){
   
       
       
    
    
});

app.get("/logout",function(req,res){
    req.logout();
    res.redirect("/");
})

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login")
}
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started");
})