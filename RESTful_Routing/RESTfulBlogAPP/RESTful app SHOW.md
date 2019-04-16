Note about RESTful Blog App: SHOW
Section 29, Lecture 275
Hi Everyone!

In the next lecture Colt will introduce a way to shorten text with the .substring() method.

Due to the way the app has been built thus far, this may cause an error for you.

If you get the following error: Cannot read property 'substring' of undefined then you have Blog post(s) in the database that don't have a body property. 

This can be fixed by removing the existing blogs from the database (mongo shell). 

You can also add client side validation to the form to ensure that the body property always gets added by adding the required attribute to the opening <textarea> tag.

--------
Cheers,
Ian Learn more

 
