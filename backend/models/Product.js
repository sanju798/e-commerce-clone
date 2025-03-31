const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
  countInStock: { type: Number, default: 0 }
});

module.exports = mongoose.model('Product', ProductSchema);
