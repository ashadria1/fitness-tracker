var path = require("path");
var db = require("../models");

module.exports = function (app) {
  //index route
  app.get("/api/workouts", function (req, res) {
    db.Workout.find({}).sort({_id:-1})
    .then(dbWorkout => {
      const lastWorkout = dbWorkout[0];
      const {day, exercises, _id} = lastWorkout;
      let totalDuration = 0;
      exercises.forEach(exercise => {
        totalDuration += exercise.duration
      })
      const workoutInfo = {exercises, day, _id, totalDuration};
      
      console.log("This is the API workouts GET method", workoutInfo);
      res.json(workoutInfo);
    })
    .catch(err => {
      res.json(err);
    });
    
  });
  
  //Create Workout Session
  app.post("/api/workouts", function (req, res) {
    // API Workouts
    console.log(req.body, "API Workouts")
    db.Workout.create(req.body)
    .then(dbWorkout => {
      /* console.log(dbWorkout); */
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });

    //Add Exercise to a Workout Session
    app.put("/api/workouts/:workoutId", function (req, res) {
      console.log(req.params.workoutId);
      db.Workout.findOne({_id:req.params.workoutId})
        .then( dbOriginalWorkout =>{
          const oldExercise = dbOriginalWorkout.exercises;
          const updatedExercise = {exercises: [...oldExercise, req.body]} 
          return updatedExercise;
        })
        .then(function(updatedExercise){
          db.Workout.findByIdAndUpdate({_id:req.params.workoutId}, updatedExercise)
          .then(dbWorkout => {
            /* console.log(dbWorkout); */
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
        })
      
    });

    app.get("/api/workouts/range", function (req, res) {
      db.Workout.find({})
      .then(dbWorkout => {
        /* console.log(dbWorkout) */
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
      }
    )

};
