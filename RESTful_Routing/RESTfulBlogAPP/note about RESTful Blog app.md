Note about RESTful Blog App: New and Create
Section 29, Lecture 273
Hello Everyone,

In the next lecture Colt introduces a new format for sending data to the server from a form.

Up to this point you have used the name attribute like so:

<input type="text" name="title"> 

Now Colt will write it like this:

<input type="text" name="blog[title]"> 

What this will do is, instead of making the value for title available directly from req.body.title it will put it inside of an object, like so: req.body.blog.title 

Now all of the values from the inputs in the form get added into one object (req.body.blog) and you can easily input that data into the database simply by passing in req.body.blog to Blog.create()

Once in the POST route, the req.body.blog object will look something like this:

{
  title: "Hello world",
  description: "This is a blog post"
}
I've commented on this further here, including the reason why we use the name="blog[title]" syntax instead of name="blog['title']" or name="blog.title" 

TL;DR: this syntax is specific to body-parser.

Please let me know if you have any questions by replying to the thread linked above.


cheers,
Ian



