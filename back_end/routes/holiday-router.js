const express = require("express");
const router = express.Router();
const { getAllHolidays, addHoliday, update } = require("../controller/holidayController");

// GET /api/holidays
router.get("/holidays", getAllHolidays);

// POST /api/holidays
router.post("/holidays", addHoliday);

// POST /api/update
router.put("/holidays/:id", update);


module.exports = router;