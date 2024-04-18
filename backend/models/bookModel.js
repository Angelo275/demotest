const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String }
});

const Bookmodel = mongoose.model("bookSchema", bookSchema);
module.exports = Bookmodel;