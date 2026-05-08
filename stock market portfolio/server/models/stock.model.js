import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "you need to provide a company name"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "you need to provide a description"],
  },
  initial_price: {
    type: Number,
    required: [true, "you need to provide an initial price"]
  },
  price_2002: {
    type: Number,
    required: [true, "you need to provide a price_2002"]
  },
  price_2007: {
    type: Number,
    required: [true, "you need to provide a price_2007"]
  },
  symbol: {
    type: String,
    uppercase: true,
    trim: true
  }
},
  {
    timestamps: true
  }
);

const Stock = mongoose.model("Stock", stockSchema);

export default Stock;