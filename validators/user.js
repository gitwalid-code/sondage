const Joi = require("joi");

const schema = {
  signup: {
    nom: Joi.string().required().max(10),
    prenom: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
  login: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
};

module.exports = schema;
