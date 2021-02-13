// Requiring necessary npm packages
var express = require("express");
var mongoose = require("mongoose");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Requiring our routes
var htmlRoutes = require("./routes/html-routes.js");
htmlRoutes(app);
require("./routes/api-routes.js")(app); 

// Syncing our database and logging a message to the user upon success
app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });

