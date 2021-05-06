const express = require("express");
const controller = require("./controller");
const schema = require("../../../validators/sondage");
const validate = require("../../../validators/validate");

const sondageRouter = express.Router();

sondageRouter
  .get("/", controller.getSondages)
  .get("/:id", controller.getOneSondage)
  .post("/", validate(schema.add), controller.addSondage)
  .put("/:id", validate(schema.update), controller.updateSondage)
  .delete("/:id", controller.deleteSondage);
module.exports = sondageRouter;
