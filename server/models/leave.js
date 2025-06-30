const mongoose = require("mongoose");
const leaveSchema = new mongoose.Schema({
  from: String,
  subject: String,
  date: String,
  message: String,
});
const Leave = mongoose.model("Leave", leaveSchema);
module.exports = Leave;
