const express = require("express");
const { authController } = require("../Controller/usersController");

//Router Call
const router = express.Router();

//Post Email and Password
router.post("/login", authController);

module.exports = router;
