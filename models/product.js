const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  description: String,
  banner: String,
  pics: Array,
  price: Number,
  stock: Number,
});

module.exports = model("Product", productSchema, "products");
