const express = require("express");
const route = express.Router();
const userController = require("../controllers/userController");
const {
  getFarms,
  getSingleFarm,
  investInFarm,
} = require("../controllers/farmsController");
const { auth } = require("../middleware/check-auth");

route.get("/", userController.getAllUser);
route.post("/signup", userController.createUser);
route.post("/login", userController.loginUser);
route.post("/get-user", userController.getUserByEmail);
route.post("/verify-code", userController.verifyCode);
route.post("/resend-otp", userController.resendOtp);
route.get("/farms", getFarms);
route.get("/single-farm/:id", auth, getSingleFarm);
route.get("/setup", auth, userController.setUp);
route.post("/invest-farm", auth, investInFarm);

module.exports = route;
