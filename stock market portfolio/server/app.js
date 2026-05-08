import express from 'express';
import stockRouter from './routers/stock.route.js';
const app = express();

app.use(express.json());

app.use("/api/stocks", stockRouter)

export default app;