var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperment: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a cat to the db
// var george = new Cat({
//     name: "Ms.Norris",
//     age: 111,
//     temperment: "Evil"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something Went Wrong!")
//     }else{
//         console.log("We Just saved a cat to the DB:")
//         console.log(cat);
//     }

// });
Cat.create({
    name: "Snow White",
    age: 15,
    temperment: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
        console.log("bazinga!");
            }else{
                console.log("Kitty Created");
                console.log(cat);
            }
            
}
)
//retrieve all cats from the database
Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh No");
        console.log(err);
    
    }else{
        console.log("All The Cats .......");
        console.log(cats);
    }
});