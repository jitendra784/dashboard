const express = require("express");
const router = express.Router();

// ✅ Correct destructuring import
const { addDsr, getDsr } = require("../controller/add-Dsr-Controller");

// ✅ Route setup
router.route("/dsr")
  .post(addDsr)  // Must be a function
  .get(getDsr);  // Must be a function

module.exports = router;

