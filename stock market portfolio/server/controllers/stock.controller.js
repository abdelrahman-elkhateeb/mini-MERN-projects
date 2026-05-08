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

export async function updateStock(req, res) {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedStock = await Stock.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true
    });
    if (!updatedStock) {
      return res.status(404).json({ success: false, message: "Stock not found" });
    }

    res.status(200).json({ success: true, data: updatedStock });

  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

export async function deleteStock(req, res) {
  const { id } = req.params;
  try {
    const deletedStock = await Stock.findByIdAndDelete(id);
    if (!deletedStock) {
      return res.status(404).json({ success: false, message: "this stock couldn't be deleted" });
    }

    res.status(200).json({ success: true, message: "stock deleted successfully" });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}