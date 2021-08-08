const db = require("../models");
const router = require("express").Router();

// get workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// get workouts in range
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// add exercise
router.put("/api/workouts/:id", (req, res) => {
  const body = req.body;
  const id = req.params.id;
  db.Workout.findByIdAndUpdate({ _id: id }, { exercises: body })
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// create workout
router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
