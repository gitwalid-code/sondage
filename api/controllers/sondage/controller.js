const Sondage = require("../../../models/sondage");

const getSondages = async (req, res) => {
  try {
    const { sujet, sort } = req.query;
    const filters = {};
    const options = {};
    if (sujet) filters.text = { $regex: sujet, $options: "i" };
    if (sort) {
      options.sort = { createdAt };
    }
  } catch (error) {}
};
const getOneSondage = async (req, res) => {
  try {
    const { id } = req.params;
    const sondage = await Sondage.findById(id).populate("questions");
    if (!sondage) {
      return res.status(400).send({
        message: "Sondage doesn't exist",
      });
    }
    return res.status(200).send(sondage);
  } catch (error) {
    console.log("Error in getOneSondage =>", error);
    return res.status(500).send({
      message: "Server Error",
    });
  }
};
const addSondage = async (req, res) => {};
const updateSondage = async (req, res) => {};
const deleteSondage = async (req, res) => {};

module.exports = {
  getOneSondage,
  getSondages,
  addSondage,
  updateSondage,
  deleteSondage,
};
