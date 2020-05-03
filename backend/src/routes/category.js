const express = require("express");
const Joi = require("joi");
const Category = require("../models/category");

const helpers = require("../util/helpers");
const parseError = helpers.parseError;
const validate = require("../validations/category");
const CategoryAdd = validate.CategoryAdd;
const categoryRoute = express.Router();

categoryRoute.get("/", function(req, res) {
  Category.find({}, function(err, category) {
    res.send({ category: category });
  });
});

categoryRoute.get("/:id", async (req, res) => {
  console.log(req.params.id);

  
  try {
    let record = await Category.findOne({ _id: req.params.id });
    console.log(record);
    console.log(req.params.id);
    res.send(record);
  } catch (err) {
    return res.status(500).send(err);
  }
});

categoryRoute.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    console.log(req.body);
    await Joi.validate({ title }, CategoryAdd);
    const newCategory = new Category({ title });
    // const sessionUser = sessionizeUser(newUser);
    await newCategory.save();
    // req.session.user = sessionUser;
    res.send("Category Added");
    // console.log("save");
    // res.send({ userId: newUser.id, username });
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

/* Update a business directory entry */
categoryRoute.put("/update/:id", async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params.id);
    const update = { title: req.body.title };
    let category = await Category.findOneAndUpdate(
      { _id: req.params.id },
      update,
      { new: true }
    );
    res.send({ response: "success" });
  } catch (err) {
    res.send({ response: err });
  }
});

categoryRoute.delete("/delete/:id", async (req, res) => {
  try {
    let category = await Category.findOneAndRemove({
      _id: req.params.id
    });
    return res.send({ response: "success" });
  } catch (err) {
    return res.send({ response: err });
  }
});

// categoryRoute.post("/edit/:id", (req, res, next) => {
//   let category = new Category();
//   const query = { _id: req.params.id };
//   console.log(query);
//   const update = { title: req.body.title };
//   Category.findOneAndUpdate(query, update, {}, (err, category) => {
//     if (err) {
//       res.send(err);
//     }
//     // res.redirect("/manage/categories");
//     res.send("response uAdded");
//   });
// });

// categoryRoute.delete("/delete/:id", function(req, res, next) {
//   const query = { _id: req.params.id };
//   console.log(query);
//   Category.remove(query, (err, category) => {
//     if (err) {
//       res.send(err);
//     }
//     res.status(200);
//   });
// });

module.exports = categoryRoute;
