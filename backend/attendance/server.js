require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 3012;
const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  console.error("  MONGODB_URI not found in env");
  process.exit(1);
}




mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
