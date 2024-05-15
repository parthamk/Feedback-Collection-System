const express = require("express");
const router = express.Router();
const {register, login, getAllAdmins, updatePassword} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.get('/admins', getAllAdmins);
router.get('/update', updatePassword);

module.exports = router;