var express = require("express");
var app = express();
// can also be var app = require("express")();

app.use(express.static("assets/styles"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

app.get("/love/:thing", function(req,res){
    var thing = req.params.thing;
    res.render("love",{thingVar: thing});
});

app.get("/posts", function(req,res){
    var posts = [
        {title: "Steak Parm", author: "John"},
        {title: "Chicken Catatory", author: "Penelope"},
        {title: "Spagetti", author:"Audrey"},
        ];
        
    res.render("posts",{posts: posts});
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening");
});