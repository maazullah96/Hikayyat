const mongoose = require("mongoose");

const excreptSchema = mongoose.Schema({
  
  title: {
    type: String,
    validate: {
      validator: title => Excrept.doesNotExist({ title }),
      message: "Title  already exists"
    }
  },
  book: {
    type: String
  },
  category: {
    type: String
  },
  body: {
    type: String
  },
  author: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  keywords: [
    {
      type: String
    }
  ]
});

excreptSchema.statics.doesNotExist = async function(field) {
  return (await this.where(field).countDocuments()) === 0;
};

const Excrept = mongoose.model("Excrept", excreptSchema);

module.exports = Excrept;
