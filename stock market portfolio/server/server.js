import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import app from "./app.js";

dotenv.config();

app.listen(5000, () => {
  console.log("connected to backend");
  connectDB();
})