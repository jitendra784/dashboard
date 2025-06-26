const express = require("express");
const router = express.Router()
const {registerUser, getAuser} = require("../controller/register_controller");

router.post("/register",registerUser);
router.get("/user",getAuser);

module.exports = router;