const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  Product: String,
  quantity: Number
});

module.exports = mongoose.model('Product', ProductSchema);
