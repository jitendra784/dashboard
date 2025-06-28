// const { Schema, model } = require("mongoose");

// const DsrSchema = new Schema(
//   {
//     email: {
//       type: String,
//       required: true,
//     },
//     date:{
//       type: String,
//       required: true,
//     },
//     attachment: {
//       type: String,
//       required: true,
//     },
//     project: [
//       {
//         projectname: { type: String, required: true },
//         projectdetails: { type: String, required: true },
//         todo: { type: String, required: true },
//       },
//     ],
//   },
//   { timestamps: true } // Optional: adds createdAt and updatedAt
// );

// // Model
// const Dsr = model("AddDsr", DsrSchema);
// module.exports = Dsr;

const mongoose = require("mongoose");

const dsrSchema = new mongoose.Schema({
  email: String,
  date: String,
  attachment: String,
  projectName: String,
  projectDescription: String,
  todoTasks: [String]
}, { timestamps: true });

module.exports = mongoose.model("AddDsr", dsrSchema);

