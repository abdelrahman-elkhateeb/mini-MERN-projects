import Stock from "../models/stock.model.js";

export async function createStock(req, res) {
  try {
    const newStock = await Stock.create(req.body);
    res.status(201).json({ success: true, data: newStock })
  } catch (err) {
    res.status(400).json({ message: error.message })
  }
};

export async function getStocks(req, res) {
  try {
    const stock = await Stock.find({});
    res.status(200).json({ success: true, data: stock })
  }
  catch (err) {
    res.status(500).json({ message: error.message })
  }
};

