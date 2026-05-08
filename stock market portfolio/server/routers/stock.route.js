import express from "express";
import { createStock, getStocks } from "../controllers/stock.controller.js";

const stockRouter = express.Router();

stockRouter.route("/").get(getStocks).post(createStock);

export default stockRouter;