const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  authors: { type: [String], required: true },
  image: { type: String, required: false, default: 'https://via.placeholder.com/250' },
  link: { type: String, required: false, default: 'No link'},
  description: {type: String, default: 'No description'},
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
