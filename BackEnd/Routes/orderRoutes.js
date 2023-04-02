const express = require("express");
const { addOrderItem } = require("../Controller/orderController");
const { protectHandler } = require("../Middleware/authMiddleware");

//Router Call
const router = express.Router();
router.route("/").post(protectHandler, addOrderItem);
module.exports = router;
