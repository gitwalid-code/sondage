const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
  texte: {
    type: String,
  },
  choix: [
    {
      type: String,
    },
  ],
  reponse: {
    type: Number,
  },
});

const question = mongoose.model("Question", questionSchema);

module.exports = question;
