Note about comment model lecture
Section 31, Lecture 290
Hi Everyone!

In the next few lectures you will learn how to add comments to your project. During this process you may run into the following error: TypeError: Cannot read property 'push' of undefined 

Colt will show you how to remedy this issue by making a reference to the Comment model from within the Campground model. Just be sure to complete the Comment Model lecture and you won't have any issues.

Furthermore, your Campground and Comment models will look like this:

/models/campground.js

var mongoose = require("mongoose");
 
var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});
 
module.exports = mongoose.model("Campground", campgroundSchema);
/models/comment.js

var mongoose = require("mongoose");
 
var commentSchema = new mongoose.Schema({
    text: String,
    author: String
});
 
module.exports = mongoose.model("Comment", commentSchema);


Thanks,
Ian
Course TA

 
