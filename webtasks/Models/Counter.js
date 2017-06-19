const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    author: String,
    start: Date,
    created_at: Date,
    id: Number
})