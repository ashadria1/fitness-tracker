const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  type: String,
  name: String,
  duration: Number,
  distance: Number,
  weight: Number,
  reps: Number,
  sets: Number,
});

module.exports = ExerciseSchema;