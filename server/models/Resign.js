const mongoose = require("mongoose");
const resignSchema = new mongoose.Schema({
  from: String,
  subject: String,
  date: String,
  message: String,
});
const resignModel = mongoose.model("Resign", resignSchema);
module.exports = resignModel;
