Mattify App is a Web Application that allows users to sign into the site using Google Authentication, and be able to create, read, update and delete playlists as they deem necessary. It was built using Node.Js/Express.Js for the backend configuration. MongoDB is used storing our data remotely to be able to access different artists and songs for application. Also includes uses EJS for rendering the frontend of the application.

The backend of the app uses RESTful routing conventions to CRUD data for playlists. The artist data was added to the MongoDB using a seed.js and data.js file to export and push to our remote database.

Difficulties:
The biggest difficulties that I had to deal with were distinguishing between whether or not to use Embedded or Referencing data relationships. Also not making things too complicated in the way the all related to each other. The artist schema was the main model the was used and the songs schema was embedded within that to make it easier when calling the data.

My favorite part of this project was actually creating the models, routes and controllers. Once you understood the flow of how everything was supposed to work and what routes to take it actually started to get pretty fun. It also made debugging a bit easier as well.

Ice Box Features
I want to actually add the spotify api so then I can have a larger catalog of songs availible for users to add and also add a media button where you can play/pause/like the songs/artist.
