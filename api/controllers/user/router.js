const express = require("express");
const controller = require("./controller");
const auth = require("../../../middlewares/auth");
const userRouter = express.Router();
const schema = require("../../../validators/user");
const validate = require("../../../validators/validate");

userRouter
  .post("/", validate(schema.signup), controller.signUp)
  .post("/login", validate(schema.login), controller.logIn)
  .get("/info", auth.verifyToken, controller.getInfo);

module.exports = userRouter;
