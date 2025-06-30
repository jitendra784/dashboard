const Resign = require("../models/Resign");
// get all resign list
const getAllResign = async (req, res) => {
  try {
    const resign = await Resign.find();
    res.status(200).json(resign);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error Fetching resign", error: error.message });
  }
};

// post a new resign
const addResign = async (req, res) => {
  try {
    const { from, subject, date, message } = req.body;
    if (!from || !subject || !date || !message) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    const newResign = new Resign({ from, subject, date, message });
    await newResign.save();
    res.status(200).json({ msg: "resign added successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Error adding resign", error: error.message });
  }
};

module.exports = { getAllResign, addResign };
