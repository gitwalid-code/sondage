const express = require("express");
const controller = require("./controller");
const schema = require("../../../validators/question");
const validate = require("../../../validators/validate");
const questionRouter = express.Router();

questionRouter
  .get("/", controller.getQuestions)
  .get("/:id", controller.getOneQuestion)
  .post("/", validate(schema.add), controller.addQuestion)
  .put("/:id", validate(schema.update), controller.updateQuestion)
  .delete("/:id", controller.deleteQuestion);

module.exports = questionRouter;
