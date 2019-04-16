#Databases

## Intro to Databases

* What is a Database?
    * A collection of information/data
    * Has an interface
* SQL(relational) vs. NoSQL(non-relational)
    *















USERS TABLE
id  |   name    |   age |   city
---------------------------------
1   |   Tim     |   57  |   NYC
2   |   Ira     |   24  |   Missoula
3   |   Sue     |   40  |   Boulder








COMMENTS TABLE
id  |       text
---------------------------------
1   |   "lol"
2   |   "Come visit Montana"
3   |   "I Love Puppies"
4   |   "Seriously Montana is great!"


USER/COMMENTS JOIN TABLE

userid      |   Comment ID
---------------------------
1           |       3
2           |       2
2           |       4
3           |       1




===================================
A NON-RELATIONAL DATABASE
===================================
{
    name: "Ira",
    age: "24",
    comments:[
    {text: "Come Visit Montana!"},
    {text: "Seriously Montana is great!!"}
    ]
}




#Our First Mongo Commands
* mongod
* mongo
* help
* show dbs
* use
* insert
* find
* update db.dogs.update({"name" : "Rusty"}, {$set: {"name" : "Tater", isCute : true}})
* remove


#Mongoose
*What is Mongoose
 A tool that helps interact with mongoDB with nodejs
*why are we using it

*Interact with a mong database using Mongoose 