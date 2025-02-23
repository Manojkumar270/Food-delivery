import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cartRouter from "./routes/cartRouts.js";
import "dotenv/config.js";
import orderRouter from "./routes/orderRoute.js";

//app config
const app = express();
const port = process.env.port || 4000;

//middleware

app.use(express.json());
app.use(cors());

//DB connection
connectDB();

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order/", orderRouter);

app.get("/", async (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

// mongodb+srv://mk4539587:<db_password>@cluster0.m10fw.mongodb.net/?
