var express = require("express");

var app = express();

// "/" => "Hi There!"
app.get("/", function(req, res){
    res.send("Hi There, Welcome to my assignment!");
});


//===============================================================
 app.get("/speak/:animal", function(req,res){
    var animal = req.params.animal;
    var sounds = { 
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "splat",
        goldfish:"..."
    };
    var sound = sounds[animal];
    
    
     
     res.send("The " + animal + " says " + sound );
 });
 //=============================================================
 
 app.get("/repeat/:id/:num", function(req, res) {
     var subdir = req.params.id;
     var times = Number(req.params.num);
     var result = "";
     
     for(var i = 0; i < times ; i++){
         result += (subdir + " ");
     } ;
     res.send(result);
 });
 
 
 
 app.get("/r/:subredditName", function(req,res){
     var subdir = req.params.subredditName
     res.send("welcome to the " + subdir + " menu");
 });
 app.get("/r/:subredditName/comments/:id/:title/", function(req,res){
     res.send("welcome to the comments page");
 });
 


app.get("*",function(req, res) {
    res.send("App not found what are you doing with your life")
})

 app.listen(process.env.PORT, process.env.IP, function(){
        console.log("server has started");

 
});


   