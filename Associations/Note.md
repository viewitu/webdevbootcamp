Note about potential MongoDB $pushAll error
Section 30, Lecture 281
Hi Everyone!

In the next few lectures you may run into an error in your terminal that looks like this:

MongoError: Unknown modifier: $pushAll 

This will only happen if you're using MongoDB version 3.6 (if you're using 3.4 then you won't see this error).

If you encounter this error then you can find a solution for it here, otherwise bookmark this lecture/article in case you run into this error in the future.

Update January 9th, 2018
This issue shouldn't happen anymore if you're using MongoDB 3.6.1 (latest version as of today) and Mongoose 5.0.0-rc2 (also the latest version) see here for instructions on how to update if you don't have the latest versions of both MongoDB and Mongoose.

-------
Thanks,
Ian





