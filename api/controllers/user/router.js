const express = require("express");
const controller = require("./controller");
const auth = require("../../../middlewares/auth");
const userRouter = express.Router();

userRouter
  .post("/", controller.signUp)
  .post("/login", controller.logIn)
  .get("/info", auth.verifyToken, controller.getInfo);

module.exports = userRouter;
