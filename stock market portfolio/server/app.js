import express from 'express';
import cors from 'cors';
import stockRouter from './routers/stock.route.js';
const app = express();

app.use(cors());

// app.use(cors({
//   origin: '*',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true
// }));

app.use(express.json());

app.use("/api/stocks", stockRouter)

export default app;