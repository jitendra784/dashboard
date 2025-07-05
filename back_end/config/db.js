const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected successfully")
  } catch (error) {
    console.log("mongodb connection failed",error)
  }
};

module.exports= connectDB;