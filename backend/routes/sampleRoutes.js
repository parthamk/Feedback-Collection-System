const express = require("express");
const router = express.Router();
const sampleController = require("../controllers/sampleController");

// Get all sample
router.get("/getData", sampleController.getSample);

// Create new sample
router.post("/createSample", sampleController.createSample);

module.exports = router;