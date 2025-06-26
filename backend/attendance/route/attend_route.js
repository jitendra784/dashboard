const express = require("express");
const router = express.Router()
const {createAttendance, getAttendance} = require("../controller/attend_controller");

router.post("/attend",createAttendance);
router.get("/attend",getAttendance);

module.exports = router;