const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const generateToken = require("../Utility/generateToken");
const jwt = require("../Utility/generateToken");

const authController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const currentUser = await User.findOne({ email });
  if (currentUser && (await currentUser.matchPassword(password))) {
    res.json({
      _id: currentUser._id,
      name: currentUser.name,
      email: currentUser.email,
      isAdmin: currentUser.isAdmin,
      token: generateToken(currentUser._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email");
  }
});
const getUserProfile = asyncHandler(async (req, res) => {
  const loggedInUser = await User.findById(req.user._id);
  if (loggedInUser) {
    res.json({
      _id: loggedInUser._id,
      name: loggedInUser.name,
      email: loggedInUser.email,
      isAdmin: loggedInUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not Found!");
  }
});
module.exports = { authController, getUserProfile };
