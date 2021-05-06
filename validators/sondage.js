const Joi = require("joi");

const schema = {
  add: {
    sujet: Joi.string().required(),
    questions: Joi.array().required(),
  },
  update: {
    sujet: Joi.string().required(),
    questions: Joi.array().required(),
  },
};

module.exports = schema;
