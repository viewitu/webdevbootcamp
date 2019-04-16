var express = require("express");

var app = express();

// "/" => "Hi There!"
app.get("/", function(req, res){
    res.send("Hi There!");
});
 app.get("/bye", function(req,res){
     res.send("Goodbye!!");
 });app.get("/dog", function(req,res){
     res.send("Meow Baby!!!!");
 });
 app.get("/r/:subredditName", function(req,res){
     var subdir = req.params.subredditName
     res.send("welcome to the " + subdir + " menu");
 });
 app.get("/r/:subredditName/comments/:id/:title/", function(req,res){
     res.send("welcome to the comments page");
 });
 

 app.listen(process.env.PORT, process.env.IP, function(){
        console.log("server has started");

 
});
   
