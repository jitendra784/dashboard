const express = require("express");
const router = express.Router();
const { getAllHolidays, addHoliday } = require("../controller/holidayController");

// GET /api/holidays
router.get("/holidays", getAllHolidays);


router.post("/holidays", addHoliday);

module.exports = router;