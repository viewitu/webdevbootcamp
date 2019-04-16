Note about RESTful Blog App: Final Touches
Section 29, Lecture 279
Hi All,

In the next lecture, around the 4 minute and 10 second mark, Colt cuts the sanitizer code from the create (post) route. You should leave this code there and copy it instead. Both the create and update routes need the sanitization code.

Also, if you get the Cannot read property 'substring' of undefined error then you have Blog post(s) in the database that don't have a body property. This can be fixed by removing the existing blogs from the database (mongo shell). You can also add client side validation to the form to ensure that the body property gets added by adding the required attribute to the opening <textarea> tag.

--------
Cheers,
Ian

 
