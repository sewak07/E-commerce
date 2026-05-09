import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["mobile", "tablet", "audio", "accessories"],
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  specs: {
    RAM: {
      type: String,
      required: true,
    },
    storage: {
      type: String,
      required: true,
    },
    camera: {
      type: String,
      required: true,
    },
    processor: {
      type: String,
      required: true,
    },
    battery: {
      type: String,
      required: true,
    },
  },
  productImages: {
    img1: {
      type: String,
      required: true,
    },
    img2: {
      type: String,
    },
  },
  stock: {
    type: Number,
    required: true,
  },
},
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);