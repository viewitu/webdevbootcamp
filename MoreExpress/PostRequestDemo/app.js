var express =require("express");
var app = express();
var bodyParser = require("body-parser"); 
// can also be var app = require("express")();

 app.use(bodyParser.urlencoded({extended: true}));
 app.use(express.static("assets/styles"));
 app.set("view engine", "ejs");
 var friends = ["Tony", "Miranda", "Blake", "Justin", "Pierre", "Lily"];

 app.get("/", function(req, res){
    res.render("index");
});


 app.get("/friends",function(req,res){
     
     res.render("friends", {friends: friends});
 });

app.post("/addfriend", function(req,res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});
 app.listen(process.env.PORT, process.env.IP, function(){
        console.log("server has started");
 });