var mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
    name: String,
    type: String,
    image: String,
    description: String,
    price: Number,
    status: String
});

module.exports = mongoose.model("Item", itemSchema);