import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/database.js";
import userRouter from "./router/user.router.js";
import adminRouter from "./router/admin.router.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/admin", adminRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})