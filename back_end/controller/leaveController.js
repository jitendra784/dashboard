const Leave = require("../models/leave");
// get all resign list
const getAllLeave = async (req, res) => {
  try {
    const leaves = await Leave.find();
    res.status(200).json(leaves);
  } catch (error) {
    res.status(500).json({ msg: "Error Fetching leave", error: error.message });
  }
};

// post a new resign
const addLeave = async (req, res) => {
  try {
    const { from, subject, date, message } = req.body;
    if (!from || !subject || !date || !message) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    const newLeave = new Leave({ from, subject, date, message });
    await newLeave.save();
    res.status(200).json({ msg: "leave added successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Error adding leave", error: error.message });
  }
};

const deleteLeave = async (req, res) => {
  try {
    const deletedLeaveList = await Leave.findByIdAndDelete(req.params.id);
    if (!deletedLeaveList) {
      return res.status(404).json({ message: "leave list not found" });
    }
    res.status(200).json({ message: "leave list  deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update list
const updateLeaveList = async (req, res) => {
  try {
    const leaveList = await Leave.findById(req.params.id);
    if (!leaveList) {
      return res.status(404).json({ message: "Form not found" });
    }

    // ✅ Correct: update the document instance (not the model)
    leaveList.from = req.body.from || leaveList.from;
    leaveList.subject = req.body.subject || leaveList.subject;
    leaveList.date = req.body.date || leaveList.date;
    leaveList.message = req.body.message || leaveList.message;

    // ✅ Save the updated instance
    const updatedList = await leaveList.save();
    res.status(200).json(updatedList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllLeave, addLeave, deleteLeave, updateLeaveList };
