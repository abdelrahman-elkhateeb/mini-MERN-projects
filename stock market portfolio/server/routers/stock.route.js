import express from "express";
import { createStock, deleteStock, getStocks, updateStock } from "../controllers/stock.controller.js";

const stockRouter = express.Router();

stockRouter.route("/").get(getStocks).post(createStock);
stockRouter.route("/:id").delete(deleteStock).patch(updateStock);

export default stockRouter;