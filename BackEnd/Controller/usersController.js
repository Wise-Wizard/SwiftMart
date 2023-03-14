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

module.exports = { authController };
