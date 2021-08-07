const db = require("../models");
const router = require("express").Router();

// get workouts
router
  .get("/api/workouts", (req, res) => {
    // cream filling
  })
  .catch((err) => {
    res.json(err);
  });

// add exercise
router
    .put("/api/workouts", (req, res) => {
      // cream filling
  })
  .catch((err) => {
    res.json(err);
  });

// create workout
router
  .post("/api/workout", (req, res) => {
    // cream filling
  })
  .catch((err) => {
    res.json(err);
  });

// get workouts in range
router
  .get("/api/workouts/range", (req, res) => {
    // cream filling
  })
  .catch((err) => {
    res.json(err);
  });

module.exports = router;
