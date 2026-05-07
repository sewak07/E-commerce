import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/database.js";
import authRouter from "./router/auth.router.js";
import roleRouter from "./router/role.router.js";
import productRouter from "./router/product.router.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/role", roleRouter);
app.use("/api/v1/products", productRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})