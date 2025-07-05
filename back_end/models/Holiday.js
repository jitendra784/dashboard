const mongoose = require("mongoose");

const holidaySchema = new mongoose.Schema({
  srno: Number,
  name: String,
  date: String,
  weekday: String,
});

const holidayModel = mongoose.model("Holiday", holidaySchema);
module.exports = holidayModel;
