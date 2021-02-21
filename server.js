const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const db = require("./models");

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// VIEW ROUTES
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "public/stats.html"));
});

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "public/exercise.html"));
});

// API ROUTES
app.get("/api/workouts", async (req, res, next) => {
  try {
    const workouts = await db.Workout.find({});
    res.json(workouts);
  } catch (err) {
    next(err);
  }
});

app.get("/api/workouts/range", async (req, res, next) => {
  try {
    const workouts = await db.Workout.find({}).limit(7).sort({ day: -1 });
    res.json(workouts);
  } catch (err) {
    next(err);
  }
});

app.put("/api/workouts/:id", async (req, res, next) => {
  try {
    const workout = await db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } });
    res.json(workout);
  } catch (err) {
    next(err);
  }
});

app.post("/api/workouts", async (req, res, next) => {
  try {
    const workout = await db.Workout.create({});
    res.json(workout);
  } catch (err) {
    next(err);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

/* // Requiring necessary npm packages
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

 */