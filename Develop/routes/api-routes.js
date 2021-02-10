var path = require("path");

module.exports = function (app) {
  //index route
  app.get("/api/workouts", function (req, res) {
    db.Book.find({})
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
    // res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  //exercise route
};

// import from Models folder
// not Book, Workout...
