const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  title: {
    type: String,
    validate: {
      validator: title => Category.doesNotExist({ title }),
      message: "Title  already exists"
    }
  }
});

categorySchema.statics.doesNotExist = async function(field) {
  return (await this.where(field).countDocuments()) === 0;
};

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
