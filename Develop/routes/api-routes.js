var path = require("path");
var db = require("../models");

module.exports = function (app) {
  //index route
  app.get("/api/workouts", function (req, res) {
    db.Workout.find({})
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
    
  });
  
  //Create Workout Session
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

    //Add Exercise to a Workout Session
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
/* 
    async getWorkoutsInRange() {
      const res = await fetch(`/api/workouts/range`);
      const json = await res.json();
  
      return json;
    },
     */
/* 
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

    // workouts in range
// sort by day and limit to one week (7 days)
router.get("/api/workouts/range", (req, res) => {
  let oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 8);
  // let oneWeekAgoUnix = Date.parse(oneWeekAgo);
  db.Workout.find({})
    .sort({ day: 1 })
    .where("day")
    .gte(oneWeekAgo)
    // .where("day").gte(oneWeekAgoUnix)
    // .limit(7)

    .then((weekWorkouts) => {
      res.json(weekWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET route to find last 7 workouts
Router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
      .limit(7)
      .then((workouts) => {
          res.json(workouts);
      })
      .catch((err) => {
          res.json(err);
      });
});
 */

};

