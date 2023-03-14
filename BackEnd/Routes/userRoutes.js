const express = require("express");
const {
  authController,
  getUserProfile,
} = require("../Controller/usersController");
const { protectHandler } = require("../Middleware/authMiddleware");
//Router Call
const router = express.Router();

//Post Email and Password
router.post("/login", authController);

//Fetches User Profile Data
router.route("/profile").get(protectHandler, getUserProfile);
module.exports = router;
