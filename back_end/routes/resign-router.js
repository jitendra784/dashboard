const express = require("express");
const router = express.Router();
const { getAllResign, addResign } = require("../controller/resignController");
// GET /api/resign
router.get("/resign",getAllResign);
// GET /api/holidays
router.post("/resign",addResign);


module.exports = router;