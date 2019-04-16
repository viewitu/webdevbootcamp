//http://www.omdbapi.com/?apikey=[yourkey]&     http://www.omdbapi.com/?i=tt0076759&plot=full&apikey=thewdb
var express = require("express");
var app = express();
var request = require("request")
app.set("view engine", "ejs");


app.get("/", function(req,res){
    
    res.render("search");
    
});


app.get("/results", function(req,res){
    var query = req.query.movieSearch
    var url = 'http://www.omdbapi.com/?s=' + query + '&apikey=thewdb'
    request(url, function (error, response, body) {
// //   console.log('error:', error); // Print the error if one occurred
// //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// //   console.log('body:', body); // Print the HTML for the Google homepage.
    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body);
        res.render("results",{data: parsedData});
    }
    

//     var parsedData = JSON.parse(body);
//     console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]);
// }
// });
    // res.render http://www.omdbapi.com/?i=tt0076759&plot=full&apikey=thewdb
});
// request('', function (error, response, body) {
// //   console.log('error:', error); // Print the error if one occurred
// //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// //   console.log('body:', body); // Print the HTML for the Google homepage.
// if(!error && response.statusCode == 200){
//     var parsedData = JSON.parse(body);
//     console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]);
// }
 });
 app.listen(process.env.PORT, process.env.IP, function(){
        console.log("server has started");

 
});
