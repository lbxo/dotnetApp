const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    updated_date: { type: Date, default: Date.now },
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;