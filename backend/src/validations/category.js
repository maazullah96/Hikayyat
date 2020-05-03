const Joi = require("joi");

const title = Joi.string()
  .min(3)
  .max(30)
  .required();

const message =
  "must be between 6-16 characters, " +
  "have at least one capital letter, " +
  "one lowercase letter, one digit, " +
  "and one special character";

const CategoryAdd = Joi.object().keys({
  title
});

module.exports = { CategoryAdd };
