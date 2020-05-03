const express = require("express");
const Joi = require("joi");
const User = require("../models/user");

const validate = require("../validations/user");
const signUp = validate.signUp;
const userRouter = express.Router();

const helpers = require("../util/helpers");
const parseError = helpers.parseError;
const sessionizeUser = helpers.sessionizeUser;

// import { parseError, sessionizeUser } from "../util/helpers";

userRouter.post("/", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(req.body);
    await Joi.validate({ username, email, password }, signUp);
    const newUser = new User({ username, email, password });
    const sessionUser = sessionizeUser(newUser);
    await newUser.save();
    req.session.user = sessionUser;
    res.send(sessionUser);

    // console.log("save");
    // res.send({ userId: newUser.id, username });
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

module.exports = userRouter;
