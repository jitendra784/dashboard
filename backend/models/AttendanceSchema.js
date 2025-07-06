const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    // date: {
    //   type: Date,
    //   required: true,
    // },
    check_in: {
      type: String, // "HH:mm"
      default: null,
    },
    check_out: {
      type: String, // "HH:mm"
      default: null,
    }
  }, { timestamps: true }
);

module.exports = mongoose.model("attendance", attendanceSchema);
