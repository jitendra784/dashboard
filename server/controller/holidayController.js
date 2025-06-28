const Holiday = require("../models/Holiday");

// GET all holidays
const getAllHolidays = async (req, res) => {
  try {
    const holidays = await Holiday.find();
    res.status(200).json(holidays);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching holidays", error: error.message });
  }
};

// POST a new holiday
const addHoliday = async (req, res) => {
  try {
    const { srno, name, date, weekday } = req.body;

    if (!srno || !name || !date || !weekday) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newHoliday = new Holiday({ srno, name, date, weekday });
    await newHoliday.save();

    res
      .status(201)
      .json({ message: "Holiday added successfully", holiday: newHoliday });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding holiday", error: error.message });
  }
};

module.exports = { getAllHolidays, addHoliday };
