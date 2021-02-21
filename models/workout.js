const mongoose = require("mongoose");
const ExerciseSchema = require('./Exercise');

const WorkoutSchema = new mongoose.Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      ExerciseSchema,
    ],
  },
  { toJSON: { virtuals: true } }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((acc, exercise) => {
    return acc + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;