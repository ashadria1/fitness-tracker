var path = require("path");
var db = require("../models");

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

    //Add Exercise to a workout session
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

    // GET route to return the last 7 workouts
    Router.get("/api/workouts/range", (req,res) => {
      Workout.find({})
      .sort({"day": -1})
      .limit(7)
      .then((workouts) => {
        res.json(workouts);
      }).catch((err) => {
        res.json(err);
      });
    });
};

