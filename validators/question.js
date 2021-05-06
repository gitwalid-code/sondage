const Joi = require("joi");

const schema = {
  add: {
    texte: Joi.string().required(),
    choix: Joi.array().required(),
    reponse: Joi.number().required(),
  },
  update: {
    texte: Joi.string().required(),
    choix: Joi.array().required(),
    reponse: Joi.number().required(),
  },
};

module.exports = schema;
