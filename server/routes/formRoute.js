const express = require("express");
const router = express.Router();
const fromController = require("../controllers/fromController");

router.post("/submit", fromController.submitForm);
router.get('/forms', fromController.getAllForms);

module.exports = router;