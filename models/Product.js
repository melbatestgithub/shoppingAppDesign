const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String,  unique: true },
    desc: { type: String },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    status:{type:String,default:"pending"}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
