const Joi = require("joi");

const title = Joi.string()
  .min(3)
  .max(30)
  .required();

const book = Joi.string()
  .min(3)
  .max(30)
  .required();

const category = Joi.string()
  .min(3)
  .max(30)
  .required();

const author = Joi.string()
  .min(3)
  .max(30)
  .required();

const body = Joi.string().required();

const message =
  "must be between 6-16 characters, " +
  "have at least one capital letter, " +
  "one lowercase letter, one digit, " +
  "and one special character";

const ExcreptAdd = Joi.object().keys({
  title,
  book,
  category,
  body,
  author
});

module.exports = { ExcreptAdd };
