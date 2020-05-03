const express = require("express");
const router = express.Router();
const Joi = require("joi");
const Category = require("../models/category");

// const Article = require("../models/e");
const Excrept = require("../models/excrept");
const helpers = require("../util/helpers");
const parseError = helpers.parseError;
const validate = require("../validations/excrept");
const ExcreptAdd = validate.ExcreptAdd;
const ITEMS_PER_PAGE = 10;

router.get("/category", (req, res, next) => {
  console.log(req.query.page + "asd");
  console.log(req.query.category);
  const page = parseInt(req.query.page) || 1;
  console.log(page);
  let totalItems;
  var category = req.params.category;
  Excrept.find({ category: category })
    .countDocuments()
    .then(catExcepts => {
      totalItems = catExcepts;
      return Excrept.find({ category: category })
        .sort(category)
        .skip((page - 1) * ITEMS_PER_PAGE)
        .limit(ITEMS_PER_PAGE);
    })
    .then(excrepts => {
      res.send({
        excrepts: excrepts,
        totalPages: totalItems,
        currentPage: page,
        hasNextPage: ITEMS_PER_PAGE * page < totalItems,
        hasPreviousPage: page > 1,
        nextPage: page + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE)
      });
    });
});

router.get("/pages", (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  let totalItems;
  Excrept.find()
    .countDocuments()
    .then(numExcrepts => {
      totalItems = numExcrepts;
      return Excrept.find({})
        .skip((page - 1) * ITEMS_PER_PAGE)
        .limit(ITEMS_PER_PAGE);
    })
    .then(excrepts => {
      res.send({
        excrepts: excrepts,
        totalPages: totalItems,
        currentPage: page,
        hasNextPage: ITEMS_PER_PAGE * page < totalItems,
        hasPreviousPage: page > 1,
        nextPage: page + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE)
      });
    });
});
//   //     totalItems = numExcrepts;
//   //     return Excrept.find({})

router.get("/", async (req, res) => {
  //   // const page = req.query.page;

  //   console.log(req.query.start)
  //   console.log(req.query.amount)

  //   // let totalItems;
  //   // Excrept.find()
  //   //   .countDocuments()
  //   //   .then(numExcrepts => {
  //   //     totalItems = numExcrepts;
  //   //     return Excrept.find({})
  //   //     .skip((page - 1) * ITEMS_PER_PAGE)
  //   //     .limit(ITEMS_PER_PAGE)
  //   //   }).then(
  //   //     excrepts=>{
  //   //       res.send()
  //   //     }
  //   //   )

  //   //   ;
  try {
    const page = req.query.page;
    let excrept = await Excrept.find({});
    res.send(excrept);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    let record = await Excrept.findOne({ _id: req.params.id });
    record["lol"] = "lol";
    console.log(record);
    res.send(record);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { title, book, category, body, author, keywords } = req.body;

    await Joi.validate({ title, book, category, body, author }, ExcreptAdd);
    const newExcrept = new Excrept({
      title,
      book,
      category,
      body,
      author,
      keywords
    });
    // const sessionUser = sessionizeUser(newUser);
    await newExcrept.save();
    // req.session.user = sessionUser;
    res.send("Excrept Added");
    console.log("save");
    // res.send({ userId: newUser.id, username });
  } catch (err) {
    console.log(err);

    res.status(400).send(parseError(err));
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const query = { _id: req.params.id };
    const update = {
      title: req.body.title,
      book: req.body.book,
      category: req.body.category,
      body: req.body.body,
      author: req.body.author,
      keywords: req.body.keywords
    };
    // const update = { title: req.body.title };
    let excrept = await Excrept.findOneAndUpdate(query, update, {
      new: true
    });
    res.send("Excrept Updated");
  } catch (err) {
    res.send({ response: err });
  }
});
router.delete("/delete/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    let excrept = await Excrept.findOneAndRemove({
      _id: req.params.id
    });
    return res.send("Deleted");
  } catch (err) {
    return res.send({ response: err });
  }
});

// router.get("/pages", (req, res, next) => {
//   const page = parseInt(req.query.page);
//   let totalItems;
//   Excrept.find()
//     .countDocuments()
//     .then(numExcrepts => {
//       totalItems = numExcrepts;
//       return Excrept.find({})
//         .skip((page - 1) * ITEMS_PER_PAGE)
//         .limit(ITEMS_PER_PAGE);
//     })
//     .then(excrepts => {
//       res.send({
//         excrepts: excrepts,
//         totalPages: totalItems,
//         currentPage: page,
//         hasNextPage: ITEMS_PER_PAGE * page < totalItems,
//         hasPreviousPage: page > 1,
//         nextPage: page + 1,
//         previousPage: page - 1,
//         lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE)
//       });
//     });
// });
// router.put("/edit/:id", (req, res, next) => {
//   let excrept = new Excrept();
//   const update = {
//     title: req.body.title,
//     book: req.body.book,
//     category: req.body.category,
//     body: req.body.body,
//     author: req.body.author,
//     keywords: req.body.keywords
//   };

//   Excrept.findOneAndUpdate(query, update, {}, (err, excrept) => {
//     if (err) {
//       res.send(err);
//     }
//     // res.redirect("/manage/articles");
//     res.send("response uAdded");
//   });
// });

// router.delete("/delete/:id", function(req, res, next) {
//   const query = { _id: req.params.id };
//   console.log(query);
//   Excrept.remove(query, (err, excrept) => {
//     if (err) {
//       res.send(err);
//     }
//     res.status(200);
//   });
// });

module.exports = router;
