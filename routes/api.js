const db = require("../models");
const router = require("express").Router();

// get workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then((workout) => {
      // loop through to get total duration (BUG HERE)
      workout.forEach((wkt) => {
        let total = 0;
        wkt.exercises.forEach((event) => {
          total += event.duration;
        });
        wkt.totalDuration = total;
      });
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// get workouts in range
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// add exercise
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.updateOne(
    // update workout based on _id value
    { _id: req.params.id },
    // update body
    {
      $push: {
        exercises: { ...req.body },
      },
    }
  )
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// create workout
router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
