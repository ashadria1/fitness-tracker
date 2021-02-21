const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const db = require("./models");

const PORT = process.env.PORT || 8080;

/* const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://username:password@cluster0.jtetc.mongodb.net/fitness-tracker?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
}); */

mongoose.connect(
  process.env."mongodb+srv://username:password@cluster0.jtetc.mongodb.net/fitness-tracker?retryWrites=true&w=majority" || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

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
