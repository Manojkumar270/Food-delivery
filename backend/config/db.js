import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://mk4539587:6381725860@cluster0.m10fw.mongodb.net/food-del"
    )
    .then(() => {
      console.log("DB connected");
    });
};
