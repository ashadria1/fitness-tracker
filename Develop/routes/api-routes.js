var path = require("path");
var db = require("../models");

// changed Book to Workout...

module.exports = function (app) {
  //index route
  app.get("/api/workouts", function (req, res) {
    db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
    
  });
  
  //Create Workout session
  app.post("/api/workouts", function (req, res) {
    db.Workout.create({})
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });

    //Add Exercise session
    app.put("/api/workouts/:workoutId", function (req, res) {
      console.log(req.params.workoutId);
      db.Workout.create({})
      .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
    });
};

