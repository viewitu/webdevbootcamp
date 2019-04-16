var  express    = require("express"),
     app        = express(),
     bodyParser = require("body-parser"),
     methodOverride = require("method-override"),
     expressSanitizer = require("express-sanitizer"),
     mongoose   = require("mongoose"),
     //mongoose model config
     blogSchema = new mongoose.Schema({
         title: String,
         image: String,
         body: String,
         created: {type: Date, default: Date.now}
         }),
     Blog       = mongoose.model("Blog", blogSchema);
    //APP Config     
    mongoose.connect("mongodb://localhost/restful_blog_app");
    app.set("view engine", "ejs");
    app.use(express.static("public"));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(methodOverride("_method"));
    app.use(expressSanitizer());
    app.get("/" , function(req, res){
       res.redirect("/blogs");
   })
   //INDEX ROUTE
   app.get("/blogs", function(req, res){
       Blog.find({}, function (err, blogs){
           if(err){
               console.log("Error");
           }else{
              res.render("index", {blogs: blogs});
           }
       });
    })
    //NEW ROUTE
    app.get("/blogs/new",function(re,res){
        
            res.render("new");
        
    })
    
    //CREATE ROUTE
   app.post("/blogs", function(req,res){
       //create blog
       req.body.blog.body = req.sanitize(req.body.blog.body)
       Blog.create(req.body.blog, function(err, newBlog){
           if(err){
               res.render("new");
           }else{
               //redirect
               res.redirect("/blogs");
           }
       });
    })
    
    app.get("/blogs/:id", function(req, res){
        Blog.findById(req.params.id,function(err, foundBlog){
            if(err){
                res.redirect("/blogs");
            }else{
                res.render("show",{blog: foundBlog});
            }
        });
    })
    //EDIT Route
    app.get("/blogs/:id/edit", function(req,res){
        Blog.findById(req.params.id,function(err, foundBlog){
            if(err){
                res.redirect("/blogs");
            }else{
                res.render("edit", {blog: foundBlog});
            
            }
        });
    })
    
    //UPDATE ROUTE
    app.put("/blogs/:id",function (req,res){
        
        req.body.blog.body = req.sanitize(req.body.blog.body)
        Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err,updatedBlog){
            if(err){
                res.redirect("/blogs");
            }else{
                res.redirect("/blogs/" + req.params.id)
            }
        })
    })
    
    
    //  title
    //  img
    //  body
    //  created
    // RESTful Routes
    //DESTROY ROUTE
    app.delete("/blogs/:id", function(req,res){
       //destroy blog
       Blog.findByIdAndRemove(req.params.id, function(err){
           if(err){
               res.redirect("/blogs");
           }else{
               // Redirect
               res.redirect("/blogs");
           }
       })
    });
    
    app.listen(process.env.PORT, process.env.IP, function(){
        console.log("Blog Server is Running!");
    })